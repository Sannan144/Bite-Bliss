import React, { useEffect } from 'react';
import men1 from '../assets/men1.avif';
import men2 from '../assets/men2.avif';
import men3 from '../assets/men3.avif';
import men4 from '../assets/men4.avif';

const Reviews = () => {
  useEffect(() => {
    new window.Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });
  }, []);

  const reviews = [
    {
      name: "Ali Raza",
      review: "The food was absolutely delicious, and the ambiance made the experience even better. Highly recommended!",
      img: men1,
    },
    {
      name: "Usman Khan",
      review: "I loved the quick service and the flavors were spot on. Will definitely be visiting again with friends!",
      img: men2,
    },
    {
      name: "Ahmed Malik",
      review: "A perfect place for a family dinner. The staff was friendly and the dishes were authentic and flavorful.",
      img: men3,
    },
    {
      name: "Bilal Siddiqui",
      review: "Best restaurant in town! The presentation, taste, and overall vibe were just amazing.",
      img: men4,
    }
  ];

  return (
    <div className="swiper mySwiper border-t my-10 min-h-[400px]">
      <div className="swiper-wrapper">
        {reviews.map((review, index) => (
          <div className="swiper-slide px-10" key={index}>
            <div className="w-fit mx-auto mb-4">
              <div className="w-[1px] h-20 bg-black mx-auto mb-4"></div>
              <img
                src={review.img} 
                alt={review.name}
                className="object-cover w-24 h-24 rounded-full"
              />
            </div>
            <div className="text-center">
              <h2 style={{ fontFamily: 'Montserrat' }} className="text-2xl font-semibold mb-2">
                {review.name}
              </h2>
              <p style={{ fontFamily: 'Lora' }} className="text-[16px] sm:text-lg">
                {review.review}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination mt-4 opacity-[1] md:opacity-0"></div>
    </div>
  );
};

export default Reviews;
