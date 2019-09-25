import React from "react";
import AddDetail from "../components/AddDetail/addDetail";

function AddDetailPage(props) {
  return (
    <>
      <h2>New {props.pageTitle}</h2>
      <AddDetail postTo={props.postTo} />
    </>
  );
}

export default AddDetailPage;
 