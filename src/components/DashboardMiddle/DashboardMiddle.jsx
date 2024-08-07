import React from "react";
import "./style.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    group_name: "Group A",
    boys: 4000,
  },
  {
    group_name: "Group B",
    boys: 10000,
  },
  {
    group_name: "Group C",
    boys: 4000,
  },
  {
    group_name: "Group D",
    boys: 4000,
  },
  {
    group_name: "Group D",
    boys: 6000,
  },
  {
    group_name: "Group D",
    boys: 6000,
  },
  {
    group_name: "Group D",
    boys: 6000,
  },
  {
    group_name: "Group D",
    boys: 6000,
  },
  {
    group_name: "Group D",
    boys: 8000,
  },
  {
    group_name: "Group D",
    boys: 5000,
  },
  {
    group_name: "Group D",
    boys: 10000,
  },
  {
    group_name: "Group D",
    boys: 8000,
  },
  {
    group_name: "Group D",
    boys: 6000,
  },
  {
    group_name: "Group D",
    boys: 4000,
  },
  {
    group_name: "Group D",
    boys: 5000,
  },
  {
    group_name: "Group D",
    boys: 8000,
  },
  {
    group_name: "Group D",
    boys: 6000,
  },
];

const DashboardMiddle = () => {
  return (
    <>
      <div className="activity-left-card">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis
              dataKey="group_name"
              tick={{
                stroke: "gray",
              }}
            />
            <YAxis
              tick={{
                stroke: "gray",
                strokeWidth: 0,
              }}
            />
            {/* <Legend /> */}
            <Bar dataKey="boys" name="Boys" fill="#5663db" barSize="2%" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="activity-right-card">
        <div className="activity-inner-card ">
          <div className="wrap">
            <div className="inner-cards color-brown">
              <i class="bx bx-target-lock"></i>
            </div>
            <span>Goals</span>
          </div>
          <i class="bx bx-chevron-right"></i>
        </div>
        <div className="activity-inner-card ">
          <div className="wrap">
            <div className="inner-cards color-blue">
              <i class="bx bx-target-lock"></i>
            </div>
            <span>Popular Dishes</span>
          </div>
          <i class="bx bx-chevron-right"></i>
        </div>
        <div className="activity-inner-card ">
          <div className="wrap">
            <div className="inner-cards color-green">
              <i class="bx bx-target-lock"></i>
            </div>
            <span>Menus</span>
          </div>
          <i class="bx bx-chevron-right"></i>
        </div>
      </div>
    </>
  );
};

export default DashboardMiddle;
