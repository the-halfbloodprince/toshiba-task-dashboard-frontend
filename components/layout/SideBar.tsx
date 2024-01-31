import React, { FC, useContext } from 'react'
import styles from './SideBar.module.scss'
import Image from 'next/image'
import { IoIosArrowDroprightCircle as ExpandIcon } from "react-icons/io";
import Logo from './Logo';
import SectionLink, { LinkDetails } from './SectionLink';
import { sideBarExpandedContext } from '@/contexts/sidebarExpandedContext';

type Props = {}

const primarySectionLinks: LinkDetails[] = [
  {
    'iconSrc': '/icons/dashboard.svg',
    'name': 'Dashboard',
    'expandable': false
  },
  {
    'iconSrc': '/icons/customers.svg',
    'name': 'Customers',
    'expandable': true
  },
  {
    'iconSrc': '/icons/all-reports.svg',
    'name': 'All Reports',
    'expandable': false
  },
  {
    'iconSrc': '/icons/geography.svg',
    'name': 'Geography',
    'expandable': false
  },
  {
    'iconSrc': '/icons/conversations.svg',
    'name': 'Conversations',
    'expandable': false
  },
  {
    'iconSrc': '/icons/deals.svg',
    'name': 'Deals',
    'expandable': false
  },
  {
    'iconSrc': '/icons/export.svg',
    'name': 'Export',
    'expandable': false
  },
]

const secondarySectionLinks: LinkDetails[] = [
  {
    iconSrc: '/icons/settings.svg',
    name: 'Settings',
    expandable: false,
  },
  {
    iconSrc: '/icons/logout.svg',
    name: 'Log out',
    expandable: false,
    danger: true
  },
]

const SideBar: FC<Props> = () => {

  const { sidebarExpanded, toggleSidebarExpanded } = useContext(sideBarExpandedContext)

  return (
    <div className={styles.container}>
      <ExpandIcon onClick={toggleSidebarExpanded} className={styles.expandIcon} data-flipped={sidebarExpanded} />
      
      <div className={styles.primary_section}>
        <Logo variant={sidebarExpanded ? 'large' : 'small'} />
        <div className={styles.searchbar}>
          Search
        </div>
        <div className={styles.links}>
          { primarySectionLinks.map((link, idx) => <SectionLink key={idx} linkDetails={link} />) }
        </div>
      </div>

      <div className={styles.secondary_section}>
        <div>
          <Image src="/images/profile-pic.png" alt="Profile pic" width={40} height={40} />
          <div>
            <div className={styles.name}>Gustavo Xavier</div>
            <div className={styles.badge}>Admin</div>
          </div>
        </div>
        { secondarySectionLinks.map((link, idx) => <SectionLink key={idx} linkDetails={link} />) }
      </div>
    </div>
  )
}

export default SideBar