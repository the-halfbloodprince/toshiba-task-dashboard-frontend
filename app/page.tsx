"use client"
import TextVisualizationCard from "@/components/dashboard/TextVisualizationCard";
import SideBar from "@/components/layout/SideBar";

import styles from '@/app/layout.module.scss';
import MeterVisualizationCard from "@/components/dashboard/MeterVisualizationCard";
import { createContext, useContext, useState } from "react";
import { HiMenuAlt3 as MenuIcon } from 'react-icons/hi'
import { MdClose as CloseIcon } from 'react-icons/md'
import Logo from "@/components/layout/Logo";
import { sideBarExpandedContext } from '@/contexts/sidebarExpandedContext';
// import SidebarContextProvider, { sideBarExpandedContext } from "@/contexts/sidebarExpandedContext";

export default function Home() {

  // const { sidebarExpanded, toggleSidebarExpanded } = useContext(sideBarExpandedContext)
  const [sidebarExpanded, setSidebarExpanded] = useState(true)
  const toggleSidebarExpanded = () => setSidebarExpanded(!sidebarExpanded)

  return (
    <sideBarExpandedContext.Provider value={{ sidebarExpanded, toggleSidebarExpanded }}>
      <nav className={styles.nav}>
        <Logo variant="large" />
        {
          sidebarExpanded 
            ? <CloseIcon className={styles.menuIcon} onClick={toggleSidebarExpanded} />
            : <MenuIcon className={styles.menuIcon} onClick={toggleSidebarExpanded} />
        }
      </nav>
      <div className={styles.appLayout}>
        <aside data-expanded={sidebarExpanded}>
          <SideBar />
        </aside>
        <main>
          <div className={styles.textVisualizationCard}><TextVisualizationCard /></div>
          <div className={styles.textVisualizationCard}><TextVisualizationCard /></div>
          <div className={styles.meterVisualizationCard}><MeterVisualizationCard /></div>

          {/* customers card */}
          {/* growth chart card */}
          {/* top month card */}
          {/* top year card */}
          {/* top buyer card */}

          {/* chats card */}
          {/* top states card */}
          {/* new deals card */}
        </main>
      </div>
    </sideBarExpandedContext.Provider>
  );
}
