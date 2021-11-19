import React, { Fragment } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { ContainerLayout } from "./styles"

const Layout: React.FC = ({props}: any) => {
    
    return (
        <ContainerLayout>
            
            <Header />
            
            <Sidebar />

            <Outlet />
  
        </ContainerLayout>
    )
}

export default Layout