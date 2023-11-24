'use client'
import React from 'react'
import Mainmenu from './mainmenu'
import BottomMenu from './bottommenu'
import Logotype from './logotype'

const Sidebar = () => {
  return (
    <div className='flex flex-col h-screen w-[220px]'>
      <div id='logotype'>
        <Logotype />
      </div>
      <div className='flex-grow'>
        <Mainmenu />
      </div>
      <div className='mb-auto'>
        <BottomMenu />
      </div>
    </div>
  )
}

export default Sidebar
