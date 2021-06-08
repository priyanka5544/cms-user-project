import React, { Component } from 'react'
import c from './images/c.png'
import php from './images/php.png'
import java from './images/java.png'
import python from './images/python.png'
import hadoop from './images/hadoop.png'
import android from './images/android.png'
export default class PopularCourses extends Component {
    render() {
        return (
            <div className="popular_course">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center">Our Popular Courses</h2>
                            <p className="text-center">E-Learners No.1 Programming Institute with providing training more than 10
                               <br /> languages</p>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-md-4 mt-4">
                            <div className="card">
                                <img className="card-img-top p-3" src={c} alt="Card image cap" width="50px" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">C/C++ Programming</h5>
                                 </div>
                            </div>
                        </div>
                   
                        <div className="col-md-4 mt-4">
                            <div className="card">
                                <img className="card-img-top p-3" src={php} alt="Card image cap" width="50px" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">PHP</h5>
                                 </div>
                            </div>
                        </div>

                        <div className="col-md-4 mt-4">
                            <div className="card">
                                <img className="card-img-top p-3" src={java} alt="Card image cap" width="50px" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Java</h5>
                                 </div>
                            </div>
                        </div>

                        <div className="col-md-4 mt-4">
                            <div className="card">
                                <img className="card-img-top p-3" src={python} alt="Card image cap" width="50px" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Python</h5>
                                 </div>
                            </div>
                        </div>

                        <div className="col-md-4 mt-4">
                            <div className="card">
                                <img className="card-img-top p-3" src={hadoop} alt="Card image cap" width="50px" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Hadoop</h5>
                                 </div>
                            </div>
                        </div>

                        <div className="col-md-4 mt-4">
                            <div className="card">
                                <img className="card-img-top p-3" src={android} alt="Card image cap" width="50px" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Android</h5>
                                 </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}
