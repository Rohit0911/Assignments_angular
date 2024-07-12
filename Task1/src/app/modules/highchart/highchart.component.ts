import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import TreemapModule from 'highcharts/modules/treemap'

TreemapModule(Highcharts);
  



@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css'],
})

// const colors = Highcharts.getOptions().colors.map((c, i) =>
//   // Start out with a darkened base color (negative brighten), and end
//   // up with a much brighter color
//   Highcharts.color(Highcharts.getOptions().colors[0])
//       .brighten((i - 3) / 7)
//       .get()
// );

export class HighchartComponent implements OnInit {
  show = false;


  displayCharts(btn: string) {
    this.show = true;
    switch (btn) {
      case 'pie':
        this.plotPie();
        break;
      case 'column':
        this.plotColumn();
        break;
      case 'line':
        this.plotLine();
        break;
      case 'tree':
        this.plotTree();
        break;
      case 'area':
        this.plotArea();
        break;
      case 'stacked':
        this.plotStacked();
        break;
    }
  }



  constructor() { }
  ngOnInit(): void { }



  plotColumn(){
    Highcharts.chart('container',{
      chart: {
        type: 'column'
    },
    title: {
        text: 'Wheat consumption by Countries',
        align: 'center'
    },
    
    xAxis: {
      categories: ['2022', '2023', '2024'],
      crosshair: true,
      // accessibility: {
      //     description: 'Countries'
      // }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Wheat Thousand Metric Tons'
        }
    },
    series: [
      {
          name: 'India',
          data: [376, 780, 850]
      },
      {
          name: 'China',
          data: [580, 660, 876]
      },
      {
          name: 'EU',
          data: [487, 673, 889]
      }
  ] as any
    })
  }


  plotLine(){
    Highcharts.chart('container',{
      title:{
        text: 'Solar Employment Growth',
        align: 'center'
      },
      yAxis:{
        title:{
          text: 'Number of Employees'
        }
      },
      xAxis:{
        title:{
          text: 'years'
        }
        // },
        // accessibility:{
        //   rangeDescription :'Range:2016 to 2020'
        // }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      plotOptions: {
        series: {
            label: {
                connectorAllowed: true
            },
            pointStart: 2010
        }
    },
    series:[{
      name: 'Sunrun',
      data: [10, 17, 15, 14, 12, 9]
    },
    {
      name: 'DJ',
      data: [14, 7, 5, 19, 21, 24]
    },
    {
      name: 'SolarCity',
      data: [1, 3, 20, 11, 17, 19]
    }
    ] as any,
    
    })
  }


  plotArea(){
    
      Highcharts.chart('container', {
        chart: {
          type: 'area'
        },
        title: {
          text: 'Company Performance Over Years'
        },
        xAxis: {
          accessibility: {
            rangeDescription: 'Range: 2000 to 2024.'
          },
          categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
        },
        yAxis: {
          title: {
            text: 'Revenue (in millions)'
          }
        },
        tooltip: {
          pointFormat: '{series.name} had a revenue of <b>{point.y:,.0f}</b><br/>million in {point.x}'
        },
        plotOptions: {
          area: {
            marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        series: [
          {
            name: 'Company A',
            data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210]
          },
          {
            name: 'Company B',
            data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125]
          },
          {
            name: 'Company C',
            data: [8, 12, 16, 22, 28, 34, 38, 44, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176]
          }
        ] as any
      });
    
    
  }


  plotTree(){
    Highcharts.chart('container', {
      chart: {
        type: 'treemap',
        height:600
      },
      
      series: [{
        type: 'treemap',
        layoutAlgorithm: 'sliceAndDice',
        data: [
          { name: 'Fruits', value: 8 },
          { name: 'Mango', value: 4 },
          { name: 'Apple', value: 3 },
          { name: 'Banana', value: 1 },
          { name: 'Bluberry', value: 2 },
          { name: 'Grapes', value: 3 },
          { name: 'Almonds', value: 1 }
        ]
      }],
      title: {
        text: 'Treemap'
      },
      
    });
  
  }

  


  plotPie(){
    Highcharts.chart('container', {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Placement branch wise'
      },
      tooltip: {
          valueSuffix: 'percentage'
      },
      
      plotOptions: {
          series: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: [ {
                  enabled: true,
                  distance: -40,
                  format: '{point.percentage:.1f}%',
                  style: {
                      fontSize: '1.2em',
                      textOutline: 'none',
                      opacity: 0.7
                  },
          
              }]
          } as any
      },
      series: [
          {
              name: 'Percentage',
              colorByPoint: true,
              data: [
                  {
                    
                      name: 'CSE',
                      y: 63,
                      
                  },
                  {
                      name: 'DS',
                      y: 23.8
                  },
                  {
                      name: 'E&TC',
                      y: 13.2
                  },
                  {
                      name: 'Other',
                      y: 1.8
                  },
                  
              ]
          }
      ] as any
  });
  }

  plotStacked(){
    Highcharts.chart('container', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Reveneu Generated by Tech Giants'
      },
      xAxis: {
          categories: [
              '2019', '2020', '2021', '2022', '2023'
          ]
      },
      yAxis: {
          min: 0,
          
      },
      legend: {
          reversed: true

      },
      plotOptions: {
          series: {
              stacking: 'normal',
              dataLabels: {
                  enabled: true
              }
          }
      },
      series: [{
          name: 'Microsoft',
          data: [1074, 1827, 2052, 1093, 7272],
          color: '#FF0000'
      }, {
          name: 'Google',
          data: [2166, 2298, 3646, 1858, 3916],
          color: '#FFA500'
      }, {
          name: 'Apple',
          data: [1213, 12121, 15142, 3695, 2537],
          color: '#FFFF00'
      }] as any
    });
  }
}


