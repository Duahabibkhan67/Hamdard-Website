import Image from "next/image";
import Link from "next/link";
import Contactform from "@/components/contact";
export default function Contact(){
 return(
  <div className="bg-slate-50">
   <div className="xl:flex xl:justify-between">
    < Contactform />
   <section className="bg-slate-200 sm:mx-8 my-11 xl:h-auto xl:w-auto">
    <div className="">
     <div>
      <h1 className="sm:text-3xl font-bold xl:ml-28 my-5">Address</h1>
      <h2 className="sm:text-1xl font-serif text-gray-700 xl:mx-11">Plot # D-70, Bloch-H, Allama Rasheed Turabi Road, North Nazimabad, Karachi</h2>
     </div>
     <div>
      <h1 className="sm:text-3xl font-bold sm:ml-20 my-5">Email us directly</h1>
      <h2 className="sm:text-1xl font-serif text-gray-700 sm:mx-11">hamdardintermediatecollege@gmail.com</h2>
     </div>
     <div>
      <h1 className="sm:text-3xl font-bold sm:ml-24 my-5">Phone</h1>
      <h2 className="sm:text-1xl  text-gray-700 sm:ml-24">+92 333 0270448 <br />
+92 333 0270449</h2>
     </div>
    </div>
   </section>
   </div>
  </div>
 )
}