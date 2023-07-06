import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p>Copywrite &copy; 2023</p>
        {/* <a href='/about'>About</a> */}
        {/* To avoid reload a/href is avoided */}
        <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer
