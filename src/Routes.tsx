import React, { Fragment } from "react"
import { Routes, Route } from 'react-router-dom'

import Home from "./App"

import Layout from "./components/Layout/Layout"

import BannerCreate from "./components/Pages/Banner/Create"
import BannerList from './components/Pages/Banner/List'

import ContactsCreate from './components/Pages/Contacts/Create'
import ContactsList from './components/Pages/Contacts/List'

import PortfolioCreate from './components/Pages/Portfolio/Create'
import PortfolioEdit from './components/Pages/Portfolio/Edit'
import PortfolioList from './components/Pages/Portfolio/List'


export default function Routing({props}: any) {

    console.log('routes', props)
    return (
        <Routes>        

            <Fragment>
            
                <Route path="/" element={<Layout />} />
                
                <Route path="/banner/criar" element={<BannerCreate />} />
                <Route path="/banner/listar" element={<BannerList />} />
                
                <Route path="/contatos/criar" element={<ContactsCreate />} />
                <Route path="/contatos/listar" element={<ContactsList />} />

                <Route path="/portfolio/criar" element={<PortfolioCreate />} />
                <Route path="/portfolio/editar" element={<PortfolioEdit />} />
                <Route path="/portfolio/listar" element={<PortfolioList />} />
            
            </Fragment>
            


        </Routes>
        
        
        
    )
}