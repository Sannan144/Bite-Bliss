import { useState, useEffect } from 'react';
import drinksImage from '../assets/drinks.avif';
import ingredientsImage from '../assets/ingredients.avif';
import restaurantImage from '../assets/resturant.avif';
import specialItemsImage from '../assets/specialItems.avif';
import gsap from 'gsap';

const ThirdPage = () => {
  const [idx, setIdx] = useState(0);

  const resData = [
    {
      img: drinksImage,
      heading: "Signature Drinks",
      paragraph: "Pair your meal with our signature drinks. From refreshing mocktails to creative cocktails, we have the perfect beverage for every dish."
    },
    {
      img: ingredientsImage,
      heading: "Fresh Ingredients",
      paragraph: "We use only the freshest ingredients to prepare every meal. Our herbs, vegetables, and meats are sourced daily to ensure quality."
    },
    {
      img: restaurantImage,
      heading: "Comfortable Ambiance",
      paragraph: "Our restaurant offers a warm and inviting atmosphere. Whether you’re dining casually or celebrating, we make every visit special."
    },
    {
      img: specialItemsImage,
      heading: "Our Special Dishes",
      paragraph: "Our special dishes are made with the finest ingredients. Fresh, flavorful, and prepared to perfection. Enjoy each bite with great care."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const tl = gsap.timeline();
      tl.to('.slider-parent', {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          setIdx(prev => (prev === resData.length - 1 ? 0 : prev + 1));
        }
      }).to('.slider-parent', {
        delay:0.5,
        opacity: 1,
        duration: 2,
      });
    }, 5000);

    return () => clearInterval(interval); 
  }, []); 

  return (
    <div className='border-t border-b'>
    <div className='slider-parent flex items-center flex-col md:flex-row px-10 gap-5 min-h-[600px] py-10'>
      <div>
        <img className='w-[2000px] rounded-xl object-cover' src={resData[idx].img} />
      </div>
      <div>
        <h1 style={{ fontFamily: 'Montserrat', whiteSpace: 'nowrap' }} className='text-[clamp(30px,5vw,60px)] tracking-tighter'>
          {resData[idx].heading}
        </h1>
        <p style={{ fontFamily: 'Lora' }} className='text-[20px] md:text-[16px] lg:text-[20px]'>
          {resData[idx].paragraph}
        </p>
      </div>
    </div>
    </div>

  );
};

export default ThirdPage;
