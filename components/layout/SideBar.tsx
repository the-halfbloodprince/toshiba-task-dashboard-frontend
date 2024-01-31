import React, { FC } from 'react'
import styles from './SideBar.module.scss'
import Image from 'next/image'

type Props = {
  toggleSidebar: () => void;
  expanded: Boolean;
}

const SideBar: FC<Props> = ({ toggleSidebar }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src='/Logo_Expanded.svg' alt='Logo' width={180} height={40} />
      </div>
    </div>
  )
}

export default SideBar