/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { LoadSpinner } from "../../components/LoadSpinner";
import { Content } from "../../components/dashboard/Content";
import { Sidebar } from "../../components/navbars/Sidebar";
import { useTasks } from "../../shared/hooks/useTasks";
import  "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./dashboardPage.css";


export const DashboardPage = () => {
  const { getTasks, navigate, isFetching} = useTasks()

  useEffect(() => {
    getTasks();
  }, []);

  if (isFetching) {
    return <LoadSpinner />;
  }
  return (
    <div className="dashboard-container">
      <Navbar />
      <Sidebar channels={navigate || []}/>
      <Content channels={getTasks || []} getTasks={getTasks}/>
    </div>
  );
};
