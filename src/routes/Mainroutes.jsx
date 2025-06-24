import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Create from '../pages/Create'
import Singlerecipe from '../pages/Singlerecipe'
import Pagenotfound from '../pages/Pagenotfound'
import Fav from '../pages/fav'

const Mainroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/recipes' element={<Recipes/>} />
            <Route path='/recipes/details/:id' element={<Singlerecipe/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/fav' element={<Fav/>} />

            <Route path='*' element={<Pagenotfound/>} />
        </Routes>
    )
}

export default Mainroutes

// page not found -> wild card route 