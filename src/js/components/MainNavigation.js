import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import ProfileImage from './ProfileImage';
import { slide as Menu } from 'react-burger-menu';


export default class MainNavigation extends React.Component {

  render(){
    return (
      <div className="main-nav">
        <Link to='/' className="nav-left desktop-nav main-nav-link">
          <ProfileImage width="50"/>
          <span className="name">Gianna Uson</span>
        </Link>
        <nav className="nav-right desktop-nav">
          <Link to='/' className="main-nav-link">home</Link>
          <NavLink to='/about' className="main-nav-link">about</NavLink>
          <NavLink to='/portfolio' className="main-nav-link">portfolio</NavLink>
          <NavLink to='/contact' className="main-nav-link">contact</NavLink>
        </nav>
        <div id="hamburger-container">
          <Menu right width="250px">
            <Link to='/' className="main-nav-link">home</Link>
            <NavLink to='/about' className="main-nav-link">about</NavLink>
            <NavLink to='/portfolio' className="main-nav-link">portfolio</NavLink>
            <NavLink to='/contact' className="main-nav-link">contact</NavLink>
          </Menu>
        </div>
      </div>
    );
  }
}
