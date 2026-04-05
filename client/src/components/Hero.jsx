import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

const [pickupLocation, setPickupLocation] = useState('')

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
      
      <h1 className='text-4xl md:text-5xl font-semibold'>Welcome to Our Car Rental Service</h1>
    
      <form className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-4xl bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)] gap-4'>
      
        <div className='flex flex-col items-start gap-2'>
          <label>Pickup Location</label>
          <select required value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} className='px-3 py-2 border border-gray-300 rounded'>
            <option value="" disabled>Select Location</option>
            {cityList.map((city) => 
              <option key={city} value={city}>
                {city}
              </option>
            )}
          </select>
          <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : 'Please select Location' }</p>
        </div>
        
        <div className='flex flex-col items-start gap-2'>
          <label htmlFor="pickup-date">Pick-up Date</label>
          <input type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} className='px-3 py-2 border border-gray-300 rounded text-sm' required />
        </div>
         
        <div className='flex flex-col items-start gap-2'>
          <label htmlFor="return-date">Return Date</label>
          <input type="date" id="return-date" className='px-3 py-2 border border-gray-300 rounded text-sm' required />
        </div>

        <button type="submit" className='flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition'> 
          <img src={assets.search_icon} alt="search" className='h-5 w-5' />
          Search
        </button>
      </form>

      <img src={assets.main_car} alt="car" className='max-h-96' />
    
    </div>
  )
}

export default Hero
