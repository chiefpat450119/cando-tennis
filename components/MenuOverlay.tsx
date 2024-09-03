import React from 'react'
import NavLink from './NavLink'

interface OverlayProps {
  links: {
    key: string
    href: string
    label: string
  }[]
}

const MenuOverlay = ({ links }: OverlayProps) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index) => (
            <li key={index}>
                <NavLink key={link.key} href={link.href} label={link.label} />
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay