import Navbar from "./Navbar"

const Home=()=>{
  return(
  <div className="min-h-screen mb-4 bg-cover flex items-center " style={{backgroundImage: "url('/wallpaper.jpg')"}} id="Home">

    <Navbar/>

    <div className="container text-center mx-auto text-white py-7 px-9 md:px-50 lg:px-100 ">

      <h2 className="text-2xl sm:text-2xl md:text-[40px] inline-block max-w-3xl font-semibold pt-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veritatis rem temporibus laborum sint beatae praesentium soluta harum tempora. Commodi.</h2>

      <div className="space-x-6 mt-10">
        <a className="border border-white px-6 py-4 rounded md:text-orange-500 md:border-orange-600 md:bg-white " >Project</a>
        <a className="bg-green-500 px-10 py-4 rounded text-violet-500 font-bold">Contact</a>
      </div>
    </div>

  </div>
  )
}

export default Home