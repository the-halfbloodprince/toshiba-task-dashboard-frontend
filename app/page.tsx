"use client"
import TextVisualizationCard from "@/components/dashboard/TextVisualizationCard";
import SideBar from "@/components/layout/SideBar";
import { MdOutlineArrowOutward as IncreaseIcon } from "react-icons/md";
import styles from '@/app/layout.module.scss';
import MeterVisualizationCard from "@/components/dashboard/MeterVisualizationCard";
import { createContext, useContext, useState } from "react";
import { HiMenuAlt3 as MenuIcon } from 'react-icons/hi'
import { MdClose as CloseIcon } from 'react-icons/md'
import Logo from "@/components/layout/Logo";
import { sideBarExpandedContext } from '@/contexts/sidebarExpandedContext';
import Customers from "@/components/dashboard/Customers";
import Chats from "@/components/dashboard/Chats";
import TopStates from "@/components/dashboard/TopStates";
import NewDeals from "@/components/dashboard/NewDeals";
import TopMonth from "@/components/dashboard/TopMonth";
import TopYear from "@/components/dashboard/TopYear";
import TopBuyer from "@/components/dashboard/TopBuyer";
import GrowthChart from "@/components/dashboard/GrowthChart";
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
          {/* Revenues Card */}
          <div className={styles.textVisualizationCard}>
            <TextVisualizationCard
              title = "Revenues"
              heading1 = "15%"
              icon = {<IncreaseIcon color="#25CD25" />}
              description = "Increase compared to last week"
              linkText = "Revenues report"
              />
          </div>
          
          {/* Lost Deals Card */}
          <div className={styles.textVisualizationCard}>
            <TextVisualizationCard
              title = "Lost Deals"
              heading1 = "4%"
              // icon = {<IncreaseIcon color="#25CD25" />}
              description = "You closed 96 out of 100 deals"
              linkText = "All deals"
            />
          </div>

          {/* Quarter Goal Card */}
          <div className={styles.meterVisualizationCard}>
            <MeterVisualizationCard
              text = "Quarter Goal"
              percentage = {84}
              linkText="All Goals"
            />
          </div>

          {/* customers card */}
          <div className={styles.customersCard}>
            <Customers />
          </div>
          {/* growth chart card */}
          <div className={styles.growthChartCard}>
            <GrowthChart />
          </div>
          {/* top month card */}
          <div className={styles.topMonthCard}>
            <TopMonth />
          </div>
          {/* top year card */}
          <div className={styles.topYearCard}>
            <TopYear />
          </div>
          {/* top buyer card */}
          <div className={styles.topBuyerCard}>
            <TopBuyer />
          </div>

          {/* chats card */}
          <div className={styles.chatsCard}>
            <Chats />
          </div>
          {/* top states card */}
          <div className={styles.topStatesCard}>
            <TopStates />
          </div>
          {/* new deals card */}
          <div className={styles.newDealsCard}>
            <NewDeals />
          </div>
        </main>
      </div>
    </sideBarExpandedContext.Provider>
  );
}
