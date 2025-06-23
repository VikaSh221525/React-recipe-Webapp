import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-center gap-x-14 mb-10'>
            <NavLink className={(e) => e.isActive ? "text-red-400" : undefined} to="/">Home</NavLink>
            <NavLink className={(e) => e.isActive ? "text-red-400" : undefined} to="/recipes">Recipes</NavLink>
            <NavLink className={(e) => e.isActive ? "text-red-400" : undefined} to="/about">About</NavLink>
            <NavLink className={`bg-red-400 py-2 px-4 rounded-[10px] hover:scale-105 hover:bg-red-500 ${(e) => e.isActive ? "text-red-400" : undefined}`} to="/create">Create Recipes</NavLink>
        </div>
    )
}

export default Navbar