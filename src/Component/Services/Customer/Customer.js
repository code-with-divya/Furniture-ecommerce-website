import * as React from "react";
// import AspectRatio from "@mui/joy/AspectRatio";
// import Box from "@mui/joy/Box";
// import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import "./Customer.css";

const data = [
  {
    src: "https://www.ikea.com/ext/ingkadam/m/6b1de71d2067e4/webimage-PH188791-crop001.png?f=xxs",
    title: "Track your order",
  },
  {
    src: "https://www.ikea.com/ext/ingkadam/m/5eff6dba17cd5e0a/webimage-PH189426-crop001.png?f=xxs",
    title: "Services",
  },
  {
    src: "https://www.ikea.com/ext/ingkadam/m/359516937fc35a0b/webimage-PH188794-crop001.png?f=xxs",
    title: "How to shop",
  },
  {
    src: "https://www.ikea.com/ext/ingkadam/m/7cb5eb6036568fe0/webimage-PH188796-crop001.png?f=xxs",
    title: "FAQ",
  },
  {
    src: "https://www.ikea.com/ext/ingkadam/m/653823675e79d329/webimage-PH186303-crop001.png?f=xxs",
    title: "We can help you shop",
  },
  {
    src: "https://www.ikea.com/ext/ingkadam/m/7a75be96e1f166f4/webimage-PH188793-crop001.png?f=xxs",
    title: "Product information",
  },

  {
    src: "https://www.ikea.com/ext/ingkadam/m/5452a1af43063195/webimage-PH188795-crop001.png?f=xxs",
    title: "Payments",
  },
  {
    src: "https://www.ikea.com/ext/ingkadam/m/21dae79cdba26758/webimage-PH188797-crop001.png?f=xxs",
    title: "Contact us",
  },
];

export default function Customer() {
  return (
    <> 
      <h1 className='cust-head '>Customer service</h1>
      <div className="cust">
        {data.map((item) => (
          <Card
            orientation="horizontal"
            size="sm"
            key={item.title}
            variant="outlined"
            sx={{ display: "block" }}
            className="cust-box"
          >
            <img
              srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.src}?h=120&fit=crop&auto=format`}
              alt={item.title}
              
              className="cust-img"
            />

            <div sx={{ whiteSpace: "wrap", mx: 1 }} className="cust-p">
              <p level="title-md" className="cust-title">
                {item.title}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
