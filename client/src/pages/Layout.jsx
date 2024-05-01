import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div >
        {/* <Link to="/">Home</Link>
        <Link to="/calendar"></Link>
        <Link to="/about"></Link>
        <Link to="/login"></Link> */}
        <Outlet />
    </div>
  )
}

export default Layout