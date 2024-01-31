import React from 'react'
import styles from './NewDeals.module.scss'
import DealBox from './DealBox'

type Props = {}

const newDealsTitles: string[] = ["Fruit2Go", "Marshall's MKT", "CCNT", "Joana Mini-Market", "Little Brazil Vegan", "Target", "Organic Place", "Morello's"]

const NewDeals = ({  }) => {
  return (
    <div className={styles.container}>
      <h2>New Deals</h2>
      <div className={styles.deals}>
        { newDealsTitles.map((deal, idx) => <DealBox key={idx} title={deal} />) }
      </div>
    </div>
  )
}

export default NewDeals