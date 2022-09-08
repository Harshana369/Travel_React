import logo from "./logo.svg";
import "./App.css";
import { Home } from "./screens/Home";
import { useState } from "react";

function App() {
  

  const handleClick = (event) => {
    // 👇️ toggle class on click
    event.currentTarget.classList.toggle("fa-times");

    const navbar = document.querySelector(".navbar");
    navbar.classList.add("nav-toggle");
    navbar("nav-toggle");
  };



  return (
    <>
      <header>
        <a href="#" className="logo">
          Travel<span>.</span>
        </a>
        <nav className="navbar">
          <ul>
            <li>
              <a data-scroll="home" href="#home" className="active">
                home
              </a>
            </li>
            <li>
              <a data-scroll="feature" href="#feature">
                feature
              </a>
            </li>
            <li>
              <a data-scroll="about" href="#about">
                about
              </a>
            </li>
            <li>
              <a data-scroll="gallery" href="#gallery">
                gallery
              </a>
            </li>
            <li>
              <a data-scroll="review" href="#review">
                review
              </a>
            </li>
            <li>
              <a data-scroll="contact" href="#contact">
                contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="fas fa-bars" onClick={handleClick}></div>
      </header>
    </>
  );
}

export default App;
