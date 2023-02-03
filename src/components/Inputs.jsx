import React from 'react'
import { UilAirplay } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'


function Inputs() {
  return (
    <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row w=2/4 items-center justify-center space-x-4">
            <input 
                type="text" 
                placeholder='Search...'
                className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize"/>
        </div>
    </div>
  
  ); 
}

export default Inputs;