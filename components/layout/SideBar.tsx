import React, { FC } from 'react'
import styles from './SideBar.module.scss'
import Image from 'next/image'
import Logo from './Logo';

type Props = {
  toggleSidebar: () => void;
  expanded: Boolean;
}

const SideBar: FC<Props> = ({ toggleSidebar, expanded }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div onClick={toggleSidebar}>
          <Logo variant={expanded ? 'large' : 'small'} />
        </div>
      </div>
    </div>
  )
}

export default SideBar