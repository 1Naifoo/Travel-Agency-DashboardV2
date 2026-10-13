import react from "react";
import { Outlet } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { NavItems } from "../../../components";
import  MobileSidebar  from "../../../components/MobileSidebar";

const adminLayout = () => {
  return (
    <div className="admin-layout">

        <MobileSidebar/>

       
        <aside className="hidden w-full max-w-[270px] lg:block">
         <SidebarComponent width={270} enableGestures={false}>
        <NavItems/>

         </SidebarComponent>
        </aside>

        <aside className="children">
          <Outlet/>
        </aside>
      </div>
    )
  }

export default adminLayout