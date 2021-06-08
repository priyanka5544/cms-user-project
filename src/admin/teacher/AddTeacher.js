import React, { Component } from 'react'
import Navbar from '../components/Navbar'
export default class AddTeacher extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            contact:"",
            email:"",
            address:"",
            education:"",
            gender:"male",
            joining_date:""
        }
    }
    
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    
                    <div className="row mt-5">
                        <div className="col-md-8 offset-2 teacher_bg">
                            <h3 className="text-center">Add A Teacher</h3>
                            <div className="row mt-4">
                                <div className="col-md-8 offset-2">
                                    <input type="text" placeholder=" Name"
                                           className="form-control" value={this.state.name}
                                           onChange={(e)=>this.setState({name:e.target.value})}
                                           />
                                </div>  
                                  <div className="col-md-8 offset-2 mt-4">
                                    <input type="number" placeholder="Contact"
                                           className="form-control" value={this.state.contact}
                                           onChange={(e)=>this.setState({contact:e.target.value})} 
                                           />
                                 </div>
                            
                                <div className="col-md-8 offset-2 mt-4">
                                    <input type="email" placeholder="Email"
                                           className="form-control" value={this.state.email}
                                           onChange={(e)=>this.setState({email:e.target.value})} 
                                           />
                                </div>
                            
                               <div className="col-md-8 offset-2 mt-4">
                                    <input type="text" placeholder="Address"
                                           className="form-control" value={this.state.address}
                                           onChange={(e)=>this.setState({address:e.target.value})} 
                                           />
                                </div>
                                
                               <div className="col-md-8 offset-2 mt-4">
                                    <input type="text" placeholder="Education"
                                           className="form-control" value={this.state.education}
                                           onChange={(e)=>this.setState({education:e.target.value})} 
                                           />
                               </div>

                               <div className="col-md-8 offset-2 mt-4">
                                <select className="form-control" value={this.state.gender}
                                        onChange={(e)=>this.setState({gender:e.target.value})}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                               </div>
                        
                               <div className="col-md-8 offset-2 mt-4">
                                    <input type="date" placeholder="Joining Date"
                                           className="form-control" value={this.state.joining_date}
                                           onChange={(e)=>this.setState({joining_date:e.target.value})} 
                                           />
                               </div>

                               <div className=" col-md-8 offset-2 mt-4">
                                <button className="btn btn-primary btn-block "
                                        onClick={this.addStd}>Add Teacher</button>
                               </div>
                                </div>
                       
                        
                             </div>
                       
                      
                        </div>
                    </div>
                

            </div>
        )
    }
}
