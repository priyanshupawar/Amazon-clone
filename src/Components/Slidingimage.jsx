import React from 'react';
import Imageslider from './ImageSlider';
import "./SlidingImage.css";
const slides=[
    {url:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61fL22Hw7QL._SX3000_.jpg",title:"img1"},
    {url:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61s5QLgMYGL._SX3000_.jpg",title:"img2"},
    {url:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51O45Sl0WLL._SX3000_.jpg",title:"img3"},
    {url:"hhttps://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ovs76vmtL._SX3000_.jpg",title:"img4"},
    {url:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51ovs76vmtL._SX3000_.jpg",title:"img5"},
  ];


const Slidingimage = () => { 
    
    
  return (
    <div  style={{width:"100%",height:"600px",margin:"2px 0px"}} ><Imageslider slides={slides} /></div>
  )
}

export default Slidingimage