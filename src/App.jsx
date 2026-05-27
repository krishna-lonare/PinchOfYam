import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nav from 'react-bootstrap/Nav';
import Products from './Usercomponents/Products';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import InstagramReels from './Usercomponents/InstagramFeed';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     {/* <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
          <NavLink to="/" className="nav-link">Home</NavLink>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <NavLink  to="/products" className="nav-link">Products</NavLink>
    </Nav> */}
   
   <Outlet/>
    </>
  )
}

export default App
