import React from "react";
import Cards from "../../Component/cards/Card";
import "./Product.css";
import data from "./../../Data/Product.json";
import Navbar from "../../Component/Home/Navbar/Navbar";
// import Footer from "../../Component/Home/Footer/Footer";
import CatList from "../../Component/Product/CatList";
// import { Cart } from "../AddCart/Cart";

function Product() {


  return (
    <>
      <Navbar className="pro-nav" />
      {/* <Cart cart={cart} setCart={setCart} /> */}

      <div className="pro-main">
        <div className="pro-cat">


          <form action="" className="pro-form">

            <label className="pro-cat-p pro-cat-p-main">● Sort</label>
            <br />
            {/* <select name="sort" id="" className="pro-select"> */}
            {/* </select> */}
            {/* <input type="checkbox" value="Sort">Sort</input> */}
            <input type="checkbox" value="A-Z" className="pro-form-input"  />A-Z
            <input type="checkbox" value="Z-A" className="pro-form-input"  />Z-A

            <br /><br />

            <label className="pro-cat-p">● Category</label>
            <br />
            {/* <select name="Price" id="" className="pro-select"> */}
            {/* <option value="Select Price">Select Rating</option> */}
            <input type="checkbox" value="dinning table" className="pro-form-input" />dinning table
            <input type="checkbox" value="trolley" className="pro-form-input"  />trolley
            <input type="checkbox" value="chair" className="pro-form-input" />chair
            <input type="checkbox" value="Bed" className="pro-form-input" />Bed
            {/* <input type="checkbox" value="3"/>3                 
              <input type="checkbox" value="3.5"/>3.5
              <input type="checkbox" value="4"/>4
              <input type="checkbox" value="4.5"/>4.5
              <input type="checkbox" value="5"/>5 */}
            {/* </select> */}


            <br /><br />
            <label className="pro-cat-p">● Color</label><br />
            {/* <select name="color" id="" className="pro-select"> */}
            {/* <input type="checkbox" value="Select color">Select Color */}
            <input type="checkbox" value="black" className="pro-form-input" />Black
            <input type="checkbox" value="gray" className="pro-form-input" />Gray
            <input type="checkbox" value="white" className="pro-form-input" />White
            <input type="checkbox" value="brown" className="pro-form-input" />Brown
            {/* </select> */}


            <br /><br />
            <label className="pro-cat-p">● Price</label><br />
            {/* <select name="Price" id="" className="pro-select"> */}
            {/* <input type="checkbox" value="Select Price">Select Price</input> */}
            <input type="checkbox" value="0-999" className="pro-form-input" />0-999
            <input type="checkbox" value="1000-2999" className="pro-form-input" />1000-2999 <br />
            <input type="checkbox" value="3000-9999" className="pro-form-input" />3000-9999
            <input type="checkbox" value="10000" className="pro-form-input" />10000+
            {/* </select> */}


            <br /><br />
            <p className="pro-cat-p">● Customer rating</p>
            <br />
            {/* <select name="Price" id="" className="pro-select">
            <option value="Select Price">Select Rating</option> */}
            <input type="checkbox" value="1" className="pro-form-input" />1
            <input type="checkbox" value="1.5" className="pro-form-input" />1.5
            <input type="checkbox" value="2" className="pro-form-input" />2
            <input type="checkbox" value="2.5" className="pro-form-input" />2.5
            <input type="checkbox" value="3" className="pro-form-input" />3
            <input type="checkbox" value="3.5" className="pro-form-input" />3.5
            <input type="checkbox" value="4" className="pro-form-input" />4
            <input type="checkbox" value="4.5" className="pro-form-input" />4.5
            <input type="checkbox" value="5" className="pro-form-input" />5
            {/* </select> */}
          </form>




        </div>

        <div className="pro">
          <CatList />


          <div className="pro-card">
            {data.map((item) => (
              <Cards
                id={item.id}
                src1={item.src1}
                src2={item.src2}
                title={item.title}
                info={item.info}
                price={item.price}
                review={item.review}
                review2={item.review2}
                className="pro-cards"
                
              />
            ))}
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default Product;
