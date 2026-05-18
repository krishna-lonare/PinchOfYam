import React from "react";
import "./Home.css";
import Categories from "./Categories";

function Home() {

  function Explore(){
    window.location.href = "/Categories";
  }
  return (
    <div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1># Cooking With Speed And Test </h1>

          

          <div className="hero-buttons">
            <button onClick={Explore}className="start-btn">Explore</button>
            
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

      {/* Features */}
      <section className="features">
        <div className="card1">
          <h2>⚡ Fast Learning</h2>
          <p>Learn cooking fast with short recipe reels.</p>
        </div>

        <div className="card1">
          <h2>🍕 Recipe Categories</h2>
          <p>Explore a wide variety of recipes from different cuisines.</p>
        </div>

        <div className="card1">
          <h2>❤️ Save Recipes</h2>
          <p>Bookmark your favorite recipes for quick access.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 MyWebsite. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;