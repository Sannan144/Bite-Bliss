import cake from '../assets/cake.avif'; 
import alfredo from '../assets/alfredo.avif';
import fajitas from '../assets/fajitas.avif';
import steak from '../assets/steak.avif';
import tartare from '../assets/tartare.avif';
import pizza from '../assets/pizza.avif';
import { useRef, useState } from 'react';
import gsap from 'gsap';

const LgSection = () => {

  const [imgIdx , setImgIdx] = useState()  

  const h1 = useRef()  
  const circle = useRef()
  const pg2 = useRef()
  const fixDiv = useRef()

  let dish = ['Cake', 'Alfredo', 'Fajitas', 'Steak', 'Tartare', 'Pizza'];
  let countries = ['USA', 'Italy', 'Mexico', 'Spain', 'France', 'Rome'];
  let imgArr = [cake, alfredo, fajitas, steak, tartare, pizza];

  let moving = (event) => {
    const rect = pg2.current.getBoundingClientRect();
    gsap.to(circle.current, {
      x: event.clientX - 40,
      y: (event.clientY - rect.top) - 40,
      duration: 0.3,
    });
  }

  let mov = (details,index) => {
    let dim = h1.current.getBoundingClientRect()
    let centerPoint = Math.floor(details.clientX - (dim.x + dim.width/2))

    setImgIdx(index)

    gsap.to(fixDiv.current, {
      opacity: 1,
      duration: 0.5,
      display: 'block',
    })

    gsap.to(`.h1-parent${index} h1`,{
        fontWeight:'bold',
        x:centerPoint/2,
    })
    gsap.to(`.h1-parent${index}`,{
        y:'-100px',
        color:'#EA9300',
    })
    gsap.to(circle.current,{
        scale:3,
    })
  }

  let lev = (index) => {

    gsap.to(`.h1-parent${index}`,{
        y:0,
        color:'black'
    })
    gsap.to(circle.current,{
        scale:1,
    })
    gsap.to(`.h1-parent${index} h1`,{
        fontWeight:'lighter',
        x:0,
    })
  }

  return (
    <div ref={pg2} onMouseMove={moving} className="w-full min-h-screen flex flex-col py-10 relative z-20">
      
        <div ref={circle} style={{pointerEvents:'none'}} className="circle w-20 h-20 bg-[#111] rounded-full absolute left-0 top-0 z-10"></div>

        <h1 style={{fontFamily:'Montserrat'}} className='text-[clamp(30px,6vw,100px)] font-bold mb-10 tracking-tighter'>Chef's Recommendations</h1>

      <div className='flex justify-between'>

        <div>
            {
            dish.map((item, index) => {
                return (
                    <div key={index} ref={h1} onMouseMove={(details)=> mov(details,index)} onMouseLeave={()=> lev(index)} className='w-fit my-3 h-20 overflow-hidden relative z-20'>
                        <div className={`h1-parent${index} h-40`}>
                            <h1 style={{fontFamily:'Lora',}} className="text-[80px] leading-none">{item}</h1>
                            <h1 style={{fontFamily:'Lora',}} className="text-[80px]">{countries[index]}</h1>
                        </div>
                    </div>
                );
            })
            }
        </div>

        <div className='h-[550px] flex-grow-1 relative'>
            <div ref={fixDiv} className='h-[400px] sticky top-10 left-1/2 w-[350px] rounded-xl overflow-hidden opacity-0'>
                <img className='w-full h-full object-cover' src={imgArr[imgIdx]} />
            </div>
        </div>

      </div>
    </div>
  )
}

export default LgSection;
