import React, { Component } from "react";
import axios from "axios";
import FileUpload from "../../upload/fileUpload";
import UserContext from "../../context/UserContext";

class AddDetailForm extends Component {
  static contextType = UserContext;
  state = {
    title: "",
    file: "",
    comment: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  setFile = filePath => {
    this.setState({
      file: filePath
    });
  };

  handleSubmitEvent = event => {
    event.preventDefault();
    console.log(this.props.postTo);
    const newPrescription = {
      title: this.state.title,
      file: this.state.file,
      comment: this.state.comment
    };
    console.log(newPrescription);
    axios
      .post(this.props.postTo, newPrescription)
      .then(response => {
        console.log(response);
        window.location = `/user/${this.context.user.id}/prescription`;
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="DetailForm">
        <form>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <FileUpload onComplete={this.setFile} />
          </div>
          <div className="form-group">
            <label>Comment</label>
            <textarea
              type="textarea"
              name="comment"
              className="form-control"
              value={this.state.comment}
              onChange={this.handleInputChange}
            />
          </div>
          <button
            type="submit"
            // post={this.props.postTo}
            onClick={this.handleSubmitEvent}
            className="btn btn-warning"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default AddDetailForm;
