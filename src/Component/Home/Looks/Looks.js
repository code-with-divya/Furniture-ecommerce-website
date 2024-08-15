import * as React from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
// import Typography from "@mui/joy/Typography";
// import Card from "@mui/joy/Card";
import "./Looks.css";

const data = [
    {
        src: "https://www.ikea.com/ext/ingkadam/m/d117b1d170352c1/original/UGC100009703.jpg?f=s",
    },
    {
        src: "https://www.ikea.com/ext/ingkadam/m/4d83c4e5ec957d95/original/UGC100004177.jpg?f=s",

    },
    {
        src: "https://www.ikea.com/ext/ingkadam/m/26eee84cd6534323/original/UGC100015747.jpg?f=s",

    },
    {
        src: "https://www.ikea.com/ext/ingkadam/m/27d969b0b2f7da1/original/UGC100015739.jpg?f=s",
    },
    {
        src: "https://www.ikea.com/ext/ingkadam/m/45d4fff6b7a9d372/original/UGC100014465.jpg?f=s",

    },
    {
        src: "https://www.ikea.com/ext/ingkadam/m/4d4faecc93af3081/original/UGC100004104.jpg?f=s",

    },

    {
        src: "https://www.ikea.com/ext/ingkadam/m/3e4be204a38cbc1a/original/UGC100001706.jpg?f=s",

    },

    {
        src: "https://www.ikea.com/ext/ingkadam/m/6ddb09348aad71ce/original/UGC100018342.jpg?f=s",

    },
    {
        src: "https://www.ikea.com/ext/ingkadam/m/30ca88fca51b324c/original/UGC100001470.jpg?f=s",

    },
    {
        src: "https://www.ikea.com/ext/ingkadam/m/b2b5a0846b86bf7/original/UGC100001665.jpg?f=s",

    },
    {
        src: "https://www.ikea.com/ext/ingkadam/m/20e70b982c1dec5e/original/UGC100015965.jpg?f=s",

    },



];

export default function Looks() {
    return (
        <>
            
            <div className="look">

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
                    className="look-box"
                >
                    {data.map((item) => (



                        <img
                            srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.src}?h=120&fit=crop&auto=format`}
                            alt={item.title}

                            className="look-img"
                        />



                    ))}
                </Box>
            </div>
        </>
    );
}
