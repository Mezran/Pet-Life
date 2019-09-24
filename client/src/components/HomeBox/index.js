import React from "react";
// import Header from "../components/Header/header";
// import Footer from "../components/Footer/index";
// import Sidebar from "../components/Sidebar/sidebar";

import "./style.scss";

function HomeBox() {
    return (
        <div className="card bg-dark text-white welcomeBox">
            <img src="./catsdogs_banner.jpg" className="card-img welcomeImg" alt="cat and dog bannner" />
            <div className="card-img-overlay">
                <h5 className="card-title welcome">Welcome to Pets</h5>
                <h4>For the love of your beloved pets.</h4>
                {/* <p className="card-text welcomeText">Keep track and manage your pets life.</p> */}
            </div>
        </div>

    );
}

export default HomeBox;
