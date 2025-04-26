
import { useRef, useEffect } from "react";
import Typed from "typed.js";
// import pdf from '../pdf/resume.pdf'
// import { Link } from "react-router-dom";
import shanviImage from "../assets/Shanvi.jpg";
import resume from "../assets/resume.pdf"; 

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hi, I'm Shanvi Soni",
        "I'm a MERN STACK Developer",
        "Building scalable web applications",
        "Eager to create impactful solutions",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      showCursor: false, // Disable the blinking cursor
    };
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home" id="home">
      <div className="left" data-aos="fade-up-right" data-aos-duration="1200">
        <h1 ref={typedRef}></h1>
        <p className="introduction">
          Hi, I'm <strong>Shanvi Soni</strong>, a passionate and aspiring software developer specializing in the{" "}
          <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js). I
          enjoy building web applications that are functional, user-friendly, and scalable.
          Let’s connect and create impactful projects together!
        </p>
        {/* Download Resume Button */}
        <a
          href={resume}
          download="Shanvi_Soni_Resume.pdf"
          className="btn btn-outline-warning mt-3"
        >
          Download Resume
        </a>

      </div>
      <div className="right" data-aos="fade-up-left" data-aos-duration="1200">
        <div className="img">

        {/* <img src="/images/shanvi.jpg" alt="Profile" /> */}


        <img src={shanviImage} alt="Profile" />


          
        </div>
      </div>
    </div>
  );
};

export default Home;












