import React, { Component } from 'react'
import Navbar from '../components/Navbar'
export default class TeacherDetails extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <table className="table table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Contact</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Education</th>
                                        <th>Gender</th>
                                        <th>Joining Date</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
