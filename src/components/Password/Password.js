import React from "react";
import { useParams } from "react-router";
import "./Password.css";

function Password() {
  let { email } = useParams();
  console.log(email);

  return (
    <div className="Wrapper">
      <form>
        <div className="maincontainer">
          <div className="imgcontainer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
              alt=""
            />
          </div>
          <div className="desccontainer">
            <p>Welcome</p>
            <p>{email}</p>
          </div>
          <div className="emailinput">
            <p className="enterpass">Enter your password</p>
            <input
              type="password"
              className="form-control email"
              placeholder="Password"
            />
          </div>

          <div className="submitbtn">
            <p>Forgot password?</p>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Password;
