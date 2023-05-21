import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="email or phone number"></input>
          <input type="password" placeholder="password"></input>
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b>Sign Up</b>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
