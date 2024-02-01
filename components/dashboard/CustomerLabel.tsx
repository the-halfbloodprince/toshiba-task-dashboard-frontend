import React, { FC } from 'react'
import { Customer } from './Customers'
import styles from './CustomerLabel.module.scss'
import Image from 'next/image'

type Props = {
  customerDetails: Customer
}

const CustomerLabel: FC<Props> = ({ customerDetails }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image 
          src={customerDetails.imageSrc}
          alt={customerDetails.name}
          width={40} height={40}
        />
        <div className={styles.customerInfo}>
          <p>{customerDetails.name}</p>
          <p>{customerDetails.organization}</p>
        </div>
      </div>

      <div className={styles.tools}>
        <Image src="/icons/chat.svg" alt="chat" width={30} height={30} />
        <Image src="/icons/star.svg" alt="chat" width={30} height={30} />
        <Image src="/icons/pen.svg" alt="chat" width={30} height={30} />
        <Image src="/icons/line.svg" alt="chat" width={30} height={30} />
        <Image src="/icons/vertical-ellipsis.svg" alt="chat" width={30} height={30} />
      </div>
    </div>
  )
}

export default CustomerLabel