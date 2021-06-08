import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
export default class AddStudent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             student_name:"",
             father_name:"",
             mother_name:"",
             contact:"",
             email:"",
             address:"",
             course:"",
             gender:"male",
             date:""
        }
    }
    
    addStd = () =>{
       let{student_name,father_name,mother_name,contact,email,address,course, gender,date} = this.state
       console.log(student_name,father_name,mother_name,contact,email,address,course, gender,date)
        }
    render() {
        return (
            <div>
            <Navbar/>
                
                <div className="container">
                    
                    <div className="row mt-5">
                        <div className="col-md-8 offset-2 student_bg">
                            <h3 className="text-center">Add A Student</h3>
                            <div className="row mt-5">
                                <div className="col-md-4">
                                    <input type="text" placeholder="Student Name"
                                           className="form-control" value={this.state.student_name}
                                           onChange={(e)=>this.setState({student_name:e.target.value})}
                                           />
                                </div>
                                <div className="col-md-4">
                                    <input type="text" placeholder="Father Name"
                                           className="form-control" value={this.state.father_name}
                                           onChange={(e)=>this.setState({father_name:e.target.value})}   
                                           />
                                </div>
                                <div className="col-md-4">
                                    <input type="text" placeholder="Mother Name"
                                           className="form-control" value={this.state.mother_name}
                                           onChange={(e)=>this.setState({mother_name:e.target.value})} 
                                           />
                                </div>
                                </div>
                       
                        <div className="row mt-4">
                        <div className="col-md-6">
                                    <input type="number" placeholder="Contact"
                                           className="form-control" value={this.state.contact}
                                           onChange={(e)=>this.setState({contact:e.target.value})} 
                                           />
                               </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder="Email"
                                           className="form-control" value={this.state.email}
                                           onChange={(e)=>this.setState({email:e.target.value})} 
                                           />
                                </div>
                            
                               <div className="col-md-6 mt-4">
                                    <input type="text" placeholder="Address"
                                           className="form-control" value={this.state.address}
                                           onChange={(e)=>this.setState({address:e.target.value})} 
                                           />
                                </div>
                                
                               <div className="col-md-6 mt-4">
                                    <input type="text" placeholder="Course"
                                           className="form-control" value={this.state.course}
                                           onChange={(e)=>this.setState({course:e.target.value})} 
                                           />
                               </div>

                               <div className="col-md-6 mt-4">
                                <select className="form-control" value={this.state.gender}
                                        onChange={(e)=>this.setState({gender:e.target.value})}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                               </div>
                        
                               <div className="col-md-6 mt-4">
                                    <input type="date" placeholder="Date"
                                           className="form-control" value={this.state.date}
                                           onChange={(e)=>this.setState({date:e.target.value})} 
                                           />
                               </div>
                             </div>
                       
                        <div className="row">
                            <div className="col-md-12 ">
                                <button className="btn btn-primary btn-block mt-4"
                                        onClick={this.addStd}>Add Student</button>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }
}
