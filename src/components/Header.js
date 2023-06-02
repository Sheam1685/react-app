// rafce 
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  const buttonText = props.showAddTask ? 'Close' : 'Add';
  const buttonColor = props.showAddTask ? 'red' : 'green';
  return (
    <header className='header'>
        <h1>{props.title}</h1>
        <Button text={buttonText} color={buttonColor} onClick={props.showForm} />
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