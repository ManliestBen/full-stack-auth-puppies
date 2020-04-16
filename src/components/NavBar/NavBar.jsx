import React from 'react';
import { NavLink } from 'react-router-dom';



const NavBar = (props) => {
  let nav = props.user ?
    <>
      <NavLink exact to='/users'>USERS</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink exact to='/cats'>CAT LIST</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink exact to='/'>PUPPY LIST</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink exact to='/add'>ADD PUPPY</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink exact to='/addcat'>ADD CAT</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink to=" " className='NavBar-link' onClick={props.handleLogout}>LOG OUT</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <NavLink to="" className='NavBar-link'>WELCOME, {props.user.name}</NavLink>
    </>
    :
    <>
      <NavLink to="/login" className='NavBar-link'>LOG IN</NavLink>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <NavLink to="/signup" className='NavBar-link'>SIGN UP</NavLink>
    </>
  return (
    <nav>
      {nav}
    </nav>
  );
};

export default NavBar;