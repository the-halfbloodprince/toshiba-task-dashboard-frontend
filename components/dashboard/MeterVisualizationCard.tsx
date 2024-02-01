import React, { FC } from 'react'
import { MdArrowRightAlt as RightArrowIcon } from "react-icons/md";
import Chart from 'react-apexcharts'
import styles from './MeterVisualizationCard.module.scss'
import { ApexOptions } from 'apexcharts';

type Props = {
  text: string;
  percentage: number;
  linkText: string;
}

const MeterVisualizationCard: FC<Props> = ({ text, percentage, linkText }) => {

  const chartSeries = [percentage]

  const chartOptions: ApexOptions = {
    chart: {
      type: 'radialBar',
      offsetY: 0,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      lineCap: 'round'
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#FFF7E8",
          strokeWidth: '100%',
          margin: 10, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2
          }
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -2,
            fontSize: '22px',
            fontWeight: 600,
            fontFamily: 'sans-serif'
          }
        }
      }
    },
    grid: {
      padding: {
        // top: -10
      }
    },
    fill: {
      colors: ['#FFCD71']
    },
    labels: [text],
  };

  return (
    <div className={styles.container}>
      <h2>Quarter Goal</h2>
      <div className={styles.chartArea}>
        <Chart options={chartOptions} series={chartSeries} type="radialBar" />
      </div>
      {/* link */}
      <div className={styles.link}>
        <div className={styles.linkText}>All goals</div>
        <RightArrowIcon />
      </div>
    </div>
  )
}

export default MeterVisualizationCard