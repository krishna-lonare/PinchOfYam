// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import './Navbar.css'

// function Navbar() {
//   return (
//     <header className="navbar1" >

//       {/* Brand Name */}
//       <div className="brand">
//         PinchOfYam
//       </div>



//       <div className='menu' >
//         <DropdownButton className='dropdown' id="dropdown-item-button " title="More">
         
//           <Dropdown.Item as="button" onClick={navfunction}><nav className="nav-links"><NavLink to="/" className="nav-link">Home</NavLink></nav></Dropdown.Item>
//           <Dropdown.Item as="button" onClick={navfunction}><nav className="nav-links"><NavLink to="/products" className="nav-link">Products</NavLink></nav></Dropdown.Item>
//           <Dropdown.Item as="button" onClick={navfunction}><nav className="nav-links"><NavLink to="/about" className="nav-link">About</NavLink></nav></Dropdown.Item>
//         </DropdownButton>
//       </div>

//     </header>
//   )
// }

// export default Navbar
import React from 'react'
import { NavLink } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Navbar.css'

function Navbar() {

  // JS Function
  const navfunction = () => {
    console.log("Menu Item Clicked");
  }

  return (
    <header className="navbar1">

      {/* Brand Name */}
      <div className="brand">
        PinchOfYam
      </div>

      <div className='menu'>

        <DropdownButton
          className='dropdown'
          id="dropdown-item-button"
          title="More"
        >

          <Dropdown.Item className='dropdownitem' as="button" onClick={navfunction}>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </Dropdown.Item>

          <Dropdown.Item className='dropdownitem' as="button" onClick={navfunction}>
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
          </Dropdown.Item>

          <Dropdown.Item className='dropdownitem' as="button" onClick={navfunction}>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </Dropdown.Item>

        </DropdownButton>

      </div>

    </header>
  )
}

export default Navbar