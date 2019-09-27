import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";
import VisitTable from "../VisitTable";

class PastVisits extends Component {
    static contextType = UserContext
    state = {
        mounted: false,
        refreshed: false,
        pets: [],
        activePetVisit: []
    }
    // componentDidUpdate() {
    //     if (this.state.mounted == false) {
    //         if (this.state.refreshed == false) {
    //             axios.get(`/api/user/${this.context.user.id}/petFamily`)
    //                 // console.log(this.context.user.id)
    //                 .then(res => {
    //                     console.log(res.data.pets);
    //                     this.setState({
    //                         visits: res.data.pets,
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
        // if (!this.context.user) return
        axios.get(`/api/user/${this.context.user.id}/petFamily`)
            .then(res => {
                console.log(res.data.pets[0].docVisits);
                this.setState({
                    pets: res.data.pets[0].docVisits,
                    activePetVisit: res.data.pets[0].docVisits,
                    mounted: true
                })
            })
    }

    // componentDidMount() {
    //     let currentComponent = this;
    //     axios.get(`/api/user/${this.context.user.id}/petFamily`).then(response => {
    //         console.log(response);
    //         currentComponent.setState({
    //             pets: response.data.pets,
    //             activePetPrescription: response.data.pets[0].prescriptions,
    //             mounted: true
    //         });
    //     });
    // }

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

                        {this.state.pets.map(result => (
                            <VisitTable
                                key={result._id}
                                date={result.date}
                                doctorsName={result.doctorsName}
                                hospital={result.hospital}
                            />

                        ))}
                    </tbody>


                </table>

            </>
        );
    }
}

export default PastVisits;
