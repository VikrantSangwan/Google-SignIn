import { React, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router";

function Home() {
  let useremail;
  const navigate = useNavigate();

  function handlesubmitbtn() {
    navigate("/pwd/" + useremail);
  }

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
            <p>Sign in </p>
            <p>with your Google Account</p>
          </div>
          <div className="emailinput">
            <input
              type="email"
              className="form-control email"
              onInput={(e) => {
                useremail = e.target.value;
              }}
              placeholder="Email or phone"
            />
            <p>
              <a href="">Forgot email?</a>
            </p>
            <p className="private">
              Not your computer? Use Guest mode to sign in privately.
              <span>
                <a href=""> Learn more</a>
              </span>
            </p>
          </div>

          <div className="submitbtn">
            <p>Create Account</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                handlesubmitbtn();
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

export default Home;
