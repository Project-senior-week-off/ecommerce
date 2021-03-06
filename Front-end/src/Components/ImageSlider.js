import React,{useState} from "react";
import {SliderData} from "./SliderData";
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"

const ImageSlider  = ({slides}) =>{
    const [current,setCurrent] = useState(0);
    const length = slides.length;
    
    const nextSlide = ()=> {
        setCurrent(current===length-1 ? 0 : current+1)
    }
    const previousSlide = () => {
        setCurrent(current===0 ? length-1 : current -1)
    }

    
    if(!Array.isArray(slides)|| slides.length<=0) {
        return null;
    }


    return (
        <div className="slider" >
            <FaArrowAltCircleLeft className="left-arrow" onClick={nextSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={previousSlide} />
        {SliderData.map((slide,index)=>{
            return (
                    <div className={index===current ? "slide active" : "slide" } key={index} >
                        {index===current && (
                            <div>
                            <img className="image"  src={slide.image} alt="" />
                            <h1 style={{color:"white",position:"absolute",top:"8px",left:'16px'}} >Special Prices <hr/> <p>save up to 30%</p> </h1>
                            </div>
                        )}

                    </div>
                )
            })}
        </div>
    )
}

export default ImageSlider;