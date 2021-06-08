import React, { Component } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import './admin/cssStyle/style.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import Register from './admin/components/Register'
// import Login from './admin/components/Login'
// import ForgotPwd from './admin/components/ForgotPwd'
// import Dashboard from './admin/components/Dashboard'
// import Student from './admin/student/Student'
// import AddStudent from './admin/student/AddStudent'
// import StudentDetail from './admin/student/StudentDetail';
// import Teacher from './admin/teacher/Teacher'
// import AddTeacher from './admin/teacher/AddTeacher'
// import TeacherDetails from './admin/teacher/TeacherDetails';
// import FileUpload from './admin/student/FileUpload';
import Routers from './Router/Routers'

export default class App extends Component {
  render() {
    return (
      <div>
        <Routers/>
       {/* <Route path="/login" component={Login} /> 
       <Route path="/register" component={Register}/>
       <Route path="/forgotpwd" component={ForgotPwd} /> 
       <Route path="/dashboard" component={Dashboard} /> 
       <Route path="/student" component={Student} /> 
       <Route path="/addstudent" component={AddStudent} /> 
       <Route path="/studentdetail" component={StudentDetail} /> 
       <Route path="/teacher" component={Teacher} /> 
       <Route path="/addteacher" component={AddTeacher} /> 
       <Route path="/teacherdetail" component={TeacherDetails} /> 
       <Route path="/fileupload" component={FileUpload} />  */}
      </div>
    )
  }
}
