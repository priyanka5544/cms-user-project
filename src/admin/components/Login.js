import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:""
        }
    }
        login = ()=>{
            let {email, password} = this.state
            axios.post("http://localhost:3000/user/login",{email, password}).then(async (res) =>{
                console.log(res)
                let data = res.data
                if(data.status != "OK"){
                    toast(data.msg)
                }else{
                    let token = data.data.token
                    await localStorage.setItem('lgntkn',token)
                    toast(data.msg)
                    window.location = "/dashboard"
                }
            }).catch(err =>{
                console.log(err)
            })
        }
    render() {
        return (
            <div className="login-banner">
       <div className="login-div">
            <div className="container-fluied">
                <div className="row">
                    <div className="col-md-6">
                        <div className="imgBg">
                            <img src="https://sharecontrol.net/wp-content/uploads/2021/01/undraw_multitasking_hqg3.png" width="350px" alt="img"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-center mt-5">Admin Login</h1>
                            <input type="email" className="form-control mt-5 ml-5"
                                   placeholder="Email" value={this.state.email}
                                   onChange={(e)=>this.setState({email:e.target.value})}
                                   />

                            <input type="password" className="form-control mt-4 ml-5"
                                   placeholder="Password"value={this.state.password}
                                   onChange={(e)=>this.setState({password:e.target.value})}
                                   />
                            <button type="submit" className="form-control mt-4 ml-5 btn "
                                     onClick={this.login}>Login</button><br/><br/>

                            <p>Forgot<Link to="/forgotpwd">Password ?</Link></p>
                            <p>Don't have an account yet ?<Link to="/register">Register here</Link></p>
                            
                            
                    </div>

                </div>
            </div>
       </div>
       <ToastContainer position="top-center"/>
   </div>


        )
    }
}
