import React from 'react'
import SideBar from '../Components/Sidebar/SideBar';
import Header from '../Components/Header/Header';
function Layout() {
  return (
    <div className="wrapper">
      <SideBar />
      <div className="content-wrapper">
        <Header />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Layout
