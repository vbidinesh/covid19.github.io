from highcharts import Highchart


def create_chart(categories,values,title,filename,charttype,orientation,axisreverse,stack):
    chart = Highchart()
    options = {
    'chart': {
        'type': charttype
    },
        'title': {
            'text': title
        },

        'xAxis': {
            'reversed': axisreverse,

    'categories': categories
            ,
            'maxPadding': 0.05,
            'showLastLabel': True
        },
        'yAxis': {
            'title': {
                'text': '#Cases'
            }, 'stackLabels': {
            'enabled': stack,
            'style': {

                'color': 'black'
            }
        },
            'lineWidth': 2
        }, 'plotOptions': {
        'series': {
            'dataLabels': {
                'enabled': True,'style': {
                'fontWeight': 'bold',
                'color': 'gray'
            }
            },             'stacking': 'normal'
        }
        }
    ,
        'legend': {
            'enabled': True
        },
        'tooltip': {
            'shared':True,
            'enabled':True

        }
    }

    chart.set_dict_options(options)
    print(options)
    colors=['#1A5276','#6E2C00','#2C3E50']
    keys=list(values.keys())
    for series in keys:
        data =  values[series]
        chart.add_data_set(data, charttype, series, marker={'enabled': True},color=colors[keys.index(series)])
    print(filename)
    chart.save_file(filename)


def create_line_chart(categories,values,title,filename,charttype,orientation,axisreverse,stack):
    chart = Highchart()
    options = {
    'chart': {
        'type': charttype
    },
        'title': {
            'text': title
        },

        'xAxis': {


    'categories': categories,
            'labels':{
                'rotation':45
            }



        },
        'yAxis': {
            'title': {
                'text': '#Cases'
            },
            'stackLabels': {
    'enabled': False,'verticalAlign':'top','y':100}}, 'plotOptions': {
        'series': {
            'dataLabels': {
                'enabled': True


            },'stacking':'normal'
        }
        }
    ,
        'legend': {
            'enabled': True
        },
        'tooltip': {

            'enabled':True,
            'shared': True,
            'formatter' : "function(){ var s = '<b>'+ this.x +'</b>'; var s1=''; var sum = 0; $.each(this.points, function(i, point) { s1 += '<br/><b>'+ point.series.name +'</b>: '+ point.y ; sum += point.y; }); s += '<br/><b>Total</b>: '+sum ; return s+s1;}"

        }
    }

    chart.set_dict_options(options)
    print(options)
    colors=['#1A5276','#6E2C00','#2C3E50','#45B39D']
    keys=list(values.keys())
    for series in keys:
        data =  values[series]
        chart.add_data_set(data, charttype, series, marker={'enabled': True},color=colors[keys.index(series)])
    print(filename)
    chart.save_file(filename)




