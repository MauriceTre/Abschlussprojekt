import React, { useState } from "react";
import axios from "axios";
import "../../styles/SignInPage.css";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log("User signed in:", response.data);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="signin-page">
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
