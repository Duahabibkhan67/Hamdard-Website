import Image from "next/image";
import Link from "next/link";
export default function Contact(){
 return(
  <div className="bg-slate-50">
   <div className="xl:flex xl:justify-between">
    <section>
   <section className="my-4">
    <div className=" mx-9">
     <h1 className="xl:text-4xl font-serif my-6 "><b>Get In touch</b></h1>
     <h1 className="xl:text-2xl font-serif text-gray-700 ">Have a question or just want to say hi? We love to hear from you.</h1>
    </div>
   </section>
   <section>
    <div>
    <input className="bg-slate-200 mx-4 xl:h-8 xl:w-72  my-5" type="text" placeholder="Full Name"   required/>
    <input className="bg-slate-200 mx-4 xl:h-8 xl:w-72  my-5" type="email" placeholder="Enter Your E-mail"   required/>
    <input className="bg-slate-200 mx-4 xl:h-8 xl:w-96  my-5" type="text" placeholder="Your Subject"   required/>
    <textarea  className="bg-slate-200   mx-4 xl:w-1/2 " name="Message" id="msg" placeholder="Your Message"  rows={5}>Message</textarea>
    </div>
    <button className="sm:text-2xl text-white sm:ml-56 my-9 border border-accent bg-blue-950 xl:h-12 xl:w-60 rounded-2xl hover:bg-stone-600">Send Message</button>
   </section></section>

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