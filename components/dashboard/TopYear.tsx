import React, { FC } from 'react'
import styles from './TopYear.module.scss'

type Props = {}

const TopYear: FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <h2>Top Year</h2>
      <div className={styles.content}>
        <h1>2023</h1>
        <p>96K sold so far</p>
      </div>
    </div>
  )
}

export default TopYear