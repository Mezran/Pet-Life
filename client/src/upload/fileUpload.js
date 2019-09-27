import React, { Component } from "react";
import { render } from "react-dom";
import Images from "./Images";
import Loading from "./Loading";
import Button from "./Button";
import "./fileUpload.scss";

class FileUpload extends Component {
  state = {
    uploading: false,
    images: [],
    imageURL: ""
  };

  onChange = e => {
    const files = Array.from(e.target.files);
    this.setState({ uploading: true });

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    fetch("/api/image-upload", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(images => {
        this.setState({
          uploading: false,
          images: images,
          imageURL: images[0].url
        });
        this.props.onComplete(images[0].url);
      });
  };

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    });
  };
  render() {
    const { uploading, images } = this.state;

    const content = () => {
      switch (true) {
        case uploading:
          return <Loading />;
        case images.length > 0:
          return (
            <Images
              images={images}
              removeImage={this.removeImage}
              imageURL={this.imageURL}
            />
          );
        default:
          return <Button onChange={this.onChange} onClick={this.removeImage} />;
      }
    };

    return (
      <div>
        <div className="button">{content()}</div>
      </div>
    );
  }
}

FileUpload.defaultProps = {
  onComplete: function() {}
};

export default FileUpload;
