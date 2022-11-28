import "../Home/Home.css";
import "./Password.css";

function Password() {
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
          <p className="title">Welcome</p>
          <p className="user"></p>
          <input type="password" placeholder="Enter your Password" required />
          <div className="row pwd">
            <input type="checkbox" className="col-1 checkbox" />
            <p className="col-8 showpwd">Show Password</p>
          </div>
        </div>

        <div className="bottom-section">
          <a href="#">Forgot email?</a>
          <button className="next-btn">
            <a href="">Next</a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Password;
