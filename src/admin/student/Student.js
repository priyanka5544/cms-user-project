
import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
export default class Student extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="teacher">
                <div className="container">
                        <div className="row">
                            <div className="add_teacher">
                                <h5 className="ml-5 mt-3"><Link to="/addstudent" className="link">Add Student</Link></h5>
                                <p><i class="fa fa-plus-circle" aria-hidden="true"></i></p>
                            </div>
                            <div className="add_teacher">
                                <h5 className="ml-5 mt-3"><Link to="/studentdetail" className="link">View Student</Link></h5>
                                <p><i class="fa fa-eye" aria-hidden="true"></i></p>
                            </div>
                            <div className="add_teacher">
                                <h5 className="ml-5 mt-3"><Link to="" className="link">Approve Student</Link></h5>
                                <p><i class="fa fa-check-circle-o" aria-hidden="true"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                   
            </div>
        )
    }
}
