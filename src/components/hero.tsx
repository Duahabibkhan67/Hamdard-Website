import Image from "next/image";
import Link from "next/link";
export default function Hero(){
 return(
  <div className="bg-orange-300 flex flex-col lg:flex-row justify-between   item-center sm:h-screen p-6 lg:p-12  ">
  <section  className="flex flex-col sm:items-center lg:items-start ">
      <h1 data-aos="fade-up"
     data-aos-duration="3000" className="text-white text-3xl   sm:text-4xl lg:text-6xl rounded text-center lg:text-left sm:mb-4    font-bold  ">
     Welcome To Hamdard <br /> Intermediate College 
     <h2 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="text-green-700 text-xl  sm:text-2xl lg:text-3xl  font-bold font-serif  p-4 rounded text-center lg:text-left">
    Pre Medical,Pre Engineering, <br />
    Computer Science & Commerce
      </h2>
      <div className=" flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
      <Link href="/apply"><button className="text-lg sm:text-xl       bg-green-700 text-white py-2 px-6 rounded transition-transform hover:scale-110 hover:bg-lime-600"><b className="my-1 mx-2">Apply</b></button></Link>
<Link href="/contact"><button className="text-lg sm:text-xl  border border-black  py-2 px-6 hover:scale-110 hover:bg-lime-600 transition-transform"><b className="my-1 mx-2">Contact</b></button></Link>
      </div> 
      </h1>
      </section>
      <div className="mt-8 lg:mt-0">
        <Image data-aos="fade-down" className=" rounded-2xl " height={500} width={500} src="/heroimg.jpg" alt="hero"></Image>
        </div>     
       
 
</div>

 
 )
}