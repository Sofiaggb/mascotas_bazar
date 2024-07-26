import { useState } from "react";
import { banner1, banner2, banner3 } from "../assets/index";
import { FaArrowRight ,  FaArrowLeft } from "react-icons/fa";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide( currentSlide === 0 ? 2 : (prev) => prev - 1);
    }
    const nextSlide = () => {
        setCurrentSlide( currentSlide === 2 ? 0 : (prev) => prev + 1);
    }
  return (
    <div className="w-full h-auto ">
      <div className=" w-screen  relative">
        <div style={{transform:`translateX(-${currentSlide * 100}vw)`}}
        className="w-[300vw] h-full flex transition-transform duration-1000">
            <img className=" w-screen h-full object-cover" src={banner1} alt="banner" />
            <img className=" w-screen h-full object-cover" src={banner2} alt="banner" />
            <img className=" w-screen h-full object-cover" src={banner3} alt="banner" />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
            <div onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center
            hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                <FaArrowLeft />
            </div>
            <div onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center
            hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                <FaArrowRight />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
