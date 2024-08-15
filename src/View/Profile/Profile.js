// src/ProfilePage.js
import React from "react";
import "./Profile.css";
import Navbar from "../../Component/Home/Navbar/Navbar";
import Footer from "../../Component/Home/Footer/Footer";

const Profile = () => {
  const first = localStorage.getItem("fname");
  const last = localStorage.getItem("lname");
  const username = localStorage.getItem("user");
  const emailed = localStorage.getItem("email");
  const phoned = localStorage.getItem("phone");
  const add = localStorage.getItem("address");
  const ct = localStorage.getItem("city");
  const stated = localStorage.getItem("state");
  const pined = localStorage.getItem("pin");

  return (
    <>
    <Navbar/>
      <div className="profile-container">
        <div className="profile-card">
          <img src="https://tse4.mm.bing.net/th?id=OIP.YPXcDq4N166DQYSAGfJV7AAAAA&pid=Api&P=0&h=180" alt="" className="profile-pic" />
          <h1 className="profile-info-head">Personal Information</h1>

          <p className="profile-info-p profile-info-pp">
            Name:
            <span className="profile-info-span">
              {first} {last}
            </span>
          </p>
          <p className="profile-info-p">
            User Name:<span className="profile-info-span">{username}</span>
          </p>
          <p className="profile-info-p">
            Email ID:<span className="profile-info-span">{emailed}</span>
          </p>
          <p className="profile-info-p">
            Phone No:<span className="profile-info-span">{phoned}</span>
          </p>
          <p className="profile-info-p">
            Street Address:
            <span className="profile-info-span">
              {add}, {ct}, {stated}-{pined}
            </span>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Profile;
