'use client'
import React from 'react'
import MenuItem from './menuitem'
import classnames from 'classnames'
import { usePathname } from 'next/navigation'
import { HeartFilledIcon } from '@radix-ui/react-icons'

const menuItems = [
  {
    icon: 'home',
    title: 'Dashboard',
    path: '/',
  },
  {
    icon: 'About',
    title: 'About',
    path: '/about',
  },
]

const Mainmenu = () => {
  const currentPath = usePathname()
  return (
    <ul>
      {menuItems.map((item) => (
        <li key={item.title}>
          <MenuItem
            title={item.title}
            path={item.path}
            classnames={classnames({
              'bg-indigo-100 font-semibold': currentPath === item.path,
              'text-black': currentPath !== item.path,
              'hover:text-black hover:bg-indigo-100': true,
            })}
          />
        </li>
      ))}
    </ul>
  )
}
export default Mainmenu
