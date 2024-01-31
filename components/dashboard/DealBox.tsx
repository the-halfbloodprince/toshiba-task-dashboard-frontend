import React, { FC } from 'react'
import styles from './DealBox.module.scss'
import Image from 'next/image';

type Props = {
  title: string;
}

const DealBox: FC<Props> = ({ title }) => {
  return (
    <div className={styles.container}>
      <Image
        src='/icons/add.svg'
        alt="add"
        width={30}
        height={30}
      />
      <div>{title}</div>
    </div>
  )
}

export default DealBox