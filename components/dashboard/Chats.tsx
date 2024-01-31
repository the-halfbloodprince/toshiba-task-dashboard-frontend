import React, { FC } from 'react'
import styles from './Chats.module.scss'
import { customers } from '@/data/customers'
import ChatIcon from './ChatIcon'

type Props = {}

const Chats: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <h2>Chats</h2>
      <p>2 unread messages</p>

      {/* using the customers list to just show them only here */}
      <div className={styles.chatIcons}>
        { customers.map(customer => 
            <ChatIcon 
              key={customer.id}
              customerDetails={customer} 
              unreadNotificationPresent={Math.random() > .5 ? false : true} 
            />) 
        }
      </div>
    </div>
  )
}

export default Chats