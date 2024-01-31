import React, { FC } from 'react'
import styles from './GrowthChart.module.scss'

type Props = {}

const GrowthChart: FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <h2>Growth</h2>
      <div className={styles.chartArea}></div>
      <div className={styles.link}>Link</div>
    </div>
  )
}

export default GrowthChart