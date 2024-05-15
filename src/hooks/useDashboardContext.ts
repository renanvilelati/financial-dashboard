import { useContext } from "react";
import { DashboardContext } from "../contexts/DashboardContext";

export const useDashboardContext = () => useContext(DashboardContext);
