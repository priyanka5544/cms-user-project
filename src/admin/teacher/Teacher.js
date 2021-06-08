import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
export default class Teacher extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="teacher">
                <div className="container">
                        <div className="row">
                            <div className="add_teacher">
                                <h5 className="ml-5 mt-3"><Link to="/addteacher" className="link">Add Teacher</Link></h5>
                                <p><i class="fa fa-plus-circle" aria-hidden="true"></i></p>
                            </div>
                            <div className="add_teacher">
                                <h5 className="ml-5 mt-3"><Link to="/teacherdetail" className="link">View Teacher</Link></h5>
                                <p><i class="fa fa-eye" aria-hidden="true"></i></p>
                            </div>
                            <div className="add_teacher">
                                <h5 className="ml-5 mt-3"><Link to="" className="link">Approve Teacher</Link></h5>
                                <p><i class="fa fa-check-circle-o" aria-hidden="true"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                   
            </div>
        )
    }
}
