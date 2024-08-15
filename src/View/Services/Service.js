import React from "react";
import Navbar from "../../Component/Home/Navbar/Navbar";
import Footer from "../../Component/Home/Footer/Footer";
import Customer from "../../Component/Services/Customer/Customer";
import "./Service.css"
import Help1 from "../../Component/Services/Help/Help1";
import Help2 from "../../Component/Services/Help/Help2";

function Service() {
  return (
    <>
      <Navbar />

      <h1 className='head '>Services</h1>
      <p className="para">At Jack's Furniture, you can do everything yourself. From collecting all your products in store, to transporting and assembling <br /> them. But of course, you don't have to. Jack's Furniture offers a wide range of useful services to help you purchase, transport and <br /> assemble your products. </p>

      <Customer />

      <h1 className='head '>Helping you help yourself </h1>
      <p className="para">Looking to check the status of your order? Want to return a product or order a spare part? We have convenient self <br /> service options which will let you do just that! </p>

      <Help1/>
      <Help2/>
      <Footer />
    </>
  );
}

export default Service;
