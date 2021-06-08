import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand " href="#">E-Learners
                  {/* <img src="https://www.nicepng.com/png/detail/964-9643343_get-started-logo-for-coaching-institute.png" width="100px" height="50px" /> */}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li class="nav-item dropdown active">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Courses
                 </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Java</a>
                        <a class="dropdown-item" href="#">PHP</a>
                        <a class="dropdown-item" href="#">C/C++</a>
                        <a class="dropdown-item" href="#">Python</a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/contact">Contact</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link active " to="/login">Login</Link>
                    </li>

                  </ul>

                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
