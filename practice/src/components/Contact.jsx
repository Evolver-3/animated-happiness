import React from "react";
import { toast } from "react-toastify";

const Contact =()=>{

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "51c9982a-0f14-44f3-8301-421087f530a8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
     toast.success("Form Submitted Successfully!")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };


  return(
  
  <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
    
      <h2 className="text-2xl   sm:text-4xl font-bold mb-4 texts-center ">Contacts 
        <span className="underline underline-offset-4 decoration-1 under font-light px-1">With Us</span>
      </h2>

      <p className="text-center max-w-80 mx-auto mb-10 text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, facilis. Necessitatibus perferendis provident, consectetur aliquid repellendus ab. Delectus, ea sapiente.</p>
  
      <form className="max-w-2xl mx-auto text-gray-600 " onSubmit={onSubmit}>
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

            <button className="bg-orange-400 text-white px-10 py-4 rounded mb-10">{result ? result : "Send Messsage"}</button>

          
        
      </form>
  </div>
)
}

export default Contact