import "./OurInitial_4.css";
import backgroundImg from "../../assets/Projects 7.png";
import { MdArrowRightAlt } from "react-icons/md";

const OurInitial_3 = () => {
  return (
    <div className="ourinitiallll">
      <img className="background-img" src={backgroundImg} alt="" />
      <div className="main-container">
        <img className="join_us" src="/src//assets/Group_598-removebg-preview.png" alt="" />
        <h1> OUR<span> INITIAL </span> <br /> <span>PROJECTS</span></h1>

        <p>
          We take pride in our diverse portfolio of successful projects. Our
          team has worked on a wide range of exciting ventures, including
          website development for e-commerce businesses, mobile app development
          for startups, and software solutions for enterprise clients. Each
          project is approached with a focus on understanding our clients'
          unique needs and delivering tailored solutions that exceed their
          expectations. We are committed to staying at the forefront of
          technology trends and leveraging the latest tools and frameworks to
          create innovative and cutting-edge projects.
        </p>
        <button>
          See our projects <MdArrowRightAlt className="arrowright"  />
        </button>
      </div>
    </div>
  );
};

export default OurInitial_3;
