import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/apply";
export default function Apply(){
 return(
  <div className="bg-slate-50">
   
 
 <div className="sm:flex justify-between">
  <section className="bg-slate-500 sm:w-96 shadow-md sm:mx-11 my-11">

< ContactForm />

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