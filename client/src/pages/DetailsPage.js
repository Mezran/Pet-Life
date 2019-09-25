import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrescriptionFile from "../components/PrescriptionFile/prescriptionFile";
import axios from "axios";

class DetailsPage extends Component {
    state = {
        Visits: [
            {
                id: "1",
                title: "First Title",
                url: "https://via.placeholder.com/150",
                comment: "Lorem ipsum...."
            },
            {
                id: "2",
                title: "Second Title",
                url: "https://via.placeholder.com/300x400",
                comment: "Lorem ipsum...."
            }
        ]
    };

    // componentDidMount() {
    //     this.loadVisits();
    // }

    // loadVisits = () => {
    //     axios.get("/api/visits").then(function (res) {
    //         this.setState({
    //             Visits: "res.data.docs"
    //         });
    //     });
    // };

    render() {
        return (
            <div className="Visits">
                <div className="row">
                    <div className="col-12">
                        {this.state.Visits.map(item => (
                            <PrescriptionFile
                                key={item.id}
                                url={item.url}
                                title={item.title}
                                comment={item.comment}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailsPage;
