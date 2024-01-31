import React, { FC } from 'react'
import styles from './TopBuyer.module.scss'
import Image from 'next/image'
import { customers } from '@/data/customers'

type Props = {}

const TopBuyer: FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <h2>Top Buyer</h2>
      <Image
        src={customers[1].imageSrc}
        alt={customers[1].name}
        width={20} height={20}
      />
      <div className={styles.content}>
        <h1>{customers[1].name}</h1>
        <p>{customers[1].organization}</p>
      </div>
    </div>
  )
}

export default TopBuyer