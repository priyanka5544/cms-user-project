import React, { Component } from 'react'
import Header from './Header'
import Slider from './Slider'
import FeaturedCourses from './FeaturedCourses'
import PopularCourses from './PopularCourses'
import Footer from './Footer'
import std from './images/std.png'
import teacher from './images/teacher.png'
import crs from './images/crs.png'
import place from './images/place.png'
import StdRegister from './StdRegister'
export default class Home extends Component {
    render() {
        return (
            <div>
               <Header/> 
               <Slider/>
                <FeaturedCourses/>
               <div className="container-fluid  home ">
                   <div className="row">
                       <div className="col-md-6 col-sm-12 px-0 col1">
                           <img src="https://d1czs14lkefjhh.cloudfront.net/public/images/Analytics%20for%20Business%20Success-min.jpg" />
                       </div>
                       <div className="col-md-6 col-sm-12 col2">
                          <h2>Why Choose Us</h2>
                          <div className="col-md-2">
                              <div className="circle1"><i className="fa fa-book"></i></div>
                          </div>
                          <div className="col-md-10">
                              <div className="content1">
                                  <h6>Our Popular Courses</h6>
                                  <p>E-Learners No.1 Programming Institute with providing training on more than 10 languages</p>
                              </div>
                          </div>

                          <div className="col-md-2">
                              <div className="circle2"><i className="fa fa-users"></i></div>
                          </div>
                          <div className="col-md-10">
                              <div className="content2">
                                  <h6>Qualified Teachers</h6>
                                  <p>We have international qualified teachers</p>
                              </div>
                          </div>

                          <div className="col-md-2">
                              <div className="circle3"><i className="fa fa-headphones"></i></div>
                          </div>
                          <div className="col-md-10">
                              <div className="content3">
                                  <h6>24/7 Online Support</h6>
                                  <p>E-Learners always ready to provide 24/7 online support for all the students</p>
                              </div>
                          </div>
                       </div>
                   </div>
               </div> 
           
               <PopularCourses/>

         
               
               <StdRegister/>
               <Footer/>
            </div>
        )
    }
}
