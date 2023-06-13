import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
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
      <h3>Log In</h3>
      <label> Email: </label>
      <input
        value={email}
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label style={{ marginTop: "10px" }}> Password: </label>
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{ marginTop: "10px" }} disabled={isLoading}>
        Login
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default Login;
