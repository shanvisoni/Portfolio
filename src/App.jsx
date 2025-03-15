import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aos from 'aos';
import "aos/dist/aos.css"
import './App.css';

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: false,    
      mirror: false,  
    });
  }, []);

  return (
  <>

<Navbar/>
<div className='container'>
  <Home/>
  <Skills/>
  <Projects/>
  <Contact/>
</div>


  </>
  )
};

export default App;











// .skills{
//   width: 900px;
// }

// .skills .items{
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap:wrap ;
//   /* width: 700px; */
//   margin: auto;
//   /* background-color: rgb(34, 32, 32); */
// }

// .skills .items .item{
// width: calc(33.33%);
// background-color: rgb(34, 32, 32);
// margin: 20px;
// text-align: center;
// padding:20px ;
// border-radius: 10px;
// border: 1px solid yellow;
// box-shadow: var(--box-shadow);
// }

// .skills .items .item img{
//   width: 70px;
// }
