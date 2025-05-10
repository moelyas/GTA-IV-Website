import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import 'remixicon/fonts/remixicon.css'

function App() {
    let [showContent, setShowContent] =useState(false) ; 

    useGSAP(() => {
      const tl = gsap.timeline()
      tl.to(".vi-mask-group", {
        rotation: 10,
        duration: 2,
        ease: "power4.easeinOut",
        transformOrigin: "50% 50%",
      })
      .to(".vi-mask-group", {
        scale: 10,
        duration: 2,
        delay: -1.8,
        ease: "expo.inOut",
        transformOrigin: "50% 50%",
        opacity: 0,
        onUpdate: function () {
          if(this.progress() >= 0.9){
            document.querySelector(".svg").remove();
            setShowContent(true)
          }
        },
      })
    }, [])
  
    useGSAP(() => {

      if(!showContent) return;

      gsap.to(".main" ,{
        scale:1,
        rotate:0,
        duration:2,
        delay:"-1",
        ease:"Expo.easeInOut"
      }) ;

      gsap.to(".sky" ,{
        scale:1.1,
        rotate:0,
        duration:2,
        delay:"-0.8",
        ease:"Expo.easeInOut"
      }) ;

      gsap.to(".bg" ,{
        scale:1.1,
        rotate:0,
        duration:2,
        delay:"-.8",
        ease:"Expo.easeInOut"
      }) ;

      gsap.to(".girlbg" ,{
        scale:1,
        x:"-50%",
        bottom:"-45%",
        rotate:0,
        duration:2,
        delay:"-0.8",
        ease:"Expo.easeInOut"
      }) ;

      gsap.to(".text", {
        scale: 1,
        rotate: 0,
        duration: 2,
        delay: "-.8",
        ease: "Expo.easeInOut",
      });

      
      const main = document.querySelector(".main");

      main?.addEventListener("mousemove", function (e) {
        const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
        gsap.to(".main .text", {
          x: `${xMove * 0.4}%`,
        });
        gsap.to(".sky", {
          x: xMove,
        });
        gsap.to(".bg", {
          x: xMove * 1.7,
        });
      });
    }, [showContent]);

  return (
    <div>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
        </div>

        {showContent && <div className="main w-full rotate-[-10deg] scale-[1.7]">

          <div className="landing overflow-hidden relative w-full h-screen bg-[#000]">
            <div className='navbar absolute top-0 left-0 z-[10] w-full py-10 px-10'>
              <div className='logo flex gap-7 '>
                  <div className='lines flex flex-col gap-[5px]'>
                  <div className='line w-15 h-1 bg-white '></div>
                  <div className='line w-8 h-1 bg-white '></div>
                  <div className='line w-5 h-1 bg-white '></div>
                    </div>
                    <h3 className='text-[#fff] text-4xl -mt-[8px] leading-none'>Rockstar</h3> 
               </div>
              </div>
              
            <div className='imagediv overflow-hidden w-full h-screen relative'>
              <img src='./sky.png' alt=""
               className='sky scale-[1.5] rotate-[-20deg] w-full h-full object-cover top-0 left-0 absolute' />
              <img src="./bg.png" alt="" 
              className='bg scale-[1.8] rotate-[-3deg] w-full h-full object-cover top-0 left-0 absolute ' />
              <div className='text text-white flex flex-col gap-4 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]'>
                <h1 className="text-[8rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[8rem] leading-none -ml-10">theft</h1>
                <h1 className="text-[8rem] leading-none -ml-40">auto</h1>
                </div>
              <img src='./girlbg.png' alt=""
              className='girlbg -bottom-[150%] left-1/2 scale-[3] rotate-[-20deg] -translate-x-1/2 absolute' />
            </div>
            <div className='btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent"'>
                <div className='flex gap-4 items-center '>
                <i className="ri-arrow-down-line text-4xl "></i>
                <h3 className='font-[Helvetica_Now_Display] text-xl '>Scroll Down</h3>
                </div>
                <img src="./ps5.png" alt="" className='absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
              </div>
          </div>

          <div className='w-full h-screen flex items-center justify-center px-10 bg-black'>
            <div className='cntnr flex text-white w-full h-[80%] '>
            <div className='limg relative w-1/2 h-full'>
              <img 
              className='absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
              src="./imag.png" 
              alt="" />
            </div>
            <div className='rg w-[50%] py-30'>
              <h1 className='text-8xl'>Still Running,</h1>
              <h1 className='text-8xl'>Not Hunting</h1>
              <p className='mt-10 text-xl font-[Helvetica_Now_Display]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam debitis quis rerum consequatur commodi inventore modi nihil beatae vel, vero eum mollitia omnis!</p>
              <p className='mt-3  text-xl font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat exercitationem voluptatum doloremque dolorem.</p>
              <p  className='mt-10  text-xl font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident id reprehenderit quo maxime hic ducimus, ab, repellendus ipsum minus quae consequuntur non ut officiis impedit sed beatae, illo aut asperiores?</p>
              <button className="bg-yellow-500 px-5 py-5 text-black mt-10 text-4xl rounded-lg ">
                  Download Now
                </button>
            </div>
            </div>
           
          </div>

          
        </div>}
    </div>
  )
}

export default App;
