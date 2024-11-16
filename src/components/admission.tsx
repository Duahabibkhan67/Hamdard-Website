import Link from "next/link";
import Image from "next/image";
export default function Admission(){
 return(
  <div>
   <section className="sm:mx-8  mt-24 sm:flex justify-between  bg-green-700">
   <div>
     <Image data-aos="fade-up"
     data-aos-duration="3000"  className="sm:ml-6 sm:mr-3 sm:mt-2 md:block" height={500} width={500} src="/hero2.jpg" alt="burger1"></Image>
    </div>
    <div className="mx-4 sm:mt-20">
     <h1 data-aos="fade-up"
     data-aos-duration="3000" className="text-4xl sm:text-3xl sm:ml-16 my-2 mt-10 text-white"><b>Admission Open For XI</b></h1>
     <h1 data-aos="fade-up"
     data-aos-duration="3000" className="sm:text-2xl sm:ml-16 my-2 text-white font-serif"><b> Pre-Medical, Pre-Engineering,<br />Computer Science & Commerce. <br /> In Morning Shift for Boys & Girls (Separate Classes)</b></h1>
    
    <Link href="/apply"><button className="text-2xl sm:mb-6   sm:ml-40  bg-green-900 text-white sm:h-10 sm:w-30 hover:scale-110 hover:bg-lime-600"><b className="my-1 mx-2">Apply</b></button></Link>
    </div>
   
   </section>
  </div>
 )
}