import React, { FC } from 'react'
import styles from './MeterVisualizationCard.module.scss'

type Props = {
  text: string;
  percentage: number;
  linkText: string;
}

const MeterVisualizationCard: FC<Props> = ({ text, percentage, linkText }) => {
  return (
    <div className={styles.container}></div>
  )
}

export default MeterVisualizationCard