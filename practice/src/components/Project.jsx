import { assets, projectsData} from "../assets/assets";

const Project=()=>{
  return(
    <div>
      <h1>Projects <span>Completed</span></h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, quidem.</p>

      <div>
        <button><img src={assets.left_arrow}></img></button>

        <button><img src={assets.right_arrow}></img></button>
      </div>

      <div>
        <div>
          {projectsData.map((project,index)=>(
            <div key={index}>
              <img src={project.image}></img>

              <div>
                <div>
                  <h2>{project.title}</h2>
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