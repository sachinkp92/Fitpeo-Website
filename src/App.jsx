import "./App.css";
import DashboardBottom from "./components/DashboardBottom/DashboardBottom";
import DashboardMiddle from "./components/DashboardMiddle/DashboardMiddle";
import DashboardTop from "./components/DashboardTop/DashboardTop";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div class="dashboard">
          <h4 class="heading">Dashboard</h4>
          <DashboardTop />
          <div class="activity-container">
            <DashboardMiddle />
          </div>
          <div className="dashboard-bottom-container">
            <DashboardBottom />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
