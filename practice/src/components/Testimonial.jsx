import { assets ,testimonialsData} from "../assets/assets";

const Testimonial=()=>{
  return(
  <div className="container mx-auto py-10 lg:px-32 w-full overflow-hidden " id="Testimonial">

    <h1 className='mb-4 text-center text-2xl sm:text-4xl font-bold'>
      Customer
       <span className="underline underline-offset-3 decoration-1 under font-light ml-2 ">Testimonials</span>
    </h1>

    <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque facilis molestiae modi fuga itaque possimus officiis sit culpa voluptate harum!</p>

    <div className='flex flex-wrap justify-center gap-8'>
      {testimonialsData.map((testimonial,index)=>(

      <div key={index} className="max-w-[340px] border-none shadow-2xl rounded px-8 py-12 text-center ">

        <img className=" w-20 h-20 rounded-full mx-auto mb-4" src={testimonial.image}
         alt={testimonial.alt}></img>

        <h2 className="test-x1 text-gray-700 font-medium">{testimonial.name}</h2>
        <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>

        <div className="flex justify-center gap-1 text-red-500 mb-4">

        {Array.from ({length:testimonial.rating},(item,index)=>(

          <img
          key={index}
          src={assets.star_icon} className="flex" alt="">
          
          </img>
        ))}

        </div>

            <p className="text-gray" >{testimonial.text}</p>
      </div>
    ))}
    
    </div>
  </div>
)
}

export default Testimonial