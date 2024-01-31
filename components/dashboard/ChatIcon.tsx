import React, { FC } from 'react'
import { Customer } from './Customers'
import styles from './ChatIcon.module.scss'
import Image from 'next/image'

type Props = {
  customerDetails: Customer;
  unreadNotificationPresent: boolean;
}

const ChatIcon: FC<Props> = ({ customerDetails, unreadNotificationPresent }) => {
  return (
    <div 
      className={styles.container} 
      data-unread-notifications-present={unreadNotificationPresent}
    >
      <div className={styles.unreadMessageIndicator}></div>
      <Image 
        src={customerDetails.imageSrc} 
        alt={customerDetails.name} 
        width={50} height={50}
      />
    </div>
  )
}

export default ChatIcon