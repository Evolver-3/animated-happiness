import { assets } from "../assets/assets"
import { useState,useEffect } from "react"

const Navbar=()=>{

  const [show,setShow]=useState(false);

  useEffect(()=>{
    if(show){
      document.body.style.overflow='hidden'
    }else{
      document.body.style.overflow='auto'
    }
    return()=>{
      document.body.style.overflow='auto'
    }

  },[show])




  return(
  
       <div className="absolute top-0 left-0 w-full">
        <div className="container mx-auto flex justify-between items-center py-6 px-6 md:px-20 lg:px-32 bg-transparent">
          <img src={assets.logo}></img>

          <ul className="hidden 
          md:flex gap-7 text-white">
            <a href='#Home' className="cursor-pointer hover:text-blue-400">Home</a>
            <a href='#About' className="cursor-pointer hover:text-blue-400">About</a>
            <a href='#Contact' className="cursor-pointer hover:text-blue-400">Contact</a>
            <a href='#Testimonial' className="cursor-pointer hover:text-blue-400">Testimonial</a>
          </ul>

          <button  className="hidden md:block bg-white px-8 rounded-full text-red-400">Sign Up</button>

          <img src={assets.menu_icon} className="md:hidden w-8 cursor-pointer" onClick={()=>setShow(true)}></img>
        </div>



        <div className={`md:hidden ${show ? `fixed w-full `: `h-0 w-0`} right-0 top-0 bottom-0 overflow-hidden  transition-all bg-[url(back.jpg)] bg-cover bg-center min-h-screen`}>

          <div className="flex justify-end p-7 cursor-pointer">

            <img src={assets.cross_icon} onClick={()=>setShow(false) }
            className="w-7"></img>

          </div>

          <ul onClick={()=>setShow(false)} className="flex flex-col items-center gap-3 mt-2 px-5 text-lg font-medium hover">
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Project">Project</a>
            <a href="#Testimonial">Testimonial</a> 
          </ul>
        </div>



      </div>
  )
}

export default Navbar