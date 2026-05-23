import React from "react";
import "./Home.css";
import Categories from "./Categories";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";


function Home() {

  function Explore() {
    window.location.href = "/Categories";
  }
  return (
    <div className="hero1">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1># Cooking With Speed And Test </h1> 



          <div className="hero-buttons">
            <button onClick={Explore} className="start-btn">Explore</button>

            <button className="learn-btn">Learn More</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.S2zD2ZFTTVB3l6Zc8mEjngHaHa?r=0&w=996&h=996&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="web"
          />
        </div>
      </section>
      <div className="categories">
        
        <Card className="gocard" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>⚡ Quick Reels</Card.Title>
            <Card.Text>Learn recipes instantly through short and engaging cooking reels in just a few seconds.</Card.Text>
          </Card.Body>
           <Button variant="primary">Primary</Button>
          </Card>

         <Card className="gocard" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>📖 Step-by-Step Recipes</Card.Title>
            <Card.Text>Read clear step-by-step instructions, ingredients, and cooking tips for every recipe.</Card.Text>
          </Card.Body>
           <Button variant="primary">Primary</Button>
          </Card>

         <Card className="gocard" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>🎥 Deep Learning Videos</Card.Title>
            <Card.Text>Watch detailed cooking videos to understand complete preparation methods from start to finish.</Card.Text>
          </Card.Body>
          <Button variant="primary">Primary</Button>
          </Card>
      </div>

      {/* Footer */}
      <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2>🍴 PinchOfYam</h2>

          <p>
            Learn cooking faster with quick reels,
            smart recipe notes, and detailed tutorials.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <NavLink to="/" className="nav-link"><li>Home</li></NavLink>
            <NavLink to="/products" className="nav-link"><li>Products</li></NavLink>
            <NavLink to="/categories" className="nav-link"><li>Categories</li></NavLink>
            <NavLink to="/about" className="nav-link"><li>About</li></NavLink>
            <li>Recipes</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>  

        {/* Features */}
        <div className="footer-section">
          <h3>Features</h3>

          <ul>
            <li>⚡ Quick Reels</li>
            <li>📖 Smart Notes</li>
            <li>🎥 Video Tutorials</li>
            <li>🔊 Voice Recipe Reader</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: support@pinchofyam.com</p>

          <p>Made with ❤️ using React</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 PinchOfYam | All Rights Reserved
      </div>

    </footer>
    </div>
  );
}

export default Home;