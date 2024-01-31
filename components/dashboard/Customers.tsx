import React, { FC } from 'react'
import { MdArrowRightAlt as RightArrowIcon } from "react-icons/md";
import styles from './Customers.module.scss'
import { MdKeyboardArrowDown as ArrowDownIcon } from "react-icons/md";
import { customers } from '@/data/customers';
import CustomerLabel from './CustomerLabel';

export type Customer = {
  id: number;
  name: string;
  organization: string;
  imageSrc: string;
}

type Props = {}

const Customers: FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Customers</h3>
        <div className={styles.sortBy}>
          <p>Sort by <b>Newest</b></p>
          <ArrowDownIcon />
        </div>
      </div>
      
      {/* customers */}
      <div className={styles.customerList}>
        { customers.map(customer => <CustomerLabel key={customer.id} customerDetails={customer} />) }
      </div>

      {/* link */}
      <div className={styles.link}>
        <div className={styles.linkText}>All customers</div>
        <RightArrowIcon />
      </div>
    </div>
  )
}

export default Customers