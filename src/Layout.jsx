// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    </>
  )
}

export default Layout