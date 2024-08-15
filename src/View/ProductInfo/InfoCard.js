import React, { useState } from "react";
import "./InfoCard.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import data from "./../../Data/Product.json";
import { ErrorRounded } from "@mui/icons-material";
import Navbar from "../../Component/Home/Navbar/Navbar";
import Footer from "../../Component/Home/Footer/Footer";

function InfoCard() {
  const [img, setImg] = useState(" ");
  const { id } = useParams();

  // const Change = () =>{ setImg("hii")};

  return (
    <>
      <Navbar />

      {

        data.map(

          (item)=>{

            if(item.id == id){
              return(

                <div className="info-main">
              
                  <>

                    <div className="info-img">
                      <div className="info-imgs">
                        <img
                          src={item.src1}
                          alt=""
                          className="info-sm-img"
                          onClick={() => {
                            setImg(item.src1);
                          }}
                        />

                        <img
                          src={item.src2}
                          alt=""
                          className="info-sm-img"
                          onClick={() => {
                            setImg(item.src2);
                          }}
                        />

                        <img
                          src={item.src3}
                          alt=""
                          className="info-sm-img"
                          onClick={() => {
                            setImg(item.src3);
                          }}
                        />
                      </div>
                      <img src={img} alt="" className="info-main-img" />
                    </div>

                    <div className="info-block">
                      <h1 className="info-h">{item.title}</h1>
                      <p className="info-p">{item.info}</p>
                      <p className="info-price">
                        ₨. <span className="info-span-price">{item.price}</span>
                      </p>
                      <p className="info-tax">Price incl. of all taxes</p>
                      <p className="info-review">
                        <span className="info-span-review">{item.review}</span>
                        ⭐ &nbsp;{" "}
                        <span className="info-span-review">{item.review2}</span>
                      </p>

                      <h3 className="info-emi-h">
                        EMI starts at ₹435.00/month
                      </h3>
                      <p className="info-emi-p">
                        <ErrorRounded /> To prevent surface scratches and the
                        sound of chair legs scraping on the floor, complete
                        &nbsp; &nbsp; &nbsp; &nbsp; with FIXA self-adhesive
                        floor protectors, sold separately.
                      </p>

                      <Link to={`/addToCart`}>
                        <button className="info-button">Add To Cart</button>
                      </Link>
                    </div>
                  </>
               
              </div>
              )
            }

          }
        )
      }

      
      <Footer />
    </>
  );
}

export default InfoCard;
