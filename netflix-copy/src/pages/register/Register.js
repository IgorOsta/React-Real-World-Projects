import { useRef, useState } from "react";
import "./register.scss";
const Register = () => {
  const [email, setEmail] = useState("");

  const emailRef = useRef();

  const emailHandler = () => {
    setEmail(emailRef.current.value);
    console.log(email);
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies and more</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter you email to create or restart your membership
        </p>
        <div className="input">
          <input
            type="email"
            className="text"
            placeholder="email address"
            ref={emailRef}
          />
          <button className="registerButton" onClick={emailHandler}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
