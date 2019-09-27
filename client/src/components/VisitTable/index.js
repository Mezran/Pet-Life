import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";


function VisitTable(props) {
    return (
        < >
            <tr >
                <td>{props.date}</td>
                <td>{props.doctorsName}</td>
                <td>{props.hospital}</td>
                {/* <td> <Link to="/visits/viewDetail" >See Details</Link></td> */}
            </tr>


        </>
    );
}

export default VisitTable;
