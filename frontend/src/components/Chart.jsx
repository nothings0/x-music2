import React, { useContext } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { Line } from 'react-chartjs-2';

import { SongContext } from '../Contexts/SongContext';

const ChartX = () => {

    const { chart } = useContext(SongContext)
    const dataChart = chart.chart
    const labelChart = dataChart?.times.map(item => {
        return item.hour.concat(":00")
    })
    const arr = Object.keys(dataChart?.items)
    const dataChart_1 = dataChart?.items[arr[0]].map(item => {
        return item.counter
    })
    const dataChart_2 = dataChart?.items[arr[1]].map(item => {
        return item.counter
    })
    const dataChart_3 = dataChart?.items[arr[2]].map(item => {
        return item.counter
    })

    const label1 = chart?.items[0].title
    const label2 = chart?.items[1].title
    const label3 = chart?.items[2].title

  return (
    <div className="chart">
        <div className="chart__alpha"></div>
        <div className="chart__blur"></div>
        <div className="chart__line">
        <Line
        data = {{
            labels : labelChart,
            datasets : [{
                label : [label1],
                data : dataChart_1,
                backgroundColor : 'blue',
                borderColor : 'blue',
            },
            {
                label : [label2],
                data : dataChart_2,
                backgroundColor : 'green',
                borderColor : 'green',
            },
            {
                label : [label3],
                data : dataChart_3,
                backgroundColor : 'red',
                borderColor : 'red',
            }
        ]
        }}
        height={400}
        width={600}
        options = {{
            maintainAspectRatio : false,
            scales: {
                y: {
                    ticks: {
                        color: "#27272f",
                        font: {
                          size: 14
                        }
                    },
                    beginAtZero: true
                },
                x: {
                    ticks: {
                      color: "#27272f",
                      font: {
                        size: 14
                      }
                    }
                }
            },
            hoverBorderWidth : 15,
            hoverBorderColor: 'white',
            fill: false,
            hoverOffset: 4,
            color: 'black',
            tension: 0.3
        }}
        />
        </div>
    </div>
  )
}

export default ChartX