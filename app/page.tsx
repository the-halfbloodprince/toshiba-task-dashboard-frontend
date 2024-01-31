"use client"
import TextVisualizationCard from "@/components/dashboard/TextVisualizationCard";
import SideBar from "@/components/layout/SideBar";

import styles from '@/app/layout.module.scss';
import MeterVisualizationCard from "@/components/dashboard/MeterVisualizationCard";
import { useState } from "react";

export default function Home() {

  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className={styles.appLayout}>
      <aside data-open={sidebarOpen}>
        <SideBar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      </aside>
      <main>
        <div className={styles.textVisualizationCard}><TextVisualizationCard /></div>
        <div className={styles.textVisualizationCard}><TextVisualizationCard /></div>
        <div className={styles.meterVisualizationCard}><MeterVisualizationCard /></div>
      </main>
    </div>
  );
}
