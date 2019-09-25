import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class PastVisits extends Component {
    state = {
        results: [
            {
                date: "1",
                doctorsName: "First doctorsName",
                hospital: "pet Hospital 1",
            },
            {
                date: "2",
                doctorsName: "Second doctorsName",
                hospital: "pet Hospital 2",
            }
        ]
    }

    // getVisit = res => {
    //     axios.get('/api/visits').then(this.setState({ results: res.data }))
    // }

    render() {
        return (
            < >
                <h2>Past Visits</h2>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Doctors name</th>
                            <th scope="col">Hospital</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.results.map(result => (
                            <tr>
                                <td>{result.date}</td>
                                <td>{result.doctorsName}</td>
                                <td>{result.hospital}</td>
                                <td> <Link to="/visits/viewDetail" >See Details</Link></td>
                            </tr>
                        ))}



                    </tbody>
                </table>

            </>
        );
    }
}

export default PastVisits;
