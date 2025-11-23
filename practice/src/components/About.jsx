import { assets } from "../assets/assets"

const About =()=>{
  return(
    
      <div className="flex flex-col items-center justify-center container mx-auto p-7 md:px-20 lg:px-32 w-full overflow-hidden " id="About">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 ">About
          <span className="underline underline-offset-2 decoration-1 under font-light ml-2">Our Brand</span>
        </h2>

        <p className="text-gray-600 max-w-80 text-center mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolor!</p>

        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 ">
          <img src={assets.brand_img} className="w-full sm:w-1/2 max-w-lg"></img>
        

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-500 ">
          <div className="grid grid-cols-2 gap-8 md:gap-15 w-full 2xl:pr-28">

            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>

             <div>
              <p className="text-4xl text-gray-800 font-medium ">12+</p>
              <p>Projects completed</p>
            </div>

             <div>
              <p className="text-4xl text-gray-800 font-medium ">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>

             <div>
              <p className="text-4xl text-gray-800 font-medium ">23+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>

          <p className="my-10 max-w-lg  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, esse? Temporibus impedit aperiam similique quisquam eligendi aspernatur quaerat quibusdam corporis, voluptate laudantium a fuga exercitationem voluptatum quo est molestias sit et. Velit fugiat nesciunt sapiente, exercitationem adipisci facilis consectetur sint?</p>

          <button className="py-4 px-7 rounded text-white bg-green-400">Learn More</button>

        </div>
      
      </div>

      </div>
    
  )
}
export default About