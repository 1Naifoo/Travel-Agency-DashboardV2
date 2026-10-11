import react from "react";
import { Outlet } from "react-router";

const adminLayout = () => {
  return (
    <div className="admin-layout">

        MobileSidebar
        <aside className="hidden w-full max-w-[270px] lg:block">
         Sidebar
        </aside>

        <aside className="children">
          <Outlet/>
        </aside>
      </div>
    )
  }

export default adminLayout