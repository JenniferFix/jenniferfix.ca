import React from 'react'

const Menu = () => {
  return (
    <nav className="absolute left-0 top-0 bottom-0">
      <ul className="flex flex-col justify-evenly h-full text-4xl ml-4 w-80 items-end">
        <li>Bio</li>
        <li>Resume</li>
        <li>Work</li>
      </ul>
    </nav>
  )
}

export default Menu
