"use client"
import React, { FC, useEffect, useState } from 'react'
import { MdArrowRightAlt as RightArrowIcon } from "react-icons/md";
import { MdKeyboardArrowDown as ArrowDownIcon } from "react-icons/md";
import styles from './GrowthChart.module.scss'
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type Props = {}

const GrowthChart: FC<Props> = ({}) => {

  const [dataSeries, setDataSeries] = useState<number[][]>([])

  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}${process.env.NEXT_PUBLIC_DATA_ENDPOINT}`)
      const data = await res.json()
      const newSeries = []
      for(let row of data) {
        console.log(row)
        newSeries.push([Date.parse(row['Timestamp']), Number.parseFloat(row['Profit Percentage'])])
      }
      setDataSeries(newSeries)
    }

    fetchData()
  }, [])

  const options: ApexOptions = {
      yaxis: {
        labels: {
          formatter: (value) => `${Math.round(value)}`
        }
      },
      colors: ['#25CD25'],
      stroke: {
        curve: 'straight',
        width: 2,
        colors: ['#25CD25']
      },
      chart: {
        id: 'area-datetime',
        type: 'area',
        // height: 250,
        height: 200,
        // width: 400,
        zoom: {
          autoScaleYaxis: true
        }
      },
      annotations: {
        yaxis: [{
          y: 30,
          borderColor: '#999',
          label: {
            text: 'Support',
            style: {
              color: "#fff",
              background: '#00E396'
            }
          }
        }],
        xaxis: [{
          x: new Date('14 Nov 2012').getTime(),
          borderColor: '#999',
          // yAxisIndex: 0,
          label: {
            text: '',
            style: {
              color: "#fff",
              background: '#775DD0'
            }
          }
        }]
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime',
        // min: new Date('01 Mar 2012').getTime(),
        // tickAmount: 6,
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy'
        }
      },
    }

  // const selection = 'one_year'

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Growth</h2>
        <p>Yearly <ArrowDownIcon /></p>
      </div>
      <div className={styles.chartArea}>
        {/* I'm having to do this check because thegraphing library I'm using, ApexCharts references the `window` in their code */}
        {/* they have not optimized it properly for react and next js and hance I'm having to do this and the lazy loading above */}
        {/* I've tried this library for just the second time ig, only because the charts in the Figma design matched a lot with the ones in ApexCharts */}
        {/* I'll be moving this code to some other well optimized graphing library, but I just went for the fastest option available since it's a timed assignment */}
        {(typeof window !== 'undefined') && <Chart options={options} series={[{ data: dataSeries }]} />}
      </div>
    </div>
  )
}

export default GrowthChart