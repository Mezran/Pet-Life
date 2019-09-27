import "./style.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PastVisits from "../PastVisits";
import UserContext from "../../context/UserContext";

class AddVisits extends Component {
    static contextType = UserContext

    state = {
        date: "",
        doctorsName: "",
        hospital: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    saveVisit = event => {
        event.preventDefault();
        let newVisit = {
            date: this.state.date,
            doctorsName: this.state.doctorsName,
            hospital: this.state.hospital
        }
        axios.post(`/api/pets/${this.props.id}/visits`, newVisit).then(console.log("set state as saved"));
        console.log(newVisit)
    };

    render() {
        return (
            <div className="VisitPage">
                <div className="card">
                    {/* <PastVisits /> */}

                    <h2>Add Visits</h2>

                    <input
                        type="text"
                        name="date"
                        className="form-control"
                        placeholder="Date"
                        value={this.state.date}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        name="doctorsName"
                        className="form-control"
                        placeholder="Doctors Name"
                        value={this.state.doctorsName}
                        onChange={this.handleInputChange}
                    />
                    <input
                        type="text"
                        name="hospital"
                        className="form-control"
                        placeholder="Hospital"
                        value={this.state.hospital}
                        onChange={this.handleInputChange}
                    />
                    {/* <Link
                        to="/visits/addDetail"
                    //   className="btn btn-primary btn-lg"
                    >
                        Add Details </Link> */}
                    <button
                        onClick={this.saveVisit}
                        className="btn btn-outline-dark"
                    >
                        Save
            </button>
                </div >
            </div >
        );
    }
}

export default AddVisits;
