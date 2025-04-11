import LgSection from "./LgSection";
import SmSection from "./SmSection";

const SecondPage = () => {

  return (
     <>
      <div className="hidden md:block">
        <LgSection/>
      </div>
      <div className="block md:hidden">
        <SmSection/>
      </div>
     </>
);
};

export default SecondPage;
