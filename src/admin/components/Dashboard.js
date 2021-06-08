import React, { Component } from 'react'
import Navbar from './Navbar'
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="dashboard">
          <div className="container">
            <div className="row row1">
              <div className="total_student">
                <h5 className="ml-4 mt-4">Total Student</h5>
                <p>
                  <span className="ml-4 mt-3 span1"><i class="fa fa-graduation-cap" aria-hidden="true"></i></span>
                  <span className="span2">0</span>
                </p>
                <p>
                  <span className="ml-4">Pending Student</span>
                  <span className="ml-5">0</span>
                </p>
              </div>
              <div className="total_teacher">
                <h5 className="ml-4 mt-4">Total Teacher</h5>
                <p>
                  <span className="ml-4 mt-3 span1"><i class="fa fa-user" aria-hidden="true"></i></span>
                  <span className="span2">0</span>
                </p>
                <p>
                  <span className="ml-4">Pending Teacher</span>
                  <span className="ml-5">0</span>
                </p>
              </div>
              <div className="total_course">
                <h5 className="ml-4 mt-4">Total Course</h5>
                <p>
                  <span className="ml-4 mt-3 span1"><i class="fa fa-book" aria-hidden="true"></i></span>
                  <span className="span2">0</span>
                </p>
              </div>
            </div>
         
             <div className="row row2">
              <div className="student_fee">
                <h5 className="ml-4 mt-4"> Student Fee</h5>
                <p>
                  <span className="ml-4 span1"><i class="fa fa-search-plus" aria-hidden="true"></i></span>
                  <span className="ml-5 span2">None</span>
                </p>
                <p>
                  <span className="ml-4">Pending Fee</span>
                  <span className="ml-5">None</span>
                </p>
              </div>
            
              <div className="teacher_salary">
                <h5 className="ml-4 mt-4"> Teacher Salary</h5>
                <p>
                  <span className="ml-4 span1"><i class="fa fa-search-plus" aria-hidden="true"></i></span>
                  <span className="ml-5 span2">None</span>
                </p>
                <p>
                  <span className="ml-4">Pending Salary</span>
                  <span className="ml-5">None</span>
                </p>
              </div>
             </div>         
         
          </div>
       
          <div className="row">
            <div className="col-md-12">
              <h1>Notice board</h1>
            </div>
          </div>
               
        </div>
      </div>
    )
  }
}
