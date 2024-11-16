import Image from "next/image";
import Link from "next/link";
export default function Card(){

 return(
  <div>
  <section className="sm:mx-11 my-11 sm:flex justify-between white border border-accent bg-slate-200">
    <div data-aos="zoom-out-up" className="sm:mx-4 sm:mt-20">
     <h1  className="  sm:ml-16 my-2 mt-10 ">
      <b className="text-2xl my-4">Scholarship for Outstanding Students </b> <br />
70% discount awarded in tuition & admission fees to the outstanding students.
     </h1>
     <h1 
     className="  sm:ml-16 my-2 mt-10 ">
      <b className="text-2xl my-4">Hamdard Public School Students</b> <br />
      50% discount in tuition & admission fees for Hamdard Public School students.
     </h1>
     
    </div>
    <div>
     <Image data-aos="zoom-out-up"
 className="sm:mr-20 sm:mt-20 mb-3 sm:h sm:w" height={300} width={500} src="/student.jpg" alt="burger1"></Image>
    </div>
   </section>



   <section className=" my-11 sm:flex sm:justify-between  border border-accent bg-green-900">
    <div className="sm:mx-4 sm:mt-20">
     <h1 data-aos="fade-up"
     data-aos-duration="3000" className="  sm:ml-16 my-2 mt-10  text-white">
      <b className="sm:text-2xl my-4">We PROVIDE A BEST EDUCATION IN KARACHI <br />
      GET ENROLLED NOW </b> <br />
      <Link href="/bookatable"><button className="text-3xl rounded-2xl mt-14  ml-40  bg-green-700 text-white sm:h-14 sm:w-40 hover:scale-110 hover:bg-lime-600"><b className="my-1 mx-2">Apply</b></button></Link>
     </h1>
    </div>
    <div>
     <Image data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
     className="sm:mr-20 sm:mt-20 mb-3 rounded-2xl " height={300} width={500} src="/stud.jpg" alt="burger1"></Image>
    </div>
   </section>
  </div>
 )
}