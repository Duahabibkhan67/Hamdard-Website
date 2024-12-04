import Image from "next/image";
import Link from "next/link";
export default function Testimon(){
 return(
  <div>
   <section className="bg-slate-300 my-3" >
    <h1 className="font-bold text-2xl  lg:text-4xl text-white   my-9 text-center ">Testimonials ___ o ___</h1>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">


    <div className="text-center flex-col bg-white mx-2  lg:mx-4 my-6 h-auto w-80">

   <Image className="ml-32" height={100 } width={100} src="/star.png" alt="star"></Image>
   <p className="text-xl  text-gray-600 my-4 ">
   The campus is beautiful, well-maintained, and secure. There are always campus officers visible, and there are emergency call boxes around the campus. The new science building is also impressive and offers state-of-the-art labs for my sons research projects.
   </p>
 <div className="flex mx-2 lg:mx-6 mt-16">
<h1 className="font-bold text-white bg-amber-950 rounded-full size-9 text-3xl ">S</h1>
<h2 className="text-bold mx-2 text-1xl"><b>Syeda Romaisa Shah</b></h2>
 </div>
 </div>


 <div className="text-center flex-col  bg-white  mx-2  lg:mx-2 my-6 h-auto w-80">

<Image className="ml-32" height={100 } width={100} src="/star.png" alt="star"></Image>
<p className="text-xl text-gray-600 my-4 "
>
My son has benefited greatly from the tutoring center and academic advising at ABC University. The staff really care about student success. We’re also grateful for the mental health services—theyve made a real difference in helping him cope with stress.
</p>
<div className="flex mx-2 lg:mx-6 mt-16">
<h1 className="font-bold text-white bg-red-800 rounded-full size-9 text-3xl ">H</h1>
<h2 className="text-bold mx-2 text-1xl"><b>Hafiz Naeem</b></h2>
</div>
</div>
<div className="text-center flex-col bg-white  lg:mx-4 mx-2  my-6 h-auto w-80">

<Image className="ml-32" height={100 } width={100} src="/star.png" alt="star"></Image>
<p className="text-xl  text-gray-600 my-4   text-center">
Hamdard  College is quite affordable compared to other colleges, and they offer <br /> a number  of scholarships that helped reduce tuition costs. The financial aid office was very helpful and guided us through the process, which made things a lot easier. Overall, we feel its a great value for the education provided.
</p>
<div className="flex mx-2 lg:mx-6 my-9">
<h1 className="font-bold text-white bg-orange-800 rounded-full size-9 text-3xl ">T</h1>
<h2 className="text-bold mx-2 text-1xl"><b>Tahir Villa</b></h2>
</div>
</div>
 </section>
 

    
   </section>
  </div>
 )
}