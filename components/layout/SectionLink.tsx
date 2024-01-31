import Image from 'next/image';
import React, { FC, useContext } from 'react'
import styles from './SectionLink.module.scss'
import { sideBarExpandedContext } from '@/contexts/sidebarExpandedContext';
import { MdKeyboardArrowDown as ArrowDownIcon } from "react-icons/md";

export type LinkDetails = {
  name: string;
  iconSrc: string;
  expandable: Boolean;
  danger?: Boolean;
}

type Props = {
  linkDetails: LinkDetails
}

const SectionLink: FC<Props> = ({ linkDetails }) => {

  const { sidebarExpanded } = useContext(sideBarExpandedContext)

  return (
    <div 
      className={styles.sectionLink} 
      data-danger={linkDetails.danger ? true : false} 
      data-expanded={sidebarExpanded}
    >
      <div className={styles.title}>
        <Image 
          src={linkDetails.iconSrc}
          alt={linkDetails.name}
          width={30} 
          height={30} 
        />

        { sidebarExpanded && <p>{linkDetails.name}</p>}
      </div>
      <div className={styles.expandableIcon}>{linkDetails.expandable && <ArrowDownIcon />}</div>
    </div>
  )
}

export default SectionLink