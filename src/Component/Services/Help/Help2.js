import React from 'react';
import "./Help2.css";

const help2 = [
    {
        img: "",
        head: "Warranty",
        para: "Jack's Furniture products comes with warranty",
        know:"Know more"
    },

    {
        img: "",
        head: "Terms and conditions",
        para: "Check all t&c's here",
        know:"Learn more"
    }
]

function Help2() {
    return (
        <div className='h2-div'>
            
            {
                help2.map((item) => (
                    <div className="h2-box">
                        <h2 className='h2-h1'>{item.head}</h2>
                        <p className='h2-p1'>{item.para}</p>
                        <p className='h2-p2'>{item.know}</p>
                    </div>
                ))

            }
            
            
        </div>
    );
}

export default Help2;