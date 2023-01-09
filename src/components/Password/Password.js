import React from "react";
import "../Home/Home.css";

function Password(props) {
  console.log(props.email);

  return (
    <div className="Wrapper">
      <form>
        <div className="mb-3">
          <p className="from-label">{props.email}</p>
          <label className="form-label">Password</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Password;
