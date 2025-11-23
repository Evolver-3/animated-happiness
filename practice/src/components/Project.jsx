import { assets, projectsData} from "../assets/assets";

import React,{useState,useEffect} from 'react'

const Project=()=>{

  const [currentIndex,setCurrentIndex]=useState(0);

  const [cardsShow,setCardsShow]=useState(1);

  useEffect(()=>{
    const updateCardsShow=()=>{
      if(window.innerWidth>=1024 ){
        setCardsShow(projectsData.length)
      }else{
        setCardsShow(1)
      }
    }
    updateCardsShow();

    window.addEventListener('resize',updateCardsShow)
      return()=> window.removeEventListener('resize',updateCardsShow)
    },[])
  

  const nextProject=()=>
    setCurrentIndex(i=>(i+1)%projectsData.length)

  const prevProject=()=>
    setCurrentIndex(i=>
      (i===0? projectsData.length-1 : i-1))


  return(
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden ' id="Project">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Projects <span className="underline underline-offset-4 decoration-1 under font-light px-2">Completed</span></h1>

      <p className="text-center text-gray-500 mb-7 max-w-80 mx-auto ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quidem.</p>

      <div className="flex justify-end items-center mb-8">
        <button className="p-3 bg-gray-300 rounded mr-3 hover:bg-gray-400" onClick={prevProject}>
          <img src={assets.left_arrow}>
          </img>
        </button>

        <button className="p-3 bg-gray-300 rounded mr-3 hover:bg-gray-400" onClick={nextProject}>
          <img src={assets.right_arrow}>
          </img>
        </button>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-4 transition-transfor duration-500 ease-in-out"
        style={{transform: `translate(-${(currentIndex *100)/cardsShow}%)`}}>
          {projectsData.map((project,index)=>(
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img src={project.image}></img>

              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md text-blue-500 rounded">
                  <h2 className="text-bold-xl font-semibold text-gray-700">{project.title}</h2>
                  <p>{project.price}<span>{project.location}</span></p>
                </div>
              </div>
            </div>

           
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project