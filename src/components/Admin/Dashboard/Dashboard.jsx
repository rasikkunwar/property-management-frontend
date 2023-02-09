import BarChart from "../../Charts/BarChart";
import DonutChart from "../../Charts/DonutChart";
import LineChart from "../../Charts/LineChart";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdminDashboardData } from "../../../store/dashboard/dashboard";
import "./Dashboard.css";
import { useEffect } from "react";
const Dashboard = () => {
  return (
    <div id="chart">
      <div className="donut">
        <h5>Property Type Wise Property Count</h5>
        <DonutChart fetchMethod={fetchAdminDashboardData}></DonutChart>
      </div>
      <div className="bar">
        <h5>State Wise Property Count</h5>
        <BarChart fetchMethod={fetchAdminDashboardData}></BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
