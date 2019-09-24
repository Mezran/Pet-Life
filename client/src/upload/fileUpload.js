import React, { Component } from "react";
import Images from "./Images";
import { API_URL } from "../utils/API";
import Loading from "./Loading";
import Button from "./Button";
import './fileUpload.scss'

export default class FileUpload extends Component {
    state = {
        uploading: false,
        images: []
    }

    onChange = e => {
      console.log(e.target)
        const files = Array.from(e.target.files)
        this.setState({ uploading: true })
    
        const formData = new FormData()
    
        files.forEach((file, i) => {
          formData.append(i, file)
        })
    
        fetch(`${API_URL}/image-upload`, {
          method: 'POST',
          body: formData
        })
        .then(res => res.json())
        .then(images => {
          this.setState({ 
            uploading: false,
            images
          })
        })
      }
    
      removeImage = id => {
        console.log("this.removeImage")
        this.setState({
          images: this.state.images.filter(image => image.public_id !== id)
        })
      }
      render() {
        const { uploading, images } = this.state
    
        const content = () => {
          switch(true) {
            case uploading:
              return <Loading />
            case images.length > 0:
              return <Images images={images} removeImage={this.removeImage} />
            default:
              return <Button onChange={this.onChange} onClick={this.removeImage}/>
          }
        }
    
        return (
          <div>
            <div className='button'>
              {content()}
            </div>
          </div>
        )
      }
    }





