import "./style.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class VisitsPage extends Component {
  state = {
    aresult: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="">
        <div className="card">
          <h2>Past Visits</h2>
          <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Doctors name</th>
                <th scope="col">Hospital</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  {" "}
                  <Link>See Details</Link>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>Future Visits</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date</th>
                <th scope="col">Doctors name</th>
                <th scope="col">Hospital</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  {" "}
                  <Link>See Details</Link>
                </td>
              </tr>
            </tbody>
          </table>

          <h2>Add Visits</h2>
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  <input
                    type="text"
                    name="date"
                    className="form-control"
                    placeholder="Date"
                    value={this.state.date}
                    onChange={this.handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="doctorsName"
                    className="form-control"
                    placeholder="Doctors Name"
                    value={this.state.doctorsName}
                    onChange={this.handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="hospital"
                    className="form-control"
                    placeholder="Hospital"
                    value={this.state.hospital}
                    onChange={this.handleInputChange}
                  />
                </td>

                <td>
                  {" "}
                  <Link>Add Details</Link>
                </td>
              </tr>
            </tbody>
            <button>Save</button>
          </table>
        </div>
      </div>
    );
  }
}

export default VisitsPage;
