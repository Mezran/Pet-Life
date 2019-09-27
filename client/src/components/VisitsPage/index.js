import "./style.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PastVisits from "../PastVisits";
import UserContext from "../../context/UserContext";

class VisitsPage extends Component {
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
    saveVisit = visit => {
        axios.post(`/api/user/${this.context.user.id}/visits`, visit).then(console.log("set state as saved"));
    };

    render() {
        return (
            <div className="VisitPage">
                <div className="card">
                    <PastVisits />

                    <h2>Add Visits</h2>
                    <table className="table">
                        <>
                            <tbody>
                                <tr>
                                    <td>
                                        <input
                                            type="text"
                                            name="date"
                                            className="form-control"
                                            placeholder="Date"
                                            value={this.state.date}
                                            onChange={this.handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="doctorsName"
                                            className="form-control"
                                            placeholder="Doctors Name"
                                            value={this.state.doctorsName}
                                            onChange={this.handleInputChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="hospital"
                                            className="form-control"
                                            placeholder="Hospital"
                                            value={this.state.hospital}
                                            onChange={this.handleInputChange}
                                        />
                                    </td>

                                    <td>
                                        {/* {" "} */}
                                        <Link
                                            to="/visits/addDetail"
                                        //   className="btn btn-primary btn-lg"
                                        >
                                            Add Details </Link>
                                    </td>
                                </tr>
                            </tbody>
                            <button
                                onClick={() => {
                                    this.saveVisit({
                                        date: this.state.date,
                                        docName: this.state.doctorsName,
                                        hospital: this.state.hospital
                                    });
                                }}
                                className="btn btn-outline-dark"
                            >
                                Save
            </button>
                        </>
                    </table>
                </div>
            </div>
        );
    }
}

export default VisitsPage;
