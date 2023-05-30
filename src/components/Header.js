// rafce 
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  const onClick = (e) => {
    console.log('Click');
  }
  return (
    <header className='header'>
        <h1>{props.title}</h1>
        <Button text='Add' color='green' onClick={onClick} />
    </header>
  )
}

// default props if no props are passed in
Header.defaultProps = {
    title: 'React-App',
}
// control proptype
Header.propTypes = {
    title: PropTypes.string, // title must be a string. If not, it will render but throw an error
}

export default Header;
