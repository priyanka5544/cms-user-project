import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-bg text-white ">
                <div className="container footer">
                    <div className="row ">
                        <div className="col-md-3 col-sm-3">
                            <h4>Head Office<br />E-Learner's</h4>
                            <p>Address: 212-216,Opposite Apolo Hospital,Above Hotel Raj New, Plasia, Indore</p>
                            <p>+91-7689065490</p>
                            <p>07654-9007619</p>
                            <p>elearners@gmail.com</p>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            <h4>Branch Office<br /> E-Learner's</h4>
                            <h6>Vijay Nagar Branch</h6>
                            <p>102,2nd floor,above Apna Sweet's Opp iBus stop, Vijay Nagar Square, Indore</p>
                            <p>Contact No. +91 7896005430</p>
                            <p>Landline No. 0732 9008765</p>
                            <p>elearners@gmail.com</p>
                        </div>

                        <div className="col-md-3 col-sm-3">
                            <h4>Courses</h4>
                            <ul className="list-unstyled">
                                <li>Basic Prograimming</li>
                                <li>Java Prograimming</li>
                                <li>Web Development</li>
                                <li>Web/UI Desiging</li>
                                <li>Mobile App</li>
                                <li>Python</li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-3">
                            <h4>Enterprise</h4>
                            <ul className="list-unstyled">
                                <li>Corporate Training</li>
                                <li>Product Training</li>
                                <li>College Training</li>
                                <li>Tableau Training</li>
                            </ul>
                        </div>
                    </div>
                        <div className="row">
                        <div className="col-md-12 col-sm-12 border-bottom">
                        </div>
                   
                  
                       <div className="row">
                           <div className="col-md-12 col-sm-12 mt-3">
                               <ul className="d-flex list-unstyled">
                               <li >copyright@ 2021 Leaners Technologies. All rights reserved</li>
                               <li className="ml-5"><i className="fa fa-facebook-square"></i></li> <span>&nbsp; &nbsp;</span> |
                               <li className="ml-3"><i className="fa fa-linkedin"></i></li><span>&nbsp; &nbsp;</span>|
                               <li className="ml-3"><i className="fa fa-google"></i></li>
                               </ul>
                           </div>
                       </div>
                
               </div>
              
                </div>
            
            </div>
        )
    }
}
