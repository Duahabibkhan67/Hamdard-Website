import Image from "next/image";
import Link from "next/link";
export default function Card(){

 return(
  <div>
  <section className="mx-0 sm:mx-3 lg:mx-11 my-11 flex flex-col sm:flex-row  justify-between white border border-accent bg-slate-200">
    <div data-aos="zoom-out-up" className="sm:mx-4 px-4  sm:mt-16 sm:w-1/2">
     <h1  className="text-center sm:text-left text-lg sm:text-xl lg:text-2xl font-bold  my-6 ">
   Scholarship for Outstanding Students<br />
      <p className="text-gray-700">70% discount awarded in tuition & admission fees to the outstanding students.</p>

     </h1>
     <h1 
     className="  text-center sm:text-left text-lg sm:text-xl lg:txext-2xl font-bold my-6 ">
   Hamdard Public School Students <br />
   <p className="text-gray-700">50% discount in tuition & admission fees for Hamdard Public School students.</p>
      
     </h1>
     
    </div>
    <div className="flex justify-center sm:justify-end sm:w-1/2">
     <Image data-aos="zoom-out-up"
 className="sm:mr-20 sm:mt-20 mb-3" height={300} width={500} src="/student.jpg" alt="burger1"></Image>
    </div>
   </section>



   <section className=" my-11 flex flex-col  sm:flex-row justify-between  border border-accent bg-green-900">
    <div className="sm:mx-4 sm:mt-16 px-4 sm:w-1/2">
     <h1 data-aos="fade-up"
     data-aos-duration="3000" className="text-center sm:text-left text-lg sm:text-xl lg:text-2xl font-semibold   my-6 text-white">
      We PROVIDE A BEST EDUCATION IN KARACHI <br />
      GET ENROLLED NOW  <br />
      <Link href="/bookatable"><button className="text-lg sm:text-xl py-2 px-6 sm:py-3 sm:px-8  rounded-lg bg-green-700 text-white sm:h-14 sm:w-40 hover:scale-110 hover:bg-lime-600"><b className="my-1 mx-2">Apply</b></button></Link>
     </h1>
    </div>


    <div className="flex justify-center sm:justify-end sm:w-1/2">
     <Image data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
     className="mr-4 lg:mr-20 sm:mt-20 mb-3 rounded-2xl " height={300} width={500} src="/stud.jpg" alt="burger1"></Image>
    </div>
   </section>
  </div>
 )
}