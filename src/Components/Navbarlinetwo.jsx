import React, { useEffect, useState } from 'react';
import "./Navbarlinetwo.css";
import DehazeIcon from '@mui/icons-material/Dehaze';
import Shoes from '../Pages/Shoes';
import WomenShoes from '../Pages/WomenShoes';



const Navbarlinetwo = () => {
    const [authclass, setauthclass] = useState(true)
    const [style, setstyle] = useState("cont123");  





    const sidebarclick = () => {
        setstyle("open123")

    }




    const closesidebar = () => {
        // document.getElementsByClassName("sidebar").style.display="none";
        // setstyle("cont123")

        setstyle("cont123")


    }
    // console.log(authclass,"authclass")
    return (
        <div>

            <div className={style}>
                <button onClick={closesidebar}>close</button>
                <br />
                <a>link1</a>
                <br />
                <a>link2</a>
                <br />
                <a>link3</a>


            </div>



            <div className='nav'>
                <div className="containernav">


                    <ul>
                        <li style={{ display: "flex", gap: "4px", marginTop: "4px" }} className='borderwhite' onClick={sidebarclick}>
                            <span className='opennavslider'>
                                <div style={{ marginTop: "4px" }}>


                                    <DehazeIcon />


                                </div>




                            </span>
                            <span style={{ marginTop: "4px" }}>  All</span>
                        </li>
                        <li className='borderwhite'>
                            <a href="/shoes">   Mens</a>
                        </li>
                        <li className='borderwhite'>
                            <a href="/womenShoes">  Womens</a>
                        </li>
                        <li className='borderwhite'>
                            <a href="."> Mobiles</a>
                        </li>
                        <li className='borderwhite'>
                            <a href="."> Customer Service </a>
                        </li>
                        <li className='borderwhite'>
                            <a href="."> Electronics </a>
                        </li>
                        <li className='borderwhite'>
                            <a href=".">  Today's Deals</a>
                        </li>
                        <li className='borderwhite'>
                            <a href=".">Best Sellers</a>
                        </li>
                        <li className='borderwhite primeimagehover'>
                            <a href="." > {"Prime>"}  </a>

                            <div className='primeimage'>
                                <img style={{ width: "93%", height: "auto", padding: "10px 10px", margin: "auto", justifyContent: "center", border: "0px solid red" }} src="https://cdn.images.express.co.uk/img/dynamic/59/590x/Amazon-Prime-Day-2018-989111.jpg?r=1532508857780"></img>

                            </div>
                        </li>

                    </ul>



                </div>

            </div>



        </div>


    )
}

export default Navbarlinetwo