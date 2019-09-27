import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";

class PastVisits extends Component {
    static contextType = UserContext
    state = {
        mounted: false,
        refreshed: false,
        results: [
            // {
            //     date: "1",
            //     doctorsName: "First doctorsName",
            //     hospital: "pet Hospital 1",
            // },
            // {
            //     date: "2",
            //     doctorsName: "Second doctorsName",
            //     hospital: "pet Hospital 2",
            // }
        ]
    }
    // componentDidUpdate() {
    //     if (this.state.mounted == false) {
    //         if (this.state.refreshed == false) {
    //             axios.get(`/api/user/${this.context.user.id}/visits`)
    //                 .then(function (res) {
    //                     console.log(res.data);
    //                     this.setState({
    //                         results: res.data,
    //                         refreshed: true
    //                     });
    //                 });

    //         } else {
    //             this.setState({
    //                 mounted: true
    //             })
    //         }
    //     }
    // }
    componentDidMount() {
        if (!this.context.user) return
        axios.get(`/api/user/${this.context.user.id}/visits`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    results: res.data,
                    mounted: true
                })
            })
    }

    render() {
        return (
            < >
                <h2>Past Visits</h2>
                <table className="table table-dark">
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
