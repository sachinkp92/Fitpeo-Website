import React from "react";
import "./style.css";

const Sidebar = () => {
  return (
    <div class="sidebar">
      <div class="side-menu">
        <i class="bx bx-home-alt-2 home"></i>
      </div>
      <div class="side-menu">
        <i class="bx bx-bar-chart-square"></i>
      </div>
      <div class="side-menu">
        <i class="bx bx-task"></i>
      </div>
      <div class="side-menu">
        <i class="bx bx-wallet-alt"></i>
      </div>
      <div class="side-menu">
        <i class="bx bx-calendar-alt"></i>
      </div>
    </div>
  );
};

export default Sidebar;
