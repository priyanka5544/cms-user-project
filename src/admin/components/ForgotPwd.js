import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class ForgotPwd extends Component {
    render() {
        return (
            <div class="forgotPwd_banner">
        <div class="forgotPwd_div">
            <div class="container-fluied">
                <div class="row">
                    <div class="col-md-6 offset-3 text-center">
                        <img src="https://freesvg.org/img/password-reset.png" width="100px" alt="" class="mt-3"/>
                        <h1 class=" mt-3">Reset Password</h1>
                        <p>Enter your email to reset password</p>
                        <input type="email" class="form-control mt-4" placeholder="Email"/>
                        <button type="submit" class="btn btn-info btn-block mt-4">Reset Password</button>
                        <p class="mt-3">Back to <Link to="/">login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
        )
    }
}
