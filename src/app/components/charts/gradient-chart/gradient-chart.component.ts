import { Component, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-gradient-chart',
  templateUrl: './gradient-chart.component.html',
  styleUrls: ['./gradient-chart.component.scss']
})
export class GradientChartComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        const options = {
            chart: {
                height: 350,
                type: 'line',
                shadow: {
                    enabled: false,
                    color: '#bbb',
                    top: 3,
                    left: 2,
                    blur: 3,
                    opacity: 1
                },
            },
            stroke: {
                width: 7,
                curve: 'smooth'
            },
            series: [{
                name: 'Likes',
                data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
            }],
            xaxis: {
                type: 'datetime',
                categories: [
                    '1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000',
                    '5/11/2000', '6/11/2000', '7/11/2000',
                    '8/11/2000', '9/11/2000', '10/11/2000',
                    '11/11/2000', '12/11/2000', '1/11/2001',
                    '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001' ,
                    '6/11/2001'
                ],
            },
            title: {
                text: 'Social Media',
                align: 'left',
                style: {
                    fontSize: '13px',
                    color: '#666'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: [ '#FDD835'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100]
                },
            },
            markers: {
                size: 4,
                opacity: 0.9,
                colors: ['#FFA41B'],
                strokeColor: '#fff',
                strokeWidth: 2,
                hover: {
                    size: 7,
                }
            },
            yaxis: {
                min: -10,
                max: 40,
                title: {
                    text: 'Engagement',
                },
            }
        };

        const chart = new ApexCharts(
            document.querySelector('#apex-gradient-chart'),
            options
        );

        chart.render();
    }

}