import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h4>Version 1.0.0</h4>
        {/* <a href='/'>Go Back</a> */}
        {/* To avoid reload a/href is avoided */}
        <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About
