// rafce 
import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
// import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; // useLocation is a hook. Another way other than Router

const Header = (props) => {
  const buttonText = props.showAddTask ? 'Close' : 'Add';
  const buttonColor = props.showAddTask ? 'red' : 'green';
  const location = useLocation();
  return (
    // Here router is not needed as this is already wrapped in router in App.js
    // <header className='header'>
    //     <h1>{props.title}</h1>
    //     <Routes>
    //     <Route path="/" exact element={<Button text={buttonText} color={buttonColor} onClick={props.showForm} />} />
    //     {/* <Button text={buttonText} color={buttonColor} onClick={props.showForm} /> */}
    //     </Routes>
    // </header>
    <header className='header'>
    <h1>{props.title}</h1>
    {location.pathname === '/' && (<Button text={buttonText} color={buttonColor} onClick={props.showForm} />)}
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