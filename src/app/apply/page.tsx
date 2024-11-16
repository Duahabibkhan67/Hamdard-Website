import Image from "next/image";
import Link from "next/link";
export default function Apply(){
 return(
  <div className="bg-slate-50">
   
 
 <div className="sm:flex justify-between">
  <section className="bg-slate-900 sm:w-96 border border-accent sm:mx-11 my-11">

<div className="my-3">
   <label className="text-white mx-4 my-6 sm:h-20  font-serif" htmlFor="name">Enter your Name:
   <input className="bg-slate-950 mx-4 sm:h-8 sm:w-60  my-5" type="text" placeholder="Full Name"   required/>
   </label>
   </div>
  <div>
   <label className="text-white mx-4 my-6 sm:h-20   font-serif " htmlFor="email">Enter your Your Number:
   <input className="bg-slate-950 mx-4 h-8 sm:w-60  my-5" type="phone" placeholder="Your E-mail"  required/>
   </label>
</div>
<div>
   <label className="text-white mx-4 my-6 sm:h-20   font-serif " htmlFor="email">Enter your Your Matric:
   <input className="bg-slate-950 mx-4 h-8 sm:w-60  my-5" type="phone" placeholder="Your E-mail"  required/>
   </label>
</div>
<div  className=" flex    mx-4 h-20 ">
   <h1 className="text-1xl text-white font-serif">Select Field:</h1>
      <select className="h-5 w-42 mt-8 mr-10 cursor-pointer  bg-black text-white" name="person" id="person" >Select Field
       <option  value="2Person">Computer Science</option>
       <option value="3Person">Commerce</option>
       <option value="4Person">Pre-Medical</option>
       <option value="5Person">Pre-Engineering</option>
      </select>
    </div>
  <button className="  text-2xl  text-white border border-accent h-12 w-20  bg-gray-500 hover:bg-lime-800 hover:scale-105 my-6  mx-11   p-2 "><b>Send</b></button> 

</section>

<section>
   <Image data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="mr-52 mt-20 rounded-2xl" height={500} width={500} src="/stud.jpg" alt="contact"></Image>
</section>
</div>
 </div>
 )
}