import React from 'react';
import  { useEffect, useState } from 'react';

import styles from "../Styling/Home.module.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { todaydeals } from "./todaydeals.js";

import Slidingimage from "../Components/Slidingimage";



const Home = () => {
    // console.log(styles,"carsoul")
    //console.log(todaydeals, "todaydeals");
    const imgitem12 = document.querySelectorAll(".hihi");
    // console.log(imgitem12.length - 1, "imgitem")
    let startslider = 0;
    let endslider = (imgitem12.length - 1) * 100;
    const slideleft = () => {
        console.log("leftbtn")


    }
    const slideright = () => {
        console.log("rightbtn")
        if (startslider >= -endslider + 100) {
            startslider = startslider - 100;

        }


        // console.log(startslider, "startslider")
        console.log(imgitem12, "123")
        imgitem12.forEach(el => {
            console.log(el, "el")

            el.style.transform = `translateX(${startslider}%)`;
        })



    }
    const [product456, setproduct456] = useState("")
    const [todaydealleft, settodaydealleft] = useState("")
    //document.querySelector(`.${styles.scrollValue}`)
    useEffect(() => {
        setproduct456(document.querySelectorAll(`.${styles.todaydealsproductitem}`))

    }, [])

    console.log(product456, "setproduct4567979")
    let todaydealproductlist = document.querySelector(`.${styles.todaydealsproductlist}`)
    //console.log(todaydealproductlist, "todaydeals0000000")
    let lengthtodaydeal = todaydeals.length;
    console.log(lengthtodaydeal, "length")
    for (let i = 0; i < lengthtodaydeal; i++) {
        // console.log(todaydeals[i],"checktodaydeals")    

    }

    const [start12, setstart12] = useState(0)
    console.log(start12, "start12")

    const todaydealslideright = () => {
        setstart12((prev) => prev + 150)
        // start12+=100
        //  settodaydealleft(document.querySelectorAll(`.${styles.todaydealsproductitem}`))
        product456.forEach(el => {
            console.log(el, "elelelelleleelel")
            el.style.transform = `translateX(${start12}%)`;
        })

    }


    const todaydealslideleft = () => {
        setstart12((prev) => prev - 150)

        // start12-=100


        product456.forEach(el => {
            console.log(el, "elelelelleleelel")
            el.style.transform = `translateX(${start12}%)`;
        })


        //  settodaydealleft(document.querySelectorAll(`.${styles.todaydealsproductitem}`))



    }




    console.log(todaydealleft, "checkleft");

    let startprod = 0;


    const [style123, setstyle123] = useState("");





    return (
        <div style={{ border: "0px solid red", marginBottom: "-300px" }}>
        <div style={{ border: "0px solid green" }} className={`${styles.imagecontainer}`} >
            <div className={styles.imagelist}>


                <div className="hihi">
                    <Slidingimage />

                </div>





            </div>





        </div>

        <main style={{ border: "0px solid red", marginBottom: "-311px" }} className={styles.main}>
            <div className={styles.cardproductcontainer}>

                <div className={styles.cardproduct}>
                    <h2>Up to 60% off | Styles for men</h2>
                    <div className={styles.cardproductnestedcard}>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg" />
                            <p>Clothing</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg" />
                            <p>Footwear</p>
                        </div>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg" />
                            <p>Watches</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg" />
                            <p>Bags & Luggages</p>
                        </div>
                    </div>
                    <button className={styles.cardproductbtn}>See More</button>
                </div>
                <div className={styles.cardproduct}>
                    <h2>Pick where you left off Laptops</h2>
                    <div className={styles.cardproductnestedcard}>
                        <div className={styles.cardnested}>
                            <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61q6x-ll5FL._AC_SY135_.jpg" />
                            <p>Lenovo Ideapad</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/21JDY-Hv3wL._AC_SY135_.jpg" />
                            <p>Acer Ideapad</p>
                        </div>
                        <div className={styles.cardnested}>
                            <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51vIfiqQVAL._AC_SY135_.jpg" />
                            <p>Dell Gaming</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61Dw5Z8LzJL._AC_SY200_.jpg" />
                            <p>Sony Vaio</p>
                        </div>
                    </div>
                    <button className={styles.cardproductbtn}>See More</button>
                </div>
                <div className={styles.cardproduct}>
                    <h2>Jewellery, Luggage & more</h2>
                    <div className={styles.cardproductnestedcard}>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img23/Softlines_JWL_SH_GW_Assets/March_2023/PC_QC/AT_low_res._SY116_CB593591693_.jpg" />
                            <p>American</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img23/Softlines_JWL_SH_GW_Assets/March_2023/PC_QC/Safari_hi_res._SY116_CB593591693_.jpg" />
                            <p>Safari</p>
                        </div>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/cross-site/Gujarat_1x_122._SY116_CB616126380_.jpg" />
                            <p>Sarees</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg" />
                            <p>Bags & Luggages</p>
                        </div>
                    </div>
                    <button className={styles.cardproductbtn}>See More</button>
                </div>
                <div className={styles.cardproduct}>
                    <h2>Sign in for your best experience</h2>
                    <button className={styles.signinbtn}>Sign in securely</button>

                    <div className={styles.cardproductnestedcard}>
                        <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"></img>
                    </div>

                </div>
            </div>

            <div className={styles.cardproductcontainer}>

                <div className={styles.cardproduct}>
                    <h2>Beat the heat with Amazon Brands & more</h2>
                    <div className={styles.cardproductnestedcard}>
                        <div className={styles.cardnested}>
                            <img src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61pqjK8MdSL._AC_SR180,120_QL70_.jpg" />
                            <p>Gold Coins</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_hi-desktop-2-eemml_186x116_in-en._SY116_CB595324998_.jpg" />
                            <p>Spin mops</p>
                        </div>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_cycles_186x116_in-en._SY116_CB594956130_.jpg" />
                            <p>Cycles</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img21/AmazonBrands/GW/QC/2023/PC_QC_186X116_dressing_table._SY116_CB595327447_.jpg" />
                            <p>visit new store</p>
                        </div>
                    </div>
                    <button className={styles.cardproductbtn}>See More</button>
                </div>
                <div className={styles.cardproduct}>
                    <h2>Up to 60% off | Styles for men</h2>
                    <div className={styles.cardproductnestedcard}>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg" />
                            <p>Clothing</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg" />
                            <p>Footwear</p>
                        </div>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg" />
                            <p>Watches</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg" />
                            <p>Bags & Luggages</p>
                        </div>
                    </div>
                    <button className={styles.cardproductbtn}>See More</button>
                </div>
                <div className={styles.cardproduct}>
                    <h2>Shop from famous street markets of India</h2>
                    <div className={styles.cardproductnestedcard}>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/cross-site/delhi_1x_09._SY116_CB616126380_.jpg" />
                            <p>Delhi</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/cross-site/Maharastha_1x_678._SY116_CB616126380_.jpg" />
                            <p>Maharastra</p>
                        </div>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/cross-site/Gujarat_1x_122._SY116_CB616126380_.jpg" />
                            <p>Gujrat</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/cross-site/TN_1x_987._SY116_CB616126380_.jpg" />
                            <p>Tamil Nadu</p>
                        </div>
                    </div>
                    <button className={styles.cardproductbtn}>Explore more from local shops</button>
                </div>
                <div className={styles.cardproduct}>
                    <h2>Up to 60% off | Styles for men</h2>
                    <div className={styles.cardproductnestedcard}>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg" />
                            <p>Clothing</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg" />
                            <p>Footwear</p>
                        </div>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg" />
                            <p>Watches</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg" />
                            <p>Bags & Luggages</p>
                        </div>
                    </div>
                    <button className={styles.cardproductbtn}>See More</button>
                </div>
            </div>





            <div className={styles.todaydealscontainer}>
                <div className={styles.todaydealsheading}>
                    <h1>Todays Deals</h1>
                    <p><a href=".">See all deals</a></p>

                </div>
                <div className={styles.todaydealsproductcontainer}>
                    <div className={styles.todaydealsbtncontainer}>
                        <button className={styles.todaydealsbtn} onClick={() => { todaydealslideleft() }}>
                            <ArrowBackIosNewIcon />
                        </button>
                        <button className={styles.todaydealsbtn}>

                            <ArrowForwardIosIcon onClick={() => { todaydealslideright() }} />
                        </button>
                    </div>
                    <div className={styles.todaydealsproductlist}>



                        {todaydeals?.map((el, index) => {
                            return <div className={styles.todaydealsproductitem} key={index}>
                                <div className={styles.imagefit} style={{ width: "100%" }}>
                                    <img src={el.img}></img>
                                </div>
                                <div className={styles.discountcontainer}>
                                    <a href=".">Up to {el.discount}% off</a>
                                    <a href=".">{el.Dealofday}</a>

                                </div>
                                <p style={{ marginTop: "4px" }}>{el.desc}</p>
                            </div>
                        })}





                    </div>

                </div>

            </div>




            <div className={styles.cardproductcontainer123}>

                <div className={styles.cardproduct}>
                    <h2>Jewellery, Luggage & more</h2>
                    <div className={styles.cardproductnestedcard}>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img23/Softlines_JWL_SH_GW_Assets/March_2023/PC_QC/AT_low_res._SY116_CB593591693_.jpg" />
                            <p>American</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img23/Softlines_JWL_SH_GW_Assets/March_2023/PC_QC/Safari_hi_res._SY116_CB593591693_.jpg" />
                            <p>Safari</p>
                        </div>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/cross-site/Gujarat_1x_122._SY116_CB616126380_.jpg" />
                            <p>Sarees</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg" />
                            <p>Bags & Luggages</p>
                        </div>
                    </div>
                    <button className={styles.cardproductbtn}>See More</button>
                </div>
                <div className={styles.cardproduct}>
                    <h2>Shop from famous street markets of India</h2>
                    <div className={styles.cardproductnestedcard}>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/cross-site/delhi_1x_09._SY116_CB616126380_.jpg" />
                            <p>Delhi</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/cross-site/Maharastha_1x_678._SY116_CB616126380_.jpg" />
                            <p>Maharastra</p>
                        </div>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/cross-site/Gujarat_1x_122._SY116_CB616126380_.jpg" />
                            <p>Gujrat</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/cross-site/TN_1x_987._SY116_CB616126380_.jpg" />
                            <p>Tamil Nadu</p>
                        </div>
                    </div>
                    <button className={styles.cardproductbtn}>Explore more from local shops</button>
                </div>
                <div className={styles.cardproduct}>
                <h2>Shop from famous street markets of India</h2>
                <div className={styles.cardproductnestedcard}>
                    <div className={styles.cardnested}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/cross-site/delhi_1x_09._SY116_CB616126380_.jpg" />
                        <p>Delhi</p>
                    </div>
                    <div className={styles.cardnested}>

                        <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/cross-site/Maharastha_1x_678._SY116_CB616126380_.jpg" />
                        <p>Maharastra</p>
                    </div>
                    <div className={styles.cardnested}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/cross-site/Gujarat_1x_122._SY116_CB616126380_.jpg" />
                        <p>Gujrat</p>
                    </div>
                    <div className={styles.cardnested}>

                        <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/cross-site/TN_1x_987._SY116_CB616126380_.jpg" />
                        <p>Tamil Nadu</p>
                    </div>
                </div>
                <button className={styles.cardproductbtn}>Explore more from local shops</button>
            </div>
                <div className={styles.cardproduct}>
                    <h2>Up to 60% off | Styles for men</h2>
                    <div className={styles.cardproductnestedcard}>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg" />
                            <p>Clothing</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg" />
                            <p>Footwear</p>
                        </div>
                        <div className={styles.cardnested}>
                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg" />
                            <p>Watches</p>
                        </div>
                        <div className={styles.cardnested}>

                            <img src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg" />
                            <p>Bags & Luggages</p>
                        </div>
                    </div>
                    <button className={styles.cardproductbtn}>See More</button>
                </div>
            </div>








        </main>
    </div>



    )
}

export default Home