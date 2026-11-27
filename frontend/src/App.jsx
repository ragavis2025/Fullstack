import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/login';
import Project from './pages/project';
import Tasks from './pages/tasks';
import Team from "./pages/team";
import Clients from "./pages/clients";
import Dashboard from "./pages/dashboard";
import Calender from "./pages/calender";
import Settings from "./pages/settings";
import Register from "./pages/register";
import AdminDashboard from "./pages/Admin/dashboard";
import Admin from "./pages/Admin/adminlayout";
import Userdetails from "./pages/Admin/userdetails";
import AdminSettings from "./pages/Admin/settings";
function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/clients" element={<Clients/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/calender" element={<Calender/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/admin" element={<Admin/>}>
        <Route path="dashboard" element={<AdminDashboard/>}/>
        <Route path="userdetails" element={<Userdetails/>}/>
        <Route path="settings" element={<AdminSettings/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;