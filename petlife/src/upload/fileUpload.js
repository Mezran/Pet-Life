import React, { Component } from "react"

class FileUpload extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="fileUpload">
                <span className="title">Upload your files</span>
                <div className="content">
                    <div />
                    <div className="files" />
                </div>
                <div className="action" />
            </div>
        )
    }

}
export default FileUpload;