import React from "react";
import "./style.scss"
import { Link } from "react-router-dom"

function Family() {
    return (
        <>
            <button className="familyCard">
                <Link to="/petinfo">
                    <div >
                        <img src="https://animalsafari.com/Georgia/wp-content/uploads/2016/03/wild-animal-safar-drive-thru-animal-park-tiger.jpg" className="card-img-top familyCard" alt="first pet" />
                        <div className="card-body">
                            <p className="card-text">Ms. Fluffy</p>
                        </div>
                    </div>
                </Link>
            </button>
            <button className="familyCard">
                <Link to="/comingsoon">
                    <div >
                        <img src="https://www.missingdogsuk.co.uk/wp-content/plugins/wp-job-manager-resumes/assets/images/candidate.png" className="card-img-top familyCard" alt="newe pet" />
                        <div className="card-body">
                            <p className="card-text"> + Add New Pet</p>
                        </div>
                    </div>
                </Link>
            </button>
        </>

    );
}

export default Family;
