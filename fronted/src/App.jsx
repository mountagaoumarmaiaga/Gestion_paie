import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './app/Components/Authentication/Login'
import SideBar from "./app/Components/Sidebar/SideBar";
import Dashboard from "./app/Pages/Dashboard ";
import Analytics from "./app/Pages/Analytics";
import FileManager from "./app/Pages/FileManager";
import Layout from "./app/Pages/Layout";
import Messages from "./app/Pages/Messages";
import Order from "./app/Pages/Order";
import Saved from "./app/Pages/Saved";
import Setting from "./app/Pages/Setting";
import Users from "./app/Pages/Users";
import Header from "./app/Components/Header/Header";
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
      </Routes>

      <Header/>
      <SideBar>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/file-manager" element={<FileManager />} />
            <Route path="/order" element={<Order />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/settings" element={<Setting />} />
            
          </Route>
        </Routes>
      </SideBar>
    </BrowserRouter>
  )
}

export default App
