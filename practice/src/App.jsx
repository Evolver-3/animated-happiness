
import Home from "./components/Home"
import About from "./components/About"
import Project from "./components/Project"
import Testimonial from "./components/Testimonial"
import Contact from "./components/Contact"
import { ToastContainer } from 'react-toastify';

import Footer from "./components/Footer"

function App() {


  return(
    <div className="dark:bg-grey-400" >
      
      <ToastContainer/>
      <Home/>
      <About/>
      <Project/>
      <Testimonial/>
      <Contact/>
      <Footer/>    
    </div>
  )
}

export default App
