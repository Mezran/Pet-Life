import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";
import VisitTable from "../VisitTable";



function PastVisits(props) {
    return (
        <div className="card">
            <h2>Past Visits for {props.name}</h2>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Doctors name</th>
                        <th scope="col">Hospital</th>
                        {/* <th scope="col">Details</th> */}
                    </tr>
                </thead>
                <tbody>

                    {this.state.pets.map(result => (
                        <div>{props.name}
                            <tr >
                                <td>{props.date}</td>
                                <td>{props.doctorsName}</td>
                                <td>{props.hospital}</td>
                                {/* <td> <Link to="/visits/viewDetail" >See Details</Link></td> */}
                            </tr>

                        </div>


                    ))}
                </tbody>


            </table>

        </div>
    );
}

export default PastVisits;
