import React, { useCallback, useRef, useState } from 'react'
import cake from '../assets/cake.avif'
import alfredo from '../assets/alfredo.avif'
import fajitas from '../assets/fajitas.avif'
import pizza from '../assets/pizza.avif'
import steak from '../assets/steak.avif'
import tartare from '../assets/tartare.avif'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Home = () => {
  const [imgDivs, setImgDivs] = useState([])
  const img = useRef()

  let imgArr = [cake, alfredo, fajitas, pizza, tartare, steak]

  const throttle = (fn, delay) => {
    let lastTime = 0;
    return function (...args) {
      let now = Date.now();
      if (now - lastTime >= delay) {
        fn.apply(this, args);
        lastTime = now;
      }
    };
  }

  let currentLoc;
  let pv;

  const moving = (details) => {
    const newDiv = { id: Date.now(), left: details.clientX, top: details.clientY,img:imgArr[Math.floor(Math.random() * imgArr.length)] }

    currentLoc = pv - details.clientX
    pv = details.clientX

    let val = gsap.utils.clamp(10, -10, currentLoc)

    setImgDivs((prevDivs) => {
      const updatedDivs = [...prevDivs, newDiv]
      setTimeout(() => {
        setImgDivs((prevDivs) => prevDivs.filter(div => div.id !== newDiv.id))
      }, 3000)

      return updatedDivs
    })

    if (img.current) {
      let tl = gsap.timeline()

      tl.to(img.current, {
        y: '10%',
        ease: 'power2.inOut',
        rotate: val,
      })
        .to(img.current, {
          y: '110%',
          ease: 'power2.inOut',
          translateX: val * 10,
        })
        .set(img.current.parentElement, {
          display:'none'
        })
    }
  }

  const throttledMove = useCallback(throttle(moving, 30), [])

  useGSAP(()=>{
    gsap.to('.home h1 span',{
        y:0,
        delay:0.5,
    })
  })

  return (
    <div style={{ fontFamily: 'Montserrat' }} className="home w-full h-fit lg:h-screen py-[30vw] sm:py-[20vw] lg:py-0 flex justify-center items-center flex-col">
      <div onMouseMove={throttledMove} className="text-center text-[clamp(30px,7vw,100px)]">
        {imgDivs.map((div) => (
          <div
            key={div.id}
            className="absolute left-0 top-0 w-[800px] h-96 flex justify-center overflow-hidden"
            style={{ left: `${div.left - 400}px`, top: `${div.top - 384}px`,pointerEvents:'none' }}
          >
            <img ref={img} className="landingImg w-64 h-96 object-cover translate-y-[100%]" src={div.img} />
          </div>
        ))}
        <h1 className="font-bold leading-none overflow-hidden">
          <span className='inline-block translate-y-[100%]'><span className="text-[#EA9300]">Experience</span> Exceptional</span>
        </h1>
        <h1 className="font-bold leading-none overflow-hidden">
        <span className='inline-block translate-y-[100%]'>Taste, Every <span className="text-[#EA9300]">Bite</span></span>
        </h1>
        <h1 className="font-bold leading-none overflow-hidden"><span className='inline-block translate-y-[100%]'>Every Time</span></h1>
      </div>
    </div>
  )
}

export default Home
