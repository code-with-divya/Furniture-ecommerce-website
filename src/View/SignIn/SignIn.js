import React, {useState} from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

function SignIn() {
  const [emaill, setEmaill] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Retrieve stored email and password from local storage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    // Validate credentials
    if (emaill === storedEmail && password === storedPassword) {
      // Authentication successful
      alert("Signin successful!");
      // Optionally redirect to another page or set authenticated state
    } else {
      // Authentication failed 
      setErrorMessage("Invalid email or password");
    }

    // Clear password field for security
    setPassword("");
  };

  return (
    <>
      <section className="sign-in-sec">
        <div className="sign-in-box">
          <h2 className="sign-in-h1">Sign In</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form action onSubmit={handleFormSubmit}>
            <div className="sign-in-form">
              <label htmlFor className="sign-in-label">
                Email ID
              </label>
              <br />
              <input
                type="email"
                id="emaill"
                value={emaill}
                onChange={(e) => setEmaill(e.target.value)}
                required
                className="sign-in-input"
              />
            </div>
            <div className="sign-in-form">
              <label htmlFor className="sign-in-label">
                Password
              </label>
              <br />
              <input
                type="password"
                id="pass1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="sign-in-input"
              />
            </div>
            <input
              type="submit"
              defaultValue="Submit"
              className="sub"
              onclick="sub()"
            />
            <p>
              Create New Account &nbsp;
              <Link to={`/signUp`} className="link">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default SignIn;
