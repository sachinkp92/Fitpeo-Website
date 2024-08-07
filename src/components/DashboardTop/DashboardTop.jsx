import React from "react";
import "./style.css";

const DashboardTop = () => {
  return (
    <div class="dashboard-container">
      <div class="dashboard-card">
        <i class="bx bx-basket basktet-icon"></i>
        <p>Total Orders</p>
        <div class="orders">
          <h5>75</h5>
          <span>
            <i class="bx bxs-up-arrow"></i> 3
          </span>
        </div>
      </div>
      <div class="dashboard-card">
        <i class="bx bx-task basktet-icon basket-green"></i>
        <p>Total Orders</p>
        <div class="orders">
          <h5>70</h5>
          <span>
            <i class="bx bxs-up-arrow"></i> 3
          </span>
        </div>
      </div>
      <div class="dashboard-card">
        <i class="bx bx-task-x basktet-icon basket-red"></i>
        <p>Total Orders</p>
        <div class="orders">
          <h5>05</h5>
          <span>
            <i class="bx bxs-up-arrow"></i> 3
          </span>
        </div>
      </div>
      <div class="dashboard-card">
        <i class="bx bx-dollar basktet-icon basket-pink"></i>
        <p>Total Orders</p>
        <div class="orders">
          <h5>$12K</h5>
          <span>
            <i class="bx bxs-up-arrow"></i> 3
          </span>
        </div>
      </div>
      <div class="netprofit-card">
        <div>
          <p>Net Profit</p>
          <h2>$ 6759.25</h2>
          <span>
            <i class="bx bxs-up-arrow"></i> 3
          </span>
        </div>
        <div class="pie"></div>
      </div>
    </div>
  );
};

export default DashboardTop;
