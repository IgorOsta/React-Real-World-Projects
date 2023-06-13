import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await signup(email, password);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "yellow",
        padding: "10px",
      }}
    >
      <h3>Sign Up</h3>
      <label>Email:</label>
      <input
        value={email}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label style={{ marginTop: "10px" }}>Password:</label>
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{ marginTop: "10px" }} disabled={isLoading}>
        Sign Up
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default SignUp;
