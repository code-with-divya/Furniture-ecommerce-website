import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
// import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import "./Explore.css";

const data = [
    {
        src: "https://www.ikea.com/ext/ingkadam/m/3aa319771247890b/original/PH171699-crop001.jpg?f=xxs",
        title: "Beds",
    },
    {
        src: "https://www.ikea.com/images/8f/b2/8fb2cf91c620ca9479e35cf6ecb1c321.png?f=xxs",
        title: "Wardrobe",
    },
    {
        src: "https://www.ikea.com/images/19/56/1956032b508c307666269622b4bc1e41.png?f=xxs",
        title: "Chest of Drawers",
    },
    {
        src: "https://www.ikea.com/images/3c/42/3c42f53cc5d1a2d67df7cf450a470378.png?f=xxs",
        title: "Furniture Sets",
    },
    {
        src: "https://www.ikea.com/images/3c/42/3c42f53cc5d1a2d67df7cf450a470378.png?f=xxs",
        title: "Furniture Sets",
    },
    {
        src: "https://www.ikea.com/images/3c/42/3c42f53cc5d1a2d67df7cf450a470378.png?f=xxs",
        title: "Furniture Sets",
    },
    {
        src: "https://www.ikea.com/images/3c/42/3c42f53cc5d1a2d67df7cf450a470378.png?f=xxs",
        title: "Furniture Sets",
    },
    
];

export default function Explore() {
    return (
        <>
            
            <div className="ex">
                {/* <div className="cat-card">
          <h1 className="cat-head">Popular Category</h1>
          <p className="cat-p">Lorem ipsum dolor sit amet consectetur.</p>
        </div> */}
                <Box
                    sx={{
                        marginTop: "50px",
                        // position: 'relative',
                        display: "flex",
                        margin: "auto",
                        gap: 1,
                        py: 1,
                        overflow: "auto",
                        width: 1300,
                        // borderBottom: 3,
                        borderColor: "error.main",
                        scrollSnapType: "x mandatory",
                        "& > *": {
                            scrollSnapAlign: "center",
                        },
                        "::-webkit-scrollbar": { display: "none" },
                    }}
                >
                    {data.map((item) => (
                        <Card
                            orientation="horizontal"
                            size="lg"
                            key={item.title}
                            variant="outlined"
                            sx={{ display: "block" }}
                            className="ex-box"
                        >
                            
                                <img
                                    srcSet={item.src}
                                    src={item.src}
                                    alt={item.title}
                                    
                                    className="ex-img"

                                />

                          
                            <div sx={{ whiteSpace: "wrap", mx: 1 }} className="ex-p">
                                <p level="title-md" className="ex-title">
                                    {item.title}
                                </p>
                            </div>
                        </Card>
                    ))}
                </Box>
            </div>
        </>
    );
}
