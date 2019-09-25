import React, { Component} from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import FileUpload from "../upload/fileUpload";

export default class PetSitter extends Component {
    
      state = {
            name: "",
            image: [],
            number:"",
            address: "",
            other: ""
        }
   
    onChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }
    
    onSubmit = e => {
      e.preventDefault();
      console.log(`Sitter info: ${this.state.name}, ${this.state.image}, ${this.state.number}, ${this.state.address}, and ${this.state.other}`)
      this.setState({
        name: "",
        image: "",
        number: "",
        address: "",
        other: ""
      })
    }

    render() {
        return (
           <Link to="/petSitter">
           <div style={{marginTop: 10}}>
                <h3>Sitter Information</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name:  </label>
                        <input type="text" 
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Picture: <FileUpload /></label>
                        <input type="" 
                        className="form-control"
                        name="image"
                        value={this.state.image}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input type="text" 
                        className="form-control"
                        name="number"
                        value={this.state.number}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text" 
                        className="form-control"
                        name="address"
                        value={this.state.address}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Other notes: </label>
                        <input type="text" 
                        className="form-control"
                        name="other"
                        value={this.state.other}
                        onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Sitter" className="btn btn-primary" onClick={this.onSubmit}/>
                    </div>
                </form>
            </div>
            </Link>
        )
    }
}