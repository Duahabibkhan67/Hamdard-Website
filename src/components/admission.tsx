import Link from "next/link";
import Image from "next/image";
export default function Admission(){
 return(
  <div>
   <section className="  mt-24 flex flex-col sm:flex-row sm:mx-8 justify-between  bg-green-700">
   <div className="flex justify-center sm:w-1/2">
     <Image data-aos="fade-up"
     data-aos-duration="3000"  className="sm:ml-6 sm:mr-3 sm:mt-2 " height={500} width={500} src="/hero2.jpg" alt="burger1"></Image>
    </div>
    <div className="mx-4 sm:mt-20 text-center sm:text-left sm:w-1/2">
     <h1 data-aos="fade-up"
     data-aos-duration="3000" className="text-3xl sm:text-4xl lg:text-5xl font-bold  my-4  text-white"><b>Admission Open For XI</b></h1>
     <h1 data-aos="fade-up"
     data-aos-duration="3000" className="text-xl sm:text-2xl lg:text-3xl font-serif my-4 text-white "><b> Pre-Medical, Pre-Engineering,<br />Computer Science & Commerce. <br /> In Morning Shift for Boys & Girls (Separate Classes)</b></h1>
    
    <Link href="/apply"><button className="text-xl sm:text-2xl sm:py-2  py-2 px-4 sm:px-6 transition-transform duration-300  bg-green-900 text-white sm:h-10 sm:w-30 rounded-lg hover:scale-110 hover:bg-lime-600"><b className="my-1 mx-2">Apply</b></button></Link>
    </div>
   
   </section>
  </div>
 )
}