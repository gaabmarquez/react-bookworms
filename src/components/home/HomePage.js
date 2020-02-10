import React from "react";
import { Link } from "react-router-dom";
import './HomePage.scss'

const HomePage = ( ) => {

  return (
    <div className="landing-container" >
      <div className="container-fluid">
        <div className="welcome-container">
          <h1 className="title">
            Welcome to BookWorms!
        <i className="fa fa-caret fa-lg"></i>
          </h1>
        </div>

        <div className="floating-nav">
          <h2>
            What is this website?
      </h2>

          <p>
            This is just a side project to sharp my Angular skills, but it is a
            working app indeed.
      </p>
          <p>
            In this site you can:
      </p>

          <ul>
            <li>Add books you are reading</li>
            <li>Add words, its definition and in wich bookyou find it</li>
            <li>QUIZ yourself with an interactive memory game</li>
          </ul>

          <p>
            Sounds interesting?
      </p>
          <p className="click-here">
            <Link to="books" className="btn btn-primary btn-lg">
              Click here to start NOW
         </Link>
          </p>
        </div>
      </div>

      <div className="footer d-flex justify-content-center">
        <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/gaabmarquez">
          © 2020, Created by Gabriel Márquez</a
        >
      </div>
    </div >
  )
}

export default HomePage;
