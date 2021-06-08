import axios from 'axios'
import React, { Component } from 'react'

export default class FileUpload extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             selectedFile:null
        }
    }
    
    handleFileUpload =(ev)=>{
        console.log(ev.target.files)
        this.setState({selectedFile:ev.target.files[0]})
    }

    upload = ()=>{
        let frm = new FormData()
        frm.append("file", this.state.selectedFile, this.state.selectedFile.name)
       axios.post("http://localhost:3000/file-upload",frm).then(res =>{
           alert("success")
       }).catch(err =>{
           alert("Error")
           console.log(err)
       })
    } 
    render() {
        return (
            <div className="container">
                <h1 className="text-center">File Uploading</h1>
                <input type= "file" onChange={(e)=>this.handleFileUpload(e)} />
                <button onClick={this.upload}>Upload</button>
            </div>
        )
    }
}
