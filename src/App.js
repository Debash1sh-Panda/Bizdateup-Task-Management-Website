import { Route, Routes } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import CreateTaskPage from "./TaskLayout/CreateTaskPage";
import AllTaskPage from "./TaskLayout/AllTaskPage";
import TaskDashboard from "./TaskLayout/TaskDashboard";
import DashboardContent from "./TaskLayout/DashboardContent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/task-dashboard" element={<TaskDashboard />}>
            <Route index element={<DashboardContent />} />
            <Route path="demo" element={<DashboardContent />} />
            <Route path="create-task" element={<CreateTaskPage />} />
            <Route path="all-task" element={<AllTaskPage />} />
          </Route>
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
