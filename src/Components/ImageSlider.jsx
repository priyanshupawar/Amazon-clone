import React from 'react'
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./SlidingImage.css";



const Imageslider = ({ slides }) => {
    const [currentind, setIndex] = useState(0)


    const goprevious = (() => {
        const firstind = currentind === 0
        const newind = firstind ? slides.length - 1 : currentind - 1
        setIndex(newind)
    })

    const gotonext = (() => {
        const firstind = currentind === slides.length - 1
        const newind = firstind ? 0 : currentind + 1
        setIndex(newind)
    })
    return (
        <div className='slider1'>
           

        <div className="imagebtncontainer">
            <button className="sliderbtn" onClick={goprevious}><ArrowBackIosNewIcon /></button>
            <button className="sliderbtn"  onClick={gotonext}> <ArrowForwardIosIcon /></button>

        </div>
           
            <div className='slidermain' style={{ backgroundImage: `url(${slides[currentind].url})` }}></div>
           
        </div>
    )
}

export default Imageslider