import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  // const [pic, setPic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Save data to local storage
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("user", user);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("address", address);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
    localStorage.setItem("pin", pin);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmPassword", confirmPassword);

    // Optionally clear form fields
    setFname("");
    setLname("");
    setUser("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCity("");
    setState("");
    setPin("");
    setPassword("");
    setConfirmPassword("");
    setErrorMessage("");

    // Redirect or show success message
    alert("Signup successful!");
  };

  return (
    <section className="sign-up-sec">
      <div className="sign-up-box">
      <h1 className="sign-up-h1">Sign In</h1>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <form action onSubmit={handleFormSubmit} style={{ margin: "20px" }}>
          <div className="sign-up-main ">
            <div className="sign-up-form">
              <label htmlFor className="sign-up-label">
                First Name
              </label>
              <br />
              <input
                type="text"
                id="fname"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                required
                className="sign-up-input"
              />
            </div>
            <div className="sign-up-form">
              <label htmlFor className="sign-up-label">
                Last Name
              </label>
              <br />
              <input
                type="text"
                id="lname"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                required
                className="sign-up-input"
              />
            </div>
            <div className="sign-up-form">
              <label htmlFor className="sign-up-label">
                User Name
              </label>
              <br />
              <input
                type="text"
                id="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                className="sign-up-input"
              />
            </div>
          </div>
          <div className="sign-up-form">
            <label htmlFor className="sign-up-label">
              Email ID
            </label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="sign-up-input"
            />
          </div>
          <div className="sign-up-form">
            <label htmlFor className="sign-up-label">
              Phone No
            </label>
            <br />
            <input
              type="number"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="sign-up-input"
            />
          </div>
          <div className="sign-up-form">
            <label htmlFor className="sign-up-label">
              Street Address
            </label>
            <br />
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="sign-up-input"
            />
          </div>
          <div className="sign-up-main ">
            <div className="sign-up-form">
              <label htmlFor className="sign-up-label">
                City
              </label>
              <br />
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="sign-up-input"
              />
            </div>
            <div className="sign-up-form">
              <label htmlFor className="sign-up-label">
                State
              </label>
              <br />
              <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                className="sign-up-input"
              />
            </div>
            <div className="sign-up-form">
              <label htmlFor className="sign-up-label">
                Pin Code
              </label>
              <br />
              <input
                type="text"
                id="pin"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                required
                className="sign-up-input"
              />
            </div>
          </div>
          {/* <div className="sign-up-form pic">
            <label htmlFor className="sign-up-label">
              Patient Photo
            </label>
            <br />
            <input
              type="file"
              id="pic"
              value={pic}
              onChange={(e) => setPic(e.target.value)}
              required
              className="sign-up-input"
            />
          </div> */}
          <div className="sign-up-main ">
            <div className="sign-up-form">
              <label htmlFor className="sign-up-label">
                Password
              </label>
              <br />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="sign-up-input"
              />
            </div>
            <div className="sign-up-form">
              <label htmlFor className="sign-up-label">
                Confirm Password
              </label>
              <br />
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="sign-up-input"
              />
            </div>
          </div>

          <input type="submit" defaultValue="Submit" className="submit" />
          <Link to="/profile"></Link>

          <p>
            Already have account &nbsp;
            <Link to={`/signIn`} className="link">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
