'use client'
import React, { useState } from 'react'

export default function SelectInput({icon,placeholder,items}) {
    const [dropdownOpen, setdropdownOpen] = useState(false)
    const [selectedValue, setselectedValue] = useState()
  return (
    <div className='w-[280px] relative cursor-pointer'>
        <div className='selectInput relative mb-5 w-full bg-white rounded text-[#c2c2c2]' onClick={()=>setdropdownOpen(!dropdownOpen)}>
            <p className='py-4 px-5 rounded-sm border border-white font-light outline-0 w-full'>{selectedValue === undefined? placeholder : selectedValue}</p>
            <span className='icon absolute top-5 right-5 block'>{icon}</span>
        </div>
        {dropdownOpen? 
        <ul className='absolute bg-white top-[98%] z-10 right-0 left-0 text-[#000000]' style={{boxShadow:'0px -4px 5px 0px #00000012'}}>
            <li className='w-full py-3 px-5 font-light text-sm cursor-pointer hover:bg-[#f7e12c]' onClick={(e)=>{setdropdownOpen(!dropdownOpen), setselectedValue()}}>{placeholder}</li>
            {items?.map((item,i)=>(
                <li key={i} className='w-full py-3 px-5 font-light text-sm cursor-pointer hover:bg-[#f7e12c]' onClick={(e)=>{setdropdownOpen(!dropdownOpen), setselectedValue(item)}}>{item}</li>
            ))}
        </ul> : ""}
    </div>
  )
}
