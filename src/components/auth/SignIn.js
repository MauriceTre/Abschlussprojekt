import React, { useState } from "react";
import "../../styles/SignInPage.css"; 

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    //  die Sign-In-Logik einfügen,
    console.log("Email:", email);
    console.log("Password:", password);
    
  };

  return (
    <div className="sign-in-container">
      <h1>Sign In</h1>
      <form className="sign-in-form" onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
