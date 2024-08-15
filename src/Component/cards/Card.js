import * as React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Cards({
  id,
  src1,
  src2,
  title,
  info,
  price,
  review,
  review2,
  handleClick
}) {
  return (
    <>
      <div className="car">
        <Link to={`/product/${id}`}>
          <div
            orientation="horizontal"
            size="sm"
            key={title}
            variant="outlined"
            sx={{ display: "block" }}
            className="car-box"
          >
            <img
              srcSet={src1}
              src={src1}
              alt={title}
              sx={{ height: 400, width: 400, marginLeft: 30 }}
              className="car-img"
            />
            <img
              srcSet={src2}
              src={src2}
              alt={title}
              sx={{ height: 400, width: 400, marginLeft: 30 }}
              className="car-img2"
            />

            <div sx={{ whiteSpace: "wrap", mx: 1 }} className="car-para">
              <h1 className="car-h">{title}</h1>
              <p className="car-p">{info}</p>
              <p className="car-price">
                ₨. <span className="car-span-price">{price}</span>
              </p>
              <p className="car-review">
                <span className="car-span-review">{review}</span>⭐ &nbsp;{" "}
                <span className="car-span-review">{review2}</span>
              </p>

              <Link to={`/addToCart`}>
                <button className="car-button">Add To Cart</button>
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
