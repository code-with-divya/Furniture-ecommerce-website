import * as React from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
// import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import { Link } from "react-router-dom";
import "./Service.css";
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'

const data = [
    {
        src: "https://www.ikea.com/images/42/1b/421b8236769a79f928c7d613b8aedbac.png?f=xxs",
        title: "Home Delivery",
        title2: "starts @ Rs. 99",
    },
    {
        src: "https://www.ikea.com/images/e0/4f/e04f6b9804cf60e1bc261d14712a891e.png?f=xxs",
        title: "Click & collect ",
        title2: "starts @ Rs. 79",
    },
    {
        src: "https://www.ikea.com/images/2f/91/2f911496af63d4dd1a81109c1467f1d9.jpg?f=xxs",
        title: "Personal shopper",
        title2: "starts @ Rs. 1000",
    },
    {
        src: "https://www.ikea.com/images/fc/38/fc388f8dc48f9f7c97c09f7765be2678.png?f=xxs",
        title: "Interior design",
        title2: "service @ Rs. 3000",
    },
    {
        src: "https://www.ikea.com/images/75/28/7528d2b979807244feab25bfcdd42c46.jpg?f=xxs",
        title: "Measuring service",
        title2: "service @ Rs. 1000",

    },
    {
        src: "https://www.ikea.com/images/c3/bd/c3bd865123ddbd69fb80677f0d852e21.jpg?f=xxs",
        title: "Kitchen planning",
        title2: "Installation",

    },

    {
        src: "https://www.ikea.com/images/77/2b/772b6b25c9b65b2d9d1dc9946475e342.jpg?f=xxs",
        title: "Design your room",


    },
];

export default function Service() {
    return (
        <>
            
            <div className="serv">

                <Box
                    sx={{
                        marginTop: "50px",
                        // position: 'relative',
                        display: "flex",
                        margin: "auto",
                        gap: 1,
                        py: 1,
                        overflow: "auto",
                        width: 1250,
                        borderBottom: 3,
                        borderColor: "error.main",
                        scrollSnapType: "x mandatory",
                        "& > *": {
                            scrollSnapAlign: "center",
                        },
                        "::-webkit-scrollbar": { display: "none" },
                    }}
                >
                    <div className="serv-card">
                        <Link to={`/services`} className="serv-link">All Services
                        <br />
                        <br /><br /><br /><br /><br />
                        <ArrowRightCircleIcon className="h-10 w-10 ms-5 arrow font-bold cursor-pointer" aria-hidden="true" />
                        </Link>
                    </div>
                    {data.map((item) => (
                        <Card
                            orientation="horizontal"
                            size="sm"
                            key={item.title}
                            variant="outlined"
                            sx={{ display: "block" }}
                            className="serv-box"
                        >

                            <img
                                srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.src}?h=120&fit=crop&auto=format`}
                                alt={item.title}
                                sx={{ height: 200, width: 200, marginLeft: 30 }}
                                className="serv-img"
                            />

                            <div sx={{ whiteSpace: "nowrap", mx: 1 }} className="serv-p">
                                <p level="title-md" className="serv-title">
                                    {item.title}
                                </p>
                                <p level="title-md" className="serv-title">
                                    {item.title2}
                                </p>
                            </div>
                        </Card>
                    ))}
                </Box>
            </div>
        </>
    );
}
