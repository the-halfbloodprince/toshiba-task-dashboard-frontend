import React, { FC } from 'react'
import { MdArrowRightAlt as RightArrowIcon } from "react-icons/md";
import { MdKeyboardArrowDown as ArrowDownIcon } from "react-icons/md";
import styles from './GrowthChart.module.scss'

type Props = {}

const GrowthChart: FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Growth</h2>
        <p>Yearly <ArrowDownIcon /></p>
      </div>
      <div className={styles.chartArea}></div>
    </div>
  )
}

export default GrowthChart