import { createContext } from "react";

export const sideBarExpandedContext = createContext({sidebarExpanded: true, toggleSidebarExpanded: () => {}})