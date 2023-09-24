import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const links = <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/statistics'>Statistics</NavLink></li>
            <li><NavLink to='/applied-job'>Applied Jobs</NavLink></li>
            <li><NavLink to='/blog'>Blogs</NavLink></li>
    </>
  return (
    <div className='mx-auto w-[80%]'>
        <div className="navbar  bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu text-lg uppercase font-medium menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {links}
                </ul>
                </div>
                <a className='text-4xl font-bold' href="/">CareerHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg uppercase font-medium">
                {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-indigo-800 hover:bg-indigo-800 text-lg font-medium text-white">Start Applying</a>
            </div>
        </div>
    </div>
  )
}
