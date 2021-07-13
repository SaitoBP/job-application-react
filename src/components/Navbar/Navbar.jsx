import React from 'react'

import { Link } from 'react-router-dom'

import useStyles from './useStyles'

const Navbar = () => {
  const { root } = useStyles()

  return (
    <nav className={root}>
      <Link to='/'>Home</Link>

      <Link to='/list'>List</Link>

      <span>Notifications</span>

      <span>Profile</span>
    </nav>
  )
}

export default Navbar
