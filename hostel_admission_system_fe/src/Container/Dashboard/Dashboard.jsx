import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import SidebarItem from "../../Component/SidebarItem/SidebarItem";
import "./dashboard.scss";
function Dashboard() {
  const sidebarArray = [
    {
      to: "/",
      itemName: "Student Details",
      svgIcon: (
        <i class="fa-solid fa-memo-circle-info"></i>
      ),
    },
    {
      to: "/Report",
      itemName: "Report",
      svgIcon: (
        <i class="fa-sharp fa-solid fa-file-chart-column"></i>
      ),
    },
    {
      to: "/Allotment",
      itemName: "Allotment",
      svgIcon: (
        <i class="fa-sharp fa-solid fa-file-chart-column"></i>
      ),
    },
  ];
  return (
    <>
      <nav className="navbar-background">
        <ul>
          <li className="header">
            <SidebarItem itemName="Hostel Managment" Icon={<i class="fa-solid fa-hotel"></i>} />
          </li>
            {sidebarArray.map((obj) => {
              return (
                <li>
                <Link to={obj.to}>
                  <SidebarItem itemName={obj.itemName} Icon={obj.svgIcon} />
                </Link>
                </li>
              );
            })}
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Dashboard;
