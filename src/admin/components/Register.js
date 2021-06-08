import React, { Component } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import {Link} from 'react-router-dom'
export default class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             email:"",
             password:""
        }
    }
    
        register = ()=>{
          let {name, email, password} = this.state
           axios.post("http://localhost:3000/user/register",{name, email, password}).then(res=>{
               console.log(res)
                let data = res.data
                if(data.status != "OK"){
                    toast(data.msg)
                }else{
                    toast(data.msg)
                    window.location = "/"
                }
           }).catch(err=>{
               console.log(err)
           }) 
        }
    render() {
        return (
            <div className="registration_banner">
        <div className="registration_div">
            <div className="cotainer-fluied">
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <h1 className="text-center mt-3">Registration</h1>
                        <div className="row mt-5">
                            
                        <input type="text" className="form-control mt-4"
                               placeholder="Enter Name" value={this.state.name}
                               onChange={(e)=>this.setState({name:e.target.value})}
                               />

                        <input type="email" className="form-control mt-4" 
                               placeholder="Enter Email" value={this.state.email}
                               onChange={(e)=>this.setState({email:e.target.value})}
                               />

                        <input type="password" className="form-control mt-4" 
                               placeholder="Enter Password"  value={this.state.password}
                               onChange={(e)=>this.setState({password:e.target.value})}
                               />
                        
                        <button className="btn  btn-block mt-4" 
                                onClick={this.register} >Register</button>
                        <p className="mt-3">Already have an account ? <Link to="/">Login here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer position="top-center" />
    </div>
        )
    }
}
