import Image from "next/image";
import Link from "next/link";

import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export default function Footer(){
 return(
  <div>
  
   <section className="sm:grid  grid-cols-4 bg-green-700 mt-24">
    <div>
  
<h1 className="sm:text-3xl sm:mt-11 mx-9 text-black "><b className="text-white">Hamdard</b><b> <br />Intermediate <br /> College</b></h1>
   <p className="sm:text-1xl text-white sm:mx-7 sm:my-7">We believe it has the power to do small things.</p>
   <p className="text-1xl text-white sm:mx-7 my-7">Interested in working with us?</p>
   <p className="text-1xl text-white my-2 sm:mx-7">Info@example.com</p>
<p className="flex mx-9 hover:scale-110  gap-6"><FaFacebookF /><FaXTwitter /><FaWhatsapp /> <FaInstagram /></p>
   </div>
   <div>
    <h1 className="text-3xl  sm:mx-7 mt-10"><b>Explore</b></h1>

 <ul className="text-1xl text-white sm:mx-7 ">
  <li className="my-3">
  The Founder
  </li>
  <li className="my-2">
  The Chancellor
  </li>
  <li className="my-2">
  The Vice Chancellor
  </li>
  <li className="my-2">
  Principal
  </li>
  <li className="my-2">
  Vice Principal
  </li>
 </ul>
   </div>
   <div>
    <h1 className="text-3xl mx-7 mt-10"><b>Links</b></h1>

 <ul className="text-1xl text-white sm:mx-7 ">
  <li className="my-2">
  Apply
  </li>
  <li className="my-2">
Admission
  </li>
  <li className="my-2">
Registration
 </li>
  <li className="my-2">
Fee Structure
  </li>

 </ul>
   </div>
   <div>
    <h1 className="text-3xl  sm:mx-7 mt-10"><b>Address</b></h1>
    <p className="text-1xl text-white sm:mx-7 my-3 ">North Nazimabad</p>
    <h1 className="text-3xl  sm:mx-7 mt-10"><b>Hours </b></h1>
    <p className="text-1xl text-white sm:mx-7 ">8:00 Am to 2:30pm</p>
    <p className="text-1xl text-white sm:mx-7 ">All days</p>
   </div>
   </section>
  </div>
 )
}