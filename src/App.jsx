import { useState } from 'react'
import './App.css'
import { AddUser } from './Components/AddUser'
import NavBar from './Components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage'
import AllUsers from './Components/AllUsers'
import { EditUser } from './Components/EditUser'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/allusers' element={<AllUsers />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/edituser/:id' element={<EditUser />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
