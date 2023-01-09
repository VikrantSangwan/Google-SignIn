import React from "react";
import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router";

function Home() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function handlesubmitbtn() {
    navigate("pwd");
  }

  return (
    <div className="Wrapper">
      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onInput={(e) => {
              user.email = e.target.value;
              setUser(user);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handlesubmitbtn}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Home;
