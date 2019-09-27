import React from "react";
import AddDetail from "../components/AddDetail/addDetail";

function AddDetailPage(props) {
  return (
    <>
      <h2>New {props.pageTitle}</h2>
      <AddDetail
        postTo={`/api/pets/${props.match.params.petId}/${props.pageTitle}`}
      />
    </>
  );
}

export default AddDetailPage;
