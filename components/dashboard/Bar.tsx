import React, { FC } from 'react'
import styles from './Bar.module.scss'

type Props = {
  barDetails: { title: string; score: number; percent: number }
}

const Bar: FC<Props> = ({ barDetails }) => {
  return (
    <div className={styles.container} style={{ width: `${Math.round(barDetails.percent)}%` }}>
      <p>{barDetails.title}</p>
      <p>{`${barDetails.score}K`}</p>
    </div>
  )
}

export default Bar