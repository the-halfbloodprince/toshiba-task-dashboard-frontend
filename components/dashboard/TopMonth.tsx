import React, { FC } from 'react'
import styles from './TopMonth.module.scss'

type Props = {}

const TopMonth: FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <h2>Top Month</h2>
      <div className={styles.content}>
        <h1>November</h1>
        <p>2019</p>
      </div>
    </div>
  )
}

export default TopMonth