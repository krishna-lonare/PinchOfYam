import React from 'react'
import { NavLink } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar1" >

      {/* Brand Name */}
      <div className="brand">
        PinchOfYam
      </div>



      <div className='menu' >
        <DropdownButton className='dropdown' id="dropdown-item-button " title="More">
          
          <Dropdown.Item as="button"><nav className="nav-links"><NavLink to="/" className="nav-link">Home</NavLink></nav></Dropdown.Item>
          <Dropdown.Item as="button"><nav className="nav-links"><NavLink to="/products" className="nav-link">Products</NavLink></nav></Dropdown.Item>
          <Dropdown.Item as="button"><nav className="nav-links"><NavLink to="/about" className="nav-link">About</NavLink></nav></Dropdown.Item>
        </DropdownButton>
      </div>

    </header>
  )
}

export default Navbar