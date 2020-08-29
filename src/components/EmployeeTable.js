import React from "react";

function EmployeeTable(props) {
  return (
      <table className="table table-hover">    
            <td>{props.FirstName}</td>
            <td>{props.LastName}</td>
            <td>{props.email}</td>
            <td>{props.PhoneNumber}</td>
            <td>
              <img src={props.picture} className="img-fluid" alt="..." />
            </td>

      </table>
  );
}
export default EmployeeTable;