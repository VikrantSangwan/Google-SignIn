import "../Home/Home.css";
import "./Password.css";

function Password(props) {
  return (
    <div className="container">
      <div className="wrapper">
        {/* Image Wrapper  */}
        <div className="img">
          <img
            src="https://cdn.telanganatoday.com/wp-content/uploads/2021/11/Google-Hyderabad-is-looking-to-hire-for-multiple-roles.jpg"
            alt=""
          />
        </div>

        {/* TextField  */}
        <div className="textfields">
          <p className="title">Welcome</p>
          <p className="user"></p>
          <input type="password" placeholder="Enter your Password" required />
          <div className="checkbox">
            <input type="checkbox" className="input-check" />
            <p className="showpwd">Show Password</p>
          </div>
        </div>

        {/* Bottom Button  */}
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
