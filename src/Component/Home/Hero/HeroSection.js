import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
// import { useState } from "react";

// const data = [
//   {
//     src: "https://new-ella-demo-11.myshopify.com/cdn/shop/files/Home-Furniture-Brand-1_220x.jpg?v=1658374693",
//     title: "Sofas",
//   },
//   {
//     src: "https://new-ella-demo-11.myshopify.com/cdn/shop/files/Home-Furniture-Brand-2_220x.jpg?v=1658374702",
//     title: "Sectional Sofas",
//   },
//   {
//     src: "https://new-ella-demo-11.myshopify.com/cdn/shop/files/Home-Furniture-Brand-3_220x.jpg?v=1658374718",
//     title: "Chairs",
//   },
// ];

function HeroSection() {
    //   const [hero, setHero] = useState();

    //   const heros=setInterval(
    //     {

    //             data.map((item) => (
    //             setHero(item.img)
    //         ))
    //     }
    //     ,1000
    //   )

    return (
        <>
            <section className="hero-sec">
                <div className="hero-block">
                    <p className="hero-para">Mid-Season Sale</p>
                    <h1 className="hero-head">Huge Saving on
                        Sofas & Dining Sets</h1>
                    <p className="hero-para">Save up to 60% off on selected items.</p>
                    <Link to={`/product`} className="hero-link">Shop Now</Link>
                </div>
            </section>
        </>
    );
}

export default HeroSection;
