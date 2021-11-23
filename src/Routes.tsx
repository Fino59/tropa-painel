import React, { Fragment } from "react"

import { Routes, Route } from 'react-router-dom'

import Home from "./components/Pages/Home/Home"

import Layout from "./components/Layout/Layout"

import Banner from "./components/Pages/Banner/Create"

import Contacts from './components/Pages/Contacts/Create'

import Portfolio from './components/Pages/Portfolio/Create'


export default function Routing({props}: any) {

    console.log('routes', props)
    return (
        <Routes>        

                <Route path="/" element={<Layout />} >
                
                    <Route index element={<Home />} />

                    <Route path="/banner" element={<Banner />} />
                    
                    <Route path="/contatos" element={<Contacts />} />
                    
                    <Route path="/portfolio" element={<Portfolio />} />
                
                </Route>
        </Routes>
        
    )
}