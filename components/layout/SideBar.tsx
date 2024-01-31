import React, { FC } from 'react'
import styles from './SideBar.module.scss'
import Image from 'next/image'
import { IoIosArrowDroprightCircle as ExpandIcon } from "react-icons/io";
import Logo from './Logo';

type Props = {
  toggleSidebar: () => void;
  expanded: Boolean;
}

const SideBar: FC<Props> = ({ toggleSidebar, expanded }) => {
  return (
    <div className={styles.container}>
      <ExpandIcon onClick={toggleSidebar} className={styles.expandIcon} data-flipped={expanded} />
      <div className={styles.header}>
        <Logo variant={expanded ? 'large' : 'small'} />
      </div>
    </div>
  )
}

export default SideBar