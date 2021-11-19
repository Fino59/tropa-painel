import React, { Fragment } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import { ContainerLayout } from "./styles"

const Layout: React.FC = ({props}: any) => {
    
    return (
        <ContainerLayout>
            
            <Header />
            
            <Sidebar />

            {/* <div className="content">
                {props.children}
            </div> */}
  
        </ContainerLayout>
    )
}

export default Layout