import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Counter = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((counter) => {
      const endValue = parseInt(counter.getAttribute('data-end'), 10);

      gsap.fromTo(counter,
        { innerText: 0 },
        {
          innerText: endValue,
          duration: 2,
          ease: 'power1.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          onUpdate: function () {
            counter.innerText = Math.floor(this.targets()[0].innerText).toLocaleString();
          }
        }
      );
    });
  }, []);

  return (
    <div className="py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h2
              ref={el => countersRef.current[0] = el}
              data-end="5000"
              className="text-3xl font-bold text-[#EA9300]"
              style={{ fontFamily: 'Lora' }}
            >
              0
            </h2>
            <p className="mt-2 font-semibold" style={{ fontFamily: 'Montserrat', fontSize: '30px' }}>Happy Customers</p>
          </div>

          <div>
            <h2
              ref={el => countersRef.current[1] = el}
              data-end="10000"
              className="text-3xl font-bold text-[#EA9300]"
              style={{ fontFamily: 'Lora' }}
            >
              0
            </h2>
            <p className="mt-2 font-semibold" style={{ fontFamily: 'Montserrat', fontSize: '30px' }}>Dishes Served</p>
          </div>

          <div>
            <h2
              ref={el => countersRef.current[2] = el}
              data-end="10"
              className="text-3xl font-bold text-[#EA9300]"
              style={{ fontFamily: 'Lora' }}
            >
              0
            </h2>
            <p className="mt-2 font-semibold" style={{ fontFamily: 'Montserrat', fontSize: '30px' }}>Years of Experience</p>
          </div>

          <div>
            <h2
              ref={el => countersRef.current[3] = el}
              data-end="5"
              className="text-3xl font-bold text-[#EA9300]"
              style={{ fontFamily: 'Lora' }}
            >
              0
            </h2>
            <p className="mt-2 font-semibold" style={{ fontFamily: 'Montserrat', fontSize: '30px' }}>Branches</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Counter;
