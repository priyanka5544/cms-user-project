import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class StudentDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             studentdata : [],
             perPage:5,
             currentPage:1,
             nPages:2
        }
    }
        fetchData = ()=>{
            let {perPage, currentPage} = this.state
            axios.get(`http://localhost:3000/student/students?limit=${perPage}&page=${currentPage}`).then(data =>{
                this.setState({
                    studentdata: data.data.data,
                    nPages: data.data.nPages
                })
            }).catch(err =>{
                    console.log(err)
            })
        }
        componentDidMount(){
            this.fetchData()
        }

        handlePerPage = (perPage)=>{
            console.log(perPage)
            this.setState({perPage: perPage}, () => this.fetchData())
        }

        handlePagination = (action)=>{
                console.log(action)
            let {currentPage, nPages} = this.state
            if(action == "next"){
                if(currentPage<nPages){
                    currentPage++
                }
            }
            if(action == "prev"){
                if(currentPage>1){
                    currentPage--
                }
            }
            this.setState({currentPage:currentPage}, ()=>{this.fetchData()})
        }
    
    render() {
        return (
            <div>
            <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="text-center mt-4">Student List</h3>
                        </div>
                    </div>
                       <div className="row">
                             <div className="col-md-2 border p-3 ">
                             show per page
                            <select value={this.state.perPage}
                                    onChange={(e)=>this.handlePerPage(e.target.value)}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                        <div className="col-md-2 offset-6">
                            <Link to="/addstudent"><button className="btn btn-outline-info">Add New</button></Link>
                        </div>
                    </div>
                 
                 <div className="row mt-3">
                     <div className="col-md-12">
                         <table className="table table-bordered text-center">
                             <thead>
                                 <tr>
                                     <th>Student Name</th>
                                     <th>Father Name</th>
                                     <th>Mother Name</th>
                                     <th>Contact</th>
                                     <th>Email</th>
                                     <th>Address</th>
                                     <th>Course</th>
                                     <th>Gender</th>
                                     <th>Date</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {this.state.studentdata != undefined && this.state.studentdata.map((std,ind) => {
                                    return(
                                        <tr key={ind}>
                                     <td>{std.student_name}</td>
                                     <td>{std.father_name}</td>
                                     <td>{std.mother_name}</td>
                                     <td>{std.contact}</td>
                                     <td>{std.email}</td>
                                     <td>{std.address}</td>
                                     <td>{std.course}</td>
                                     <td>{std.gender}</td>
                                     <td>{std.date}</td>
                                        </tr>
                                 )
                              })}
                             </tbody>
                         </table>
                     </div>
                     <div className="col-md-12">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item"><a className="page-link" href="#"
                                onClick={()=>this.handlePagination("prev")}>Previous</a></li>
                                
                                <li className="page-item"><a className="page-link" href="#"
                                onClick={()=>this.handlePagination("next")}
                                >Next</a></li>
                            </ul>
                        </nav>
                    </div>
                 </div>
              </div>
            </div>
        )
    }
}
