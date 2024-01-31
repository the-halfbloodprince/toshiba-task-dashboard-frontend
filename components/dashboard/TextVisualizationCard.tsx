import React, { FC, ReactNode } from 'react'
import { MdArrowRightAlt as RightArrowIcon } from "react-icons/md";
import styles from './TextVisualizationCard.module.scss'

type Props = {
  title: string;
  heading1: string;
  icon?: ReactNode;
  description: string;
  linkText: string;
}

const VisualizationCard: FC<Props> = ({ title, description, heading1, linkText, icon }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.group_1}>
        <div className={styles.group_2}>
          <h2 className={styles.heading}>{heading1}</h2>
          <div className={styles.icon}>{icon}</div>
        </div>
        <p>{description}</p>
      </div>
      <div className={styles.link}>
        <div className={styles.linkText}>{linkText}</div>
        <RightArrowIcon />
      </div>
    </div>
  )
}

export default VisualizationCard