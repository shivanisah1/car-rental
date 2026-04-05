import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import OwnerDashboard from './pages/OwnerDashboard'
import Car from './pages/Car'
import MyBooking from './pages/MyBooking'

const App = () => {

	const [_showLogin, setShowLogin] = useState(false)
    const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
	<>
	{!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}
    <Routes>
		<Route path='/' element={<Home />} />
		<Route path='/cars-details/:id' element={<CarDetails />} />
		<Route path='/cars' element={<Car />} />
		<Route path='/my-bookings' element={<MyBooking />} />
		<Route path='/owner' element={<OwnerDashboard />} />
	</Routes>


	</>
  )
}

export default App