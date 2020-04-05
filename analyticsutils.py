import json

def addsummarycounters(summarydata,dailydata,date,time):
    confirmed=summarydata['confirmed']
    recoverd = summarydata['recovered']
    death = summarydata['deaths']
    active = confirmed - recoverd - death
    htmlstring='<html>' \
               '<head><link rel="stylesheet" href="dashboard.css">' \
               '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>' \
               '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">'\
                '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>'\
                '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>' \
               '<script src="https://code.highcharts.com/highcharts.js"></script>' \
               '<script src="action.js"></script>' \
               '<script src="https://kit.fontawesome.com/a887df751b.js" crossorigin="anonymous"></script>' \
               '</head>' \
               '<h1>COVID-19 INDIA STATUS</h1>'\
               '<h3>Refreshed at '+date+' '+time+'</h3>'\
               '<div class="wrapper">' \
               ' <div class="counter col_fourth"> ' \
               '<span style=\'font-size: 30px; color: red; float: left;\'> <i class=\'fas fa-arrow-up\'></i> '+str(dailydata['total']['confirmed'])+'</span>' \
               '<h2 class="timer count-title count-number" data-to="'+str(confirmed)+'" data-speed="1500"></h2>' \
               ' <p class="count-text ">Total Cases</p> </div>' \
               ' <div class="counter2 col_fourth"> <span style=\'font-size: 30px; color: red; float: left;\'> <i class=\'fas fa-arrow-up\'></i> '+str(dailydata['total']['active'])+' </span> ' \
               '<h2 class="timer count-title count-number" data-to="'+str(active)+'" data-speed="1500"></h2> ' \
               '<p class="count-text ">Active</p> </div>' \
               ' <div class="counter3 col_fourth"><span style=\'font-size: 30px; color: green; float: left;\'> <i class=\'fas fa-arrow-up\'></i> '+str(dailydata['total']['recovered'])+' </span> ' \
               '<h2 class="timer count-title count-number" data-to="'+str(recoverd)+'" data-speed="1500"></h2> ' \
               '<p class="count-text ">Recovered</p> </div> ' \
               '<div class="counter4 col_fourth end"> <span style=\'font-size: 30px; color: red; float: left;\'> <i class=\'fas fa-arrow-up\'></i>  '+str(dailydata['total']['deaths'])+'</span>' \
               '<h2 class="timer count-title count-number" data-to="'+str(death)+'" data-speed="1500"></h2> ' \
               '<p class="count-text ">Death</p> </div> </div>' \
                '<div id="content">' \
                '<ul class="nav nav-tabs"> <li class="active"><a data-toggle="tab" href="#summary">Summary</a></li> <li><a data-toggle="tab" href="#history">Daily Trend</a></li> <li><a data-toggle="tab" href="#hospitalsummary">Hospitals by State</a></li> <li><a data-toggle="tab" href="#beds">Patient Beds by state</a></li> </ul> ' \
                '<div class="tab-content"> ' \
                '<div id="summary" class="tab-pane fade in active"><div id="iframe"><iframe src="./tabulator.html" scroll="no" frameborder="0" marginheight="0px" marginwidth="0px"></iframe></div></div> ' \
                '<div id="history" class="tab-pane fade"><div id="iframe2"><iframe src="./trend.html" scroll="no" frameborder="0" marginheight="0px" marginwidth="0px"></iframe></div></div> ' \
                '<div id="hospitalsummary" class="tab-pane fade"><div id="iframe2"><iframe src="./hospital.html" scroll="no" frameborder="0" marginheight="0px" marginwidth="0px"></iframe></div></div> ' \
                '<div id="beds" class="tab-pane fade"><div id="iframe2"><iframe src="./beds.html" scroll="no" frameborder="0" marginheight="0px" marginwidth="0px"></iframe></div></div>' \
                '</div></html>'
    writetofile("index.html",htmlstring)



def writetofile(filename,content):
    f=open(filename,"w",encoding="utf-8")
    f.write(content)
    f.close()

def generate_state_wise_table(data,dailydata=None):
    tablehtml='<html> \
    <head> \
    <title>Tabulator Example</title> \
    <link href="https://unpkg.com/tabulator-tables@4.6.0/dist/css/bootstrap/tabulator_bootstrap4.min.css" rel="stylesheet"> <link href="./dashboard.css" rel="stylesheet">\
    <script type="text/javascript" src="https://unpkg.com/tabulator-tables@4.6.0/dist/js/tabulator.min.js"></script> \
    <script type="text/javascript" src="tabledata.js" ></script> \
    <script src="https://kit.fontawesome.com/a887df751b.js" crossorigin="anonymous"></script>\
    </head> \
    <body> \
    <div id="example-table"></div> \
    <script> var table = new Tabulator("#example-table", ' \
              '{ layout:"fitColumns",' \
              'height:"100%", ' \
              'data:tableDataNested, ' \
              'dataTree:true, ' \
              'dataTreeStartExpanded:true, ' \
              'columns:[ '\
              '{title:"State", field:"state"}, ' \
              '{title:"Total Confirmed Cases", field:"confirmed",dir:"asc"},' \
              '{title:"New Cases Today", field:"confirmed_new",formatter:function(cell, formatterParams, onRendered){ if(cell.getValue() > 0){ return cell.getValue() + "<span style=\'font-size: 14px; color: red;\'> <i class=\'fas fa-arrow-up\'></i> </span>"; } else{ return cell.getValue() } }},' \
              '{title:"Active", field:"active"}, ' \
              '{title:"Recovered", field:"recovered"}, ' \
              '{title:"Recovered Today", field:"recovered_new",formatter:function(cell, formatterParams, onRendered){ if(cell.getValue() > 0){ return cell.getValue() + "<span style=\'font-size: 14px; color: green;\'> <i class=\'fas fa-arrow-up\'></i> </span>"; } else{ return cell.getValue() } }},' \
              '{title:"Death", field:"deaths" },' \
              '{title:"Dead Today", field:"deaths_new",formatter:function(cell, formatterParams, onRendered){ if(cell.getValue() > 0){ return cell.getValue() + "<span style=\'font-size: 14px; color: red;\'> <i class=\'fas fa-arrow-up\'></i> </span>"; } else{ return cell.getValue() } }} ] });' \
              '</script> \
    </body> \
    </html>'


    jsstring='const tableDataNested = ' + json.dumps(data) + ";"
    writetofile("tabulator.html",tablehtml)
    writetofile("tabledata.js",jsstring)





