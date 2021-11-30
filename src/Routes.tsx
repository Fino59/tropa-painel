import React, { Fragment } from "react"

import { Routes, Route } from 'react-router-dom'

import Login from "./Pages/Login/Login"

import Home from "./Pages/Home/Home"

import Layout from "./components/Layout/Layout"

import User from "./Pages/User/User"

import Banner from "./Pages/Banner/Create"

import Contacts from './Pages/Contacts/Create'

import Portfolio from './Pages/Portfolio/Create'


export default function Routing({props}: any) {

    console.log('routes', props)
    return (
        <Routes>        
                    
                <Route path="/login" element={<Login />} />

                <Route path="/" element={<Layout />} >
                
                    <Route index element={<Home />} />

                    <Route path="/user" element={<User />} />

                    <Route path="/banner" element={<Banner />} />
                    
                    <Route path="/contatos" element={<Contacts />} />
                    
                    <Route path="/portfolio" element={<Portfolio />} />
                
                </Route>
        </Routes>
        
    )
}