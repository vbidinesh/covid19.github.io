import requests
import pandas as pd
from pandas.io.json import json_normalize
import json
import highchartssample
from dateutil.parser import parse
import analyticsutils
from functools import reduce
from datetime import datetime, date, time, timedelta

today=datetime.today().strftime('%Y-%m-%d')
yesterday=(datetime.today() - timedelta(days=1)).strftime('%Y-%m-%d')
day_before=(datetime.today() - timedelta(days=2)).strftime('%Y-%m-%d')
response = requests.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history", verify=False)
history_json = response.json()
hospitalresponse=requests.get("https://api.rootnet.in/covid19-in/stats/hospitals",verify=False)
hospital_json=hospitalresponse.json()

stateresponse=requests.get("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise",verify=False)
raw_json=stateresponse.json()
last_refreshed=raw_json['data']['lastRefreshed']
dt = parse(last_refreshed)
update_date=dt.date().strftime("%d-%m-%Y")
update_time=str(dt.time().hour) +':'+ str(dt.time().minute)

print(raw_json)
summarydata=raw_json['data']['total']
regionaldata=raw_json['data']['statewise']
df=json_normalize(regionaldata)
states=list(df['state'])
regionalhospitaldata=hospital_json['data']['regional']
hsptl_df=json_normalize(regionalhospitaldata)
hospitals_state=list(hsptl_df['state'])
confirmedvalues=[]
confirmedvaluesforeign=[]
activevalues=[]
recoveredvalues=[]
deathvalues=[]
totalvalues=[]
seriesdata={}
hospital_series={}
beds_series={}
historical_series={}
daily_confirmed=[]
daily_recovered=[]
daily_death=[]
daily_active=[]
urban_hospitals=[]
rural_hospitals=[]
urban_beds=[]
rural_beds=[]
dates=[]

for state in states:
    confirmedvalues.append(int(df.loc[df['state'] == state,'confirmed']))
    recoveredvalues.append(int(df.loc[df['state'] == state, 'recovered']))
    activevalues.append(int(df.loc[df['state'] == state, 'active']))
    deathvalues.append(int(df.loc[df['state'] == state, 'deaths']))
for state in hospitals_state:
    if(state!="INDIA"):
        urban_hospitals.append(list(hsptl_df.loc[hsptl_df['state'] == state,'urbanHospitals'])[0])
        rural_hospitals.append(list(hsptl_df.loc[hsptl_df['state'] == state, 'ruralHospitals'])[0])
        urban_beds.append(list(hsptl_df.loc[hsptl_df['state'] == state, 'urbanBeds'])[0])
        rural_beds.append(list(hsptl_df.loc[hsptl_df['state'] == state, 'ruralBeds'])[0])
totalvalues=confirmedvalues+confirmedvaluesforeign+recoveredvalues+deathvalues
seriesdata['Confirmed']=confirmedvalues
seriesdata['Active']=activevalues
seriesdata['Recovered']=recoveredvalues
seriesdata['Death']=deathvalues
hospital_series['Urban Hospitals']=urban_hospitals
hospital_series['Rural Hospitals']=rural_hospitals
beds_series['Urban Beds']=urban_beds
beds_series['Rural Beds']=rural_beds
print(hospital_series)



def get_today_count():
    daily_array=history_json['data']['history']
    try:
        today_dict = [x for x in daily_array if x['day'] == today][0]
        yes_dict = [x for x in daily_array if x['day'] == yesterday][0]
    except:
        today_dict = [x for x in daily_array if x['day'] == yesterday][0]
        yes_dict = [x for x in daily_array if x['day'] == day_before][0]
    totaldifference=pd.DataFrame(today_dict['total'], index=[0]).subtract(pd.DataFrame(yes_dict['total'], index=[0]))
    statewisedifference=pd.DataFrame(today_dict['statewise']).set_index('state').subtract(pd.DataFrame(yes_dict['statewise']).set_index('state'))
    daily_json={}
    total_daily_json=json.loads(totaldifference.to_json(orient='records'))[0]
    #print(total_daily_json)
    statewisedifference=statewisedifference.transpose()
    state_daily_json = json.loads(statewisedifference.to_json())
    #print(state_daily_json)
    daily_json['total']=total_daily_json
    daily_json['statewise']=state_daily_json
    print(daily_json)
    return daily_json
print(regionaldata)
daily_json=get_today_count()

def get_historical_data():
    daily_array=history_json['data']['history']
    for day in daily_array:
        date=day['day']
        dates.append(date)
        daily_confirmed.append(day['total']['confirmed'])
        daily_recovered.append(day['total']['recovered'])
        daily_death.append(day['total']['deaths'])
        daily_active.append(day['total']['active'])
    diff_confirmed = [daily_confirmed[i + 1] - daily_confirmed[i] for i in range(0, len(daily_confirmed) - 1)]
    diff_active=[daily_active[i + 1] - daily_active[i] for i in range(0,len(daily_active) - 1)]
    diff_death = [daily_death[i + 1] - daily_death[i] for i in range(0, len(daily_death) - 1)]
    diff_recovered = [daily_recovered[i + 1] - daily_recovered[i] for i in range(0, len(daily_recovered) - 1)]

    diff_active.insert(0, daily_active[0])

    diff_recovered.insert(0, daily_active[0])

    diff_death.insert(0, daily_active[0])
    historical_series['Active'] = diff_active
    historical_series['Recovered']= diff_recovered
    historical_series['Death'] = diff_death

    print(historical_series)



    # historical_series['Recovered'] = daily_recovered
    # historical_series['Death'] = daily_death





def merge_daily_with_summary():
    for state in regionaldata:

        state['active_new']=daily_json['statewise'][state['state']]['active']
        state['confirmed_new'] = daily_json['statewise'][state['state']]['confirmed']
        state['recovered_new'] = daily_json['statewise'][state['state']]['recovered']
        state['deaths_new'] = daily_json['statewise'][state['state']]['deaths']
    print(regionaldata)



merge_daily_with_summary()
get_historical_data()

analyticsutils.addsummarycounters(summarydata,daily_json,update_date,update_time)
analyticsutils.generate_state_wise_table(regionaldata)
highchartssample.create_chart(hospitals_state,hospital_series,"Hospitals by State","hospital","bar","column",True,True)
highchartssample.create_chart(hospitals_state,beds_series,"Beds by State","beds","bar","column",True,True)
highchartssample.create_line_chart(dates,historical_series,"Trend","trend","waterfall","column",False,False)









