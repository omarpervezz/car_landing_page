import React from 'react'

export default function TextInput({icon,placeholder}) {
  return (
    <div className='TextInput relative w-[280px] bg-white mb-5 rounded'>
        <input type='text' className='py-4 px-5 border border-white font-light outline-0 text-black' placeholder={placeholder} />
        <span className='icon absolute top-5 right-5 block'>{icon}</span>
    </div>
  )
}
