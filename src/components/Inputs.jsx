import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'


function Inputs() {
  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w=3/4 items-center justify-center space-x-4">
            <input 
                type="text" 
                placeholder='Search...' //texbox ın içinde saydam yazı
                className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize"/>
            
            <UilSearch size={25} className="text-white cursor-pointer"/>
            <UilLocationPoint size={25} className="text-white cursor-pointer"/>
        </div>
    </div>
  
  ); 
}

export default Inputs;