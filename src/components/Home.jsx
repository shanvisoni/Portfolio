
import { useRef, useEffect } from "react";
import Typed from "typed.js";
// import pdf from '../pdf/resume.pdf'
// import { Link } from "react-router-dom";
import shanviImage from "../assets/Shanvi.jpg";


const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hi, I'm Shanvi Soni",
        "I'm a Software Developer",
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
        {/* <a
          href={pdf}
          download="Resume.pdf"
          className="btn btn-outline-warning mt-3"
        >
          Download Resume
        </a> */}
      </div>
      <div className="right" data-aos="fade-up-left" data-aos-duration="1200">
        <div className="img">

        <img src="/images/Shanvi.jpg" alt="Profile" />

          
        </div>
      </div>
    </div>
  );
};

export default Home;





{/* <img src={`../assets/shanvi.jpg`} alt="hero" />  */}












// .home {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: black;
//   padding: 50px 0;
// }

// .home .left {
//   background-color: #1a1a1a;
//   width: 600px;
//   text-align: center;
//   padding: 40px;
//   border-radius: 15px;
//   border: 2px solid yellow;
//   box-shadow: 0px 10px 30px rgba(255, 215, 0, 0.3);
//   animation: fadeInUp 1.5s ease-in-out;
// }

// .home .left h1 {
//   font-size: 2rem;
//   font-weight: bold;
//   color: yellow;
// }

// .home .left .introduction {
//   margin-top: 20px;
//   font-size: 1.1rem;
//   color: #ccc;
//   line-height: 1.8;
// }

// .home .right .img {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   animation: pulse 3s infinite;
// }

// .home .right .img img {
//   height: 280px;
//   width: 280px;
//   border: 5px solid yellow;
//   border-radius: 50%;
//   transition: transform 0.5s ease, box-shadow 0.5s ease;
// }

// .home .right .img img:hover {
//   transform: scale(1.1);
//   box-shadow: 0px 15px 30px rgba(255, 215, 0, 0.5);
// }

// /* Animations */
// @keyframes fadeInUp {
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// @keyframes pulse {
//   0%, 100% {
//     box-shadow: 0 0 30px yellow, 0 0 50px rgba(255, 215, 0, 0.5);
//   }
//   50% {
//     box-shadow: 0 0 60px yellow, 0 0 80px rgba(255, 215, 0, 0.7);
//   }
// }

