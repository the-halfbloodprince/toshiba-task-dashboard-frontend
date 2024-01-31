import React, { FC } from 'react'
import styles from './SideBar.module.scss'

type Props = {
  toggleSidebar: () => void
}

const SideBar: FC<Props> = ({ toggleSidebar }) => {
  return (
    <div className={styles.container}>
      <button onClick={toggleSidebar}>Toggle</button>
    </div>
  )
}

export default SideBar