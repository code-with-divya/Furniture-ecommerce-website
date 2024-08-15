// src/AboutPage.js
import React from "react";
import "./About.css";
import { useEffect } from "react";
import Footer from "../../Component/Home/Footer/Footer";
import Navbar from "../../Component/Home/Navbar/Navbar";
// import { useSpring, animated } from 'react-spring';

const About = () => {
    //   const missionProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
    //   const visionProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 });
    //   const aboutProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 600 });

    useEffect(() => {
        document.title = "About Us - E-Commerce";
    }, []);

    return (
        <>
            <Navbar />
            <div className="ab-back">
                <h1 className="ab-h1">About Us</h1>
            </div>


            <div className="ab-section1">
                <h1 className="head ab-h2">About</h1>
                <p className="ab-p">
                    ● We are an online store committed to bringing you the best in
                    fashion, electronics, and more.
                </p>
                <p className="ab-p">
                    ● Founded in 2020, we have grown to serve thousands of customers
                    across the globe.
                </p>
                <p className="ab-p">● Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nostrum saepe cum cumque blanditiis obcaecati autem inventore ea cupiditate aspernatur eaque asperiores, tenetur distinctio nulla ratione dignissimos tempore ipsam, modi quidem repellendus voluptates repudiandae labore illo? Harum ratione accusantium laborum neque accusamus magnam quia dolorum aspernatur totam minima? Enim, iste?
                </p>
                <p className="ab-p">● Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laborum tempora eligendi omnis. Impedit optio explicabo cum, libero excepturi mollitia!</p>
            </div>

            <div className="about-container">




                {/* <div className="content"> */}
                <div className="ab-section2">
                    <h1 className="ab-h3">Our Mission</h1>
                    <p className="ab-sec-p">
                        ● Our mission is to provide the best products with the highest
                        quality service.
                    </p>
                    <p className="ab-sec-p">
                        ● Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sequi quae corporis eum voluptate consequuntur? Modi maxime dolor non neque ducimus, repellat ratione amet eveniet quos reprehenderit possimus architecto eos.
                    </p>
                    <p className="ab-sec-p">
                        ●Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, eius?
                    </p>
                </div>
                <div className="ab-section3">
                    <h1 className="ab-h3">Our Vision</h1>
                    <p className="ab-sec-p">
                    ● Our vision is to be the leading e-commerce store known for
                        innovation and customer satisfaction.
                    </p>
                    {/* <p className="ab-sec-p">
                    ●Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veniam.
                    </p> */}

                    <p className="ab-sec-p">
                    ● Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vero dicta commodi ipsam facere repellendus aspernatur illo magni voluptates quo hic, sit nihil amet laboriosam accusantium pariatur. Dolore, voluptates itaque!
                    </p>
                </div>

            </div>
            {/* </div> */}


            <Footer />
        </>
    );
};

export default About;
