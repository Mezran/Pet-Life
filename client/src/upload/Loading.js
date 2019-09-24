import React from "react";
import { ClipLoader } from "react-spinners";

 
export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className="sweet-loading">
        <ClipLoader
        
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}