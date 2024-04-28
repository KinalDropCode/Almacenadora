/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { Content } from "../../components/dashboard/Content";
import { Sidebar } from "../../components/navbars/Sidebar";
import { useTasks } from "../../shared/hooks/useTasks";

import "./dashboardPage.css";


export const DashboardPage = () => {
  const { getTasks, navigate, isFetching} = useChannels()

  useEffect(() => {
    getTasks();
  }, []);

  if (isFetching) {
    return <LoadingSpinner />;
  }
  return (
    <div className="dashboard-container">
      <Navbar />
      <Sidebar channels={navigate || []}/>
      <Content channels={getTasks || []} getTasks={getTasks}/>
    </div>
  );
};
