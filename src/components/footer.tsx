import Image from "next/image";
import Link from "next/link";

import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export default function Footer(){
 return(
  <div>
  
   <section className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-green-700 mt-24 gap-8 p-8">
    <div>
  
<h1 className="text-2xl sm:text-3xl font-bold  mx-4 text-white "><b className="text-white">Hamdard</b><b> <br />Intermediate <br /> College</b></h1>
   <p className="text-sm sm:text-base mt-4 mx-4 text-white ">We believe it has the power to do small things.</p>
   <p className="text-sm sm:text-base mt-4 mx-4 text-white ">Interested in working with us?</p>
   <p className="text-sm sm:text-base mt-4 mx-4 text-white ">Info@example.com</p>
<div className="flex mx-6 mt-4 gap-4 hover:scale-110  text-white text-lg sm:text-2xl "><FaFacebookF /><FaXTwitter /><FaWhatsapp /> <FaInstagram /></div>
   </div>
   <div>
    <h1 className="text-2xl sm:text-3xl font-bold text-white mx-4 mt-4 lg:mt-0  "><b>Explore</b></h1>

 <ul className="text-sm sm:text-base mt-4 mx-4 space-y-3 text-white ">
  <li >
  The Founder
  </li>
  <li >
  The Chancellor
  </li>
  <li >
  The Vice Chancellor
  </li>
  <li >
  Principal
  </li>
  <li >
  Vice Principal
  </li>
 </ul>
   </div>
   <div>
    <h1 className="text-2xl sm:text-3xl font-bold text-white mx-4 mt-4 lg:mt-0"><b>Links</b></h1>

 <ul className="text-sm sm:text-base mt-4 mx-4 space-y-3 text-white ">
  <li >
  Apply
  </li>
  <li >
Admission
  </li>
  <li >
Registration
 </li>
  <li >
Fee Structure
  </li>

 </ul>
   </div>


   <div >
    <h1 className="text-2xl sm:text-3xl font-bold text-white mx-4 mt-4 lg:mt-0  "><b>Address</b></h1>
    <p className="text-sm sm:text-base mt-4 mx-4 text-white  ">North Nazimabad</p>
    <h1 className="text-2xl sm:text-3xl font-bold text-white mx-4 mt-8"><b>Hours </b></h1>
    <p className="text-sm sm:text-base mt-4 mx-4 text-white">8:00 AM to 2:30PM</p>
    <p className="text-sm sm:text-base  mx-4 text-white ">All days</p>
   </div>
   </section>
  </div>
 )
}