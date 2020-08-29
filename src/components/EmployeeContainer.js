import React, {Component} from "react";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeTable from "./EmployeeTable";
import Api from "../utils/Api";

class Container extends Component {
  state = {
    result: [],
    search: "",
    filterBy: "FirstName",
    currentSort: "default",
    sortField: "",
  };

  componentDidMount() {
    Api
      .getEmployee()
      .then((response) => {
        console.log(response);
        this.setState({
          result: response.data.results.map((emp, idx) => ({
            FirstName: emp.name.first,
            LastName: emp.name.last,
            picture: emp.picture.large,
            email: emp.email,
            PhoneNumber: emp.PhoneNumber,
            key: idx,
          })),
        });
      })
      .catch((err) => console.log("error", err));
  }

  searchEmp = (search) => {
    console.log(search);
    var filterEmp = this.state.result.filter(
      (person) => person.FirstName === search
    );
    this.setState({
      result: filterEmp,
    });
  };

  handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
      
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    console.log("name", name);
    console.log("value", value);
    this.searchEmp(value);
    this.setState({
      [name]: value
    });
    this.filterEmployees(value);
    this.filterEmployees(this.state.search);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
          <h2>Employee Directory</h2>
        </div>

        <div className="row">
          <div className="col-md-6">
            <EmployeeSearch
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>

        <div className="row">
          <table className="table">
            <tr>
              
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>

            {[...this.state.result].map((item) => 
            <EmployeeTable 
            picture={item.picture}
            FirstName={item.FirstName}
            LastName={item.LastName}
            email={item.email}
            PhoneNumber={item.PhoneNumber}
            key={item.key}
            />
            )}
          </table>
        </div>
      </div>
    );
  }
}

export default Container;
