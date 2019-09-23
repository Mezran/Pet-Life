import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/index";
import Sidebar from "../components/Sidebar/sidebar";
import FileUpload from "../upload/FileUpload";

function Home() {
    return (
        <div className="HomePage container">
            <FileUpload />
            <h1>Welcome Home</h1>
        </div>
    );
}

export default Home;
