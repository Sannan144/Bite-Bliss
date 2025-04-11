import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Menu = ({ isOpen, setIsOpen }) => {
  const menu = useRef();

  const menuClose = () => {
    setIsOpen(false);
  };

  useGSAP(() => {
    gsap.set(menu.current, {
      right: "-320px",
    });
  });

  useGSAP(() => {

    let tl = gsap.timeline()
    
    tl.to(menu.current, {
      right: isOpen ? "0" : "-320px",
      duration: 0.5,
      ease: "power2.out",
    })
    .from(menu.current.children[1],{
        opacity:0,
        stagger:0.2,
        x:'30px'
    })
  }, [isOpen]);

  return (
    <div
      ref={menu}
      className="w-[320px] h-screen fixed top-0 z-[100] transition-transform duration-300 
      bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex flex-col justify-center items-center"
    >
      <button
        onClick={menuClose}
        type="button"
        className="relative cursor-pointer border-2 border-black group hover:border-[#EA9300] w-12 h-12 duration-500 overflow-hidden self-end mr-2"
      >
        <p className="font-Manrope text-3xl h-full w-full flex items-center justify-center text-black duration-500 relative z-10 group-hover:scale-0">
          ×
        </p>
        <span
          className="absolute w-full h-full rotate-45 group-hover:top-9 duration-500 top-12 left-0"
          style={{ backgroundColor: "#EA9300" }}
        ></span>
        <span
          className="absolute w-full h-full rotate-45 top-0 group-hover:left-9 duration-500 left-12"
          style={{ backgroundColor: "#EA9300" }}
        ></span>
        <span
          className="absolute w-full h-full rotate-45 top-0 group-hover:right-9 duration-500 right-12"
          style={{ backgroundColor: "#EA9300" }}
        ></span>
        <span
          className="absolute w-full h-full rotate-45 group-hover:bottom-9 duration-500 bottom-12 right-0"
          style={{ backgroundColor: "#EA9300" }}
        ></span>
      </button>

      <ul style={{ fontFamily: "Montserrat" }} className="flex flex-col p-6 space-y-6 text-[40px]">
        <li className="cursor-pointer font-semibold hover:translate-x-[5px] hover:text-[#EA9300] transition-all duration-300">Home</li>
        <li className="cursor-pointer font-semibold hover:translate-x-[5px] hover:text-[#EA9300] transition-all duration-300">Order Online</li>
        <li className="cursor-pointer font-semibold hover:translate-x-[5px] hover:text-[#EA9300] transition-all duration-300">About Us</li>
        <li className="cursor-pointer font-semibold hover:translate-x-[5px] hover:text-[#EA9300] transition-all duration-300">Reviews</li>
        <li className="cursor-pointer font-semibold hover:translate-x-[5px] hover:text-[#EA9300] transition-all duration-300">Contact Us</li>
      </ul>
    </div>
  );
};

export default Menu;
