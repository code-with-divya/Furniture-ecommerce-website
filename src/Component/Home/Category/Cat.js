import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
// import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import "./Cat.css";

const data = [
  {
    src: "https://new-ella-demo-11.myshopify.com/cdn/shop/files/Home-Furniture-Brand-1_220x.jpg?v=1658374693",
    title: "Sofas",
  },
  {
    src: "https://new-ella-demo-11.myshopify.com/cdn/shop/files/Home-Furniture-Brand-2_220x.jpg?v=1658374702",
    title: "Sectional Sofas",
  },
  {
    src: "https://new-ella-demo-11.myshopify.com/cdn/shop/files/Home-Furniture-Brand-3_220x.jpg?v=1658374718",
    title: "Chairs",
  },
  {
    src: "https://new-ella-demo-11.myshopify.com/cdn/shop/files/Home-Furniture-Brand-4_220x.jpg?v=1658374731",
    title: "Beds",
  },
  {
    src: "https://new-ella-demo-11.myshopify.com/cdn/shop/files/Home-Furniture-Brand-5_220x.jpg?v=1658374740",
    title: "TV Cabinet",
  },
  {
    src: "https://new-ella-demo-11.myshopify.com/cdn/shop/files/Home-Furniture-Brand-3_220x.jpg?v=1658374718",
    title: "Chairs",
  },

  {
    src: "https://new-ella-demo-11.myshopify.com/cdn/shop/files/Home-Furniture-Brand-1_220x.jpg?v=1658374693",
    title: "Sectional Sofas",
  },
];

export default function Cat() {
  return (
    <>
      {/* <h1 className='cat-head'>Top Category →</h1> */}
      <div className="cat">
        <div className="cat-card">
          <h1 className="cat-head">Popular Category</h1>
          <p className="cat-p">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <Box
          sx={{
            marginTop: "50px",
            // position: 'relative',
            display: "flex",
            margin: "auto",
            gap: 1,
            py: 1,
            overflow: "auto",
            width: 1000,
            borderBottom: 3,
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
              size="sm"
              key={item.title}
              variant="outlined"
              sx={{ display: "block" }}
              className="cat-box"
            >
              <AspectRatio
                objectFit="cover"
                sx={{
                  minWidth: 180,
                  minHeight: 150,
                  borderColor: "error.main",
                }}
              >
                <img
                  srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.src}?h=120&fit=crop&auto=format`}
                  alt={item.title}
                  sx={{ height: 250, width: 250, marginLeft: 30 }}
                />
              </AspectRatio>
              <div sx={{ whiteSpace: "wrap", mx: 1 }} className="cat-p">
                <p level="title-md" className="cat-title">
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
