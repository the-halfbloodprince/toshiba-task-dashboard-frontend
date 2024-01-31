import React, { FC } from 'react'
import { MdArrowRightAlt as RightArrowIcon } from "react-icons/md";
import styles from './MeterVisualizationCard.module.scss'

type Props = {
  text: string;
  percentage: number;
  linkText: string;
}

const MeterVisualizationCard: FC<Props> = ({ text, percentage, linkText }) => {
  return (
    <div className={styles.container}>
      <h2>Quarter Goal</h2>
      <div className={styles.chartArea}></div>
      {/* link */}
      <div className={styles.link}>
        <div className={styles.linkText}>All goals</div>
        <RightArrowIcon />
      </div>
    </div>
  )
}

export default MeterVisualizationCard