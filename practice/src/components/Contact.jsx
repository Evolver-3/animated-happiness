const Contact =()=>{
  return(
  
  <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
    
      <h2 className="text-2xl   sm:text-4xl font-bold mb-4 texts-center ">Contacts 
        <span className="underline underline-offset-4 decoration-1 under font-light px-1">With Us</span>
      </h2>

      <p className="text-center max-w-80 mx-auto mb-10 text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facilis. Necessitatibus perferendis provident, consectetur aliquid repellendus ab. Delectus, ea sapiente.</p>
  
      <form className="max-w-2xl mx-auto text-gray-600   ">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input type="text" name="Name" placeholder="You Name" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2"></input>

          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">

            Your Email
            <input type="email" name="Email" placeholder="Your Email" required className="w-full border border-gray-300 rounded py-3 px-4 mt-2">
            </input>

          </div>

        </div>

          <div className="my-6 text-left">
            Message
            <textarea  type="box" placeholder="Message" required className="w-full border border-gray-300 rounded py-3 px-4 mt-3 h-40 resize-none"></textarea> 
          </div>

            <button className="bg-orange-400 text-white px-10 py-4 rounded mb-10"> Send Message</button>

          
        
      </form>
  </div>
)
}

export default Contact