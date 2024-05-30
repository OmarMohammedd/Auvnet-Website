import "./OurInitial_2.css";
import backgroundImg from "../../assets/Projects 7.png";
import { MdArrowRightAlt } from "react-icons/md";


const OurInitial_2 = () => {
  return (
    <div className="ourinitialll">
      <img className="background-img" src={backgroundImg} alt="" />
      <div className="main-container">
          
               <h1> OUR<span> INITIAL </span> <br /> <span>PROJECTS</span></h1>
               <button>See our projects <MdArrowRightAlt size={30} /> </button>

      </div>
    </div>
  );
};

export default OurInitial_2;
