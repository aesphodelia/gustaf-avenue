import Image from "next/image";
import { useEffect, useState } from "react";


export default function Carousel(){
    let imgUrlTemplate = "/img/face";
    let imgFormat = ".png";

    let cntSlides = 4;
    let timeSlide = 5000;
    const [slideNum, setSlideNum] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    function fadeCarousel(forward : boolean){
      let step;
      if(forward)step = 1;
      else step = cntSlides - 1;
        setFadeIn(false);
        setTimeout(() => {
        setSlideNum(prevSlideNum => (prevSlideNum + step) % cntSlides);
        setFadeIn(true);
        }, 300);
    }

    useEffect(() => {
          const interval = setInterval(() => {
          fadeCarousel(true)// This should match the transition duration
      }, timeSlide);
      return () => {
        clearInterval(interval);
      };
    }, []);
    
    return (
        <div className="h-full relative w-full overflow-hidden">
           <div className={`transition-opacity duration-400 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-70'} h-full`}>
            <Image alt="slide" src={imgUrlTemplate + slideNum + imgFormat} width={960} height={930} className="h-full w-full object-cover"/>
           </div>
            <div className="absolute left-4 bottom-4 w-36 justify-between h-12 flex items-center">
              <button onClick={() => {fadeCarousel(false)}} className="bg-[#121212] bg-opacity-60 hover:bg-opacity-80 rounded-3xl w-16 h-10 flex items-center justify-center">
                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.832 8.092L3.576 10.66L21 10.66L21 11.62L3.576 11.62L5.832 14.188L5.496 14.5C3.8 12.948 2.216 11.876 0.744 11.284L0.744 10.996C2.216 10.404 3.8 9.332 5.496 7.78L5.832 8.092Z" fill="white"/>
                </svg>
              </button>

              <button onClick={() => {fadeCarousel(true)}} className="bg-[#121212] bg-opacity-60 hover:bg-opacity-80 rounded-3xl w-16 h-10 flex items-center justify-center">
                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.168 14.908L18.424 12.34L1 12.34V11.38L18.424 11.38L16.168 8.812L16.504 8.5C18.2 10.052 19.784 11.124 21.256 11.716V12.004C19.784 12.596 18.2 13.668 16.504 15.22L16.168 14.908Z" fill="white"/>
                </svg>
              </button>
            </div>
            <div className="flex transition-transform ease-in-out duration-150 items-center justify-between p-2 absolute left-[calc(25vw-64px)] bottom-7 w-32 bg-[#121212] bg-opacity-60 rounded-3xl h-6">
                 {[0, 1, 2, 3].map((index) => (
                    <input
                        key={index}
                        onClick={() => {setSlideNum(index)}}
                        name="carouselRadio"
                        type="radio"
                        checked={slideNum === index}
                        readOnly
                        className="appearance-none accent-white bg-black w-3 h-3 rounded-full checked:bg-white"
                    />
                ))}
            </div>
        </div>
    );
}