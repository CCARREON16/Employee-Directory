import React from "react";

function Search(props) {
    return (
        <form>
            <div className="form-group" >
        <label searchFor= "search">Search:</label>
        <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search employee by name"
        id="search"
        />
        <br/>
        <button onClick={props.handleFormSubmit} className="btn btn-primary">Search</button>
            </div>
        </form>
    );
}

export default Search;