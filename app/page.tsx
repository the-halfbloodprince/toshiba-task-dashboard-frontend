import VisualizationCard from "@/components/dashboard/VisualizationCard";
import SideBar from "@/components/layout/SideBar";

import styles from '@/app/layout.module.scss';

export default function Home() {
  return (
    <div className={styles.appLayout}>
      <SideBar />
      <main>
        <VisualizationCard />
        <VisualizationCard />
        <VisualizationCard />
        <VisualizationCard />
        <VisualizationCard />
        <VisualizationCard />
        <VisualizationCard />
        <VisualizationCard />
      </main>
    </div>
  );
}
