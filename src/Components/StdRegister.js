import React, { Component } from 'react'

export default class StdRegister extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row stdRegister">
                        <div className="col-md-5 col1 ">
                            <h1 className="text-white">Register yourself at E-Learner's and get extra benefits.</h1>
                        </div>
                        <div className="col-md-7 col2">

                            <div className="row stdRegister-row2">
                                <div className="col-md-6  mt bg-white">
                                    <h2 className="text-center">Apply Now</h2>
                                    <label>Name*</label><br/>
                                    <input type="text" placeholder="Please Enter Your Name" required/><br/><br/>

                                    <label>Phone Number*</label><br/>
                                    <input type="text" placeholder="Please Enter Your Name" required/><br/><br/>

                                    <label>Course*</label><br/>
                                    <select>
                                    <option>----------Select Course----------</option>
                                        <option>HTML5</option>
                                        <option>CSS3</option>
                                        <option>Bootstrap</option>
                                        <option>Python</option>
                                        <option>Java</option>
                                        <option>Jquery</option>
                                        <option>Ajax</option>
                                        <option>PHP</option>
                                    </select><br/><br/>

                                    <button>SEND MESSAGE</button>
                                    
                                </div>
                            </div>
                        </div>

                      
                    </div>
              
                </div>
            </div>
        )
    }
}
