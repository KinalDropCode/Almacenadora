/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Navbar } from "../../components/navbars/Navbar";
import { NavbarBootstrap } from "../../components/navbars/NavbarBootstrap";
import { LoadSpinner } from "../../components/LoadSpinner";
import { Content } from "../../components/dashboard/Content";
import { Sidebar } from "../../components/navbars/Sidebar";
import { SidebarBootstrap } from "../../components/navbars/sidebars/SidebarBootstrap";
import { useTasks } from "../../shared/hooks/useTasks";
import  "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./dashboardPage.css";

export const DashboardPage = () => {
  const { getTasks, allTasks, navigate, isFetching} = useTasks()

  useEffect(() => {
    getTasks();
    
  }, []);
  console.log("allTasks de DashboardPage.jsx");
  console.log(allTasks);
  console.log("final dashboardPage.jsx");

  if (isFetching) {
    return <LoadSpinner />;
  }
  return (
    <div className="dashboard-container">
      {/* <Navbar /> */}
      <NavbarBootstrap />
      <SidebarBootstrap tasks={navigate || []}/>
      {/* <Sidebar tasks={navigate || []}/> */}
      <Content tasks={allTasks || []} getTasks={getTasks}/>
    </div>
  );
};
