import "./OurInitial_1.css";
import backgroundImg from "../../assets/123123.png";

const OurInitial = () => {
  return (
    <div className="ourinitial">
      <img className="background-img" src={backgroundImg} alt="" />
      <div className="main-container">
          
      <h1> OUR<span> INITIAL </span> <br /> <span>PROJECTS</span></h1>
               <button>See our projects</button>

      </div>
    </div>
  );
};

export default OurInitial;
