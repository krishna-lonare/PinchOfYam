import React from "react";
import "./Home.css";
import Categories from "./Categories";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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
        <p>© 2026 MyWebsite. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;