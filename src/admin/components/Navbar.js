import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Dashboard extends Component {
   
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg  ">
  <Link className="navbar-brand" to="/dashboard">SVPC</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
        <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link text-white"  to="/student">Student</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link text-white" to="/teacher">Teacher</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link text-white" to="/course">Courses</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link text-white" to="/fee">Fee</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link text-white" to="/salary">Salary</Link>
      </li>
   

      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Teachers
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/addteacher">Add New Teacher</Link>
          <Link className="dropdown-item" to="/teacherdetail">Show All Teacher</Link>
        </div>
      </li> */}

      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Courses
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Add New Course</a>
          <a className="dropdown-item" href="#">Total Courses</a>
        </div>
      </li> */}

      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Attendance
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">View Attendance</a>
         
        </div>
      </li> */}
      <li className="nav-item dropdown ">
        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Admin
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Change Password</a>
          <a className="dropdown-item" href="#">My Profile</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Logout</a>
        </div>
      </li>
     
    </ul>
    
  </div>
</nav>
            </div>
        )
    }
}
