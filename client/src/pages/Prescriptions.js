import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrescriptionFile from "../components/PrescriptionFile/prescriptionFile";

function PrescriptionsPage() {
  return (
    <div class="Prescriptions">
      <h2>Prescriptions</h2>
      <Link to="/addDetail" className="btn btn-primary btn-lg">
        Add New Prescription
      </Link>
      <div className="row">
        <PrescriptionFile
          url="http://via.placeholder.com/200x300"
          title="This is the title"
          comment="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ali."
        />
        <PrescriptionFile
          url="http://via.placeholder.com/200x300"
          title="This is the title"
          comment="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ali."
        />
        <PrescriptionFile
          url="http://via.placeholder.com/200x300"
          title="This is the title"
          comment="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ali."
        />
      </div>
    </div>
  );
}

export default PrescriptionsPage;
