import Image from "next/image";
import Link from "next/link";
export default function Hero(){
 return(
  <div className="bg-orange-300  flex justify-between sm:flex-col md:flex-col lg:justify-between sm:h-screen  ">
  <div  className=" sm:flex  ">
      <h1 data-aos="fade-up"
     data-aos-duration="3000" className="text-white sm:text-6xl   sm:mx-2 sm:mt-11   font-bold  rounded">
     Welcome To Hamdard <br /> Intermediate College 
     <h1 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="text-green-700 sm:text-3xl font-bold font-serif  p-4 rounded">
    Pre Medical,Pre Engineering, <br />
    Computer Science & Commerce
      </h1>
      <div className=" flex-row mr-52 hidden md:block md:mr-0 mt-10  sm:mt-0">
      <Link href="/apply"><button className="text-2xl    sm:ml-40  bg-green-700 text-white sm:h-10 sm:w-30 hover:scale-110 hover:bg-lime-600"><b className="my-1 mx-2">Apply</b></button></Link>
<Link href="/contact"><button className="text-2xl  sm:ml-8  border border-black  sm:h-10 sm:w-30 hover:scale-110 hover:bg-lime-600"><b className="my-1 mx-2">Contact</b></button></Link>
      </div> 
      </h1>
    
      <div>
        <Image data-aos="fade-down" className="sm:mx-6  mt-16 rounded-2xl sm:min-h-min sm:w" height={500} width={500} src="/heroimg.jpg" alt="hero"></Image>
        </div>     
  </div>
 
</div>
 
 )
}