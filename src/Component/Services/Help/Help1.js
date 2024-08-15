import React from 'react';
import "./Help1.css"


const help1 = [
    {
        img: "",
        head: "Return or exchange products",
        para: "Find out all about how to exchange or return your products."
    },

    {
        img: "",
        head: "Click & Collect",
        para: "Order your favorite products online and collect it later"
    },
    {
        img: "",
        head: "Missing a part",
        para: "Order fittings and spare parts"
    },
    {
        img: "",
        head: "Stock availability",
        para: "Plan your shopping before buying"
    }
];



function Help1() {

    return (
        <div className='h1-div'>

            {
                help1.map((item) => (
                    <div className="h1-box">
                        <h2 className='h1-h1'>{item.head}</h2>
                        <p className='h1-p1'>{item.para}</p>
                        <p className='h1-p2'>Read More</p>
                    </div>
                ))

            }

            


        </div>
    );
}

export default Help1;