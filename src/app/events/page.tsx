import Image from "next/image";
import Link from "next/link";
export default function Events(){
return(
 <div>
  <section>
  <div className="bg-slate-50 xl:grid xl:grid-cols-3 xl:h-72  mx-11 my-9  ">
 
     
     <h1 className="text-green-700 sm:text-1xl  font-serif  p-4 rounded mt-14">
    Hamdard Intermediate College Picnic was truly a memorable event.The support of our university
    ,staff,and <br /> especially our students made it special.Every moment <br /> was filled with joy,and
    hopefully, <br />we will achieve the same success in future events together.
      </h1>
      
        <Image className="  my-4 mt-11" height={300} width={300} src="/picnic1.jpg" alt="hero"></Image>
        <Image className="xl:mx-3  mt-11 my-4" height={300} width={300} src="/picnic2.jpg" alt="hero"></Image>
     

</div>
  </section>
  <section>
  <div className="bg-slate-50 xl:grid xl:grid-cols-3 xl:h-72  mx-11 my-9  ">
 
     
     <h1 className="text-green-700 sm:text-1xl  font-serif  p-4 rounded mt-14">
   In loving memory of Shaheed Hakeem Mohammad Said,forever in our heart,Your journey may ended but memories and teachings remain.
      </h1>
      
        <Image className="  my-4 mt-11" height={300} width={300} src="/hakim1.jpg" alt="hero"></Image>
        <Image className="xl:mx-3  mt-11 my-4" height={300} width={300} src="/hakim2.jpg" alt="hero"></Image>
     

</div>
  </section>

  <section>
  <div className="bg-slate-50 xl:grid xl:grid-cols-3 xl:h-72  mx-11  my-9 ">
 
     
     <h1 className="text-green-700 sm:text-1xl  font-serif mt-14 p-4 rounded">
      Visit to State Bank of Pakistan Museum <br />
     Commerce wings with faculty members <br />
     The trip aims to provide valuable learning expriences outside the classroom,fostering curiosity,teamwork and exploration.
       </h1>
      <div className="xl:flex justify-between">
        <Image className=" xl:mt-11 my-4 " height={300} width={300} src="/state1.jpg" alt="hero"></Image>
        <Image className="xl:mx-3 xl:mt-11  my-4" height={300} width={300} src="/state2.jpg" alt="hero"></Image>
       
  </div>
</div>
  </section>



  <section>
  <div className="bg-slate-50 xl:grid xl:grid-cols-3 xl:h-72  mx-11  my-9 ">

     
     <h1 className="text-green-700 sm:text-1xl  font-serif  p-4 rounded mt-14">
   Hamdard Intermediate College conducted a Volley Ball Competition between boys. <br />A best and interesting match was it.
      </h1>
      <div className="xl:flex justify-between">
        <Image className=" xl:mt-11 my-4 " height={300} width={300} src="/sport1.jpg" alt="hero"></Image>
        <Image className="xl:mx-3 xl:mt-11  my-4" height={300} width={300} src="/sport2.jpg" alt="hero"></Image>
        </div>     

</div>
  </section>


  <section>
  <div className="bg-slate-50 xl:grid xl:grid-cols-3 xl:h-72  mx-11  my-9 ">

     
     <h1 className="text-green-700 sm:text-1xl  font-serif  p-4 rounded mt-14">
     Hamdard Intermediate College conducted a Volley Ball Competition between Girls. <br />A best and interesting match was it.
      </h1>
      <div className="xl:flex justify-between">
        <Image className=" xl:mx-11 my-4 " height={200} width={200} src="/sportg1.jpg" alt="hero"></Image>
        <Image className="xl:mx-11  my-4" height={200} width={200} src="/sportg2.jpg" alt="hero"></Image>
        </div>     

</div>
  </section>

  <section>
  <div className="bg-slate-50 xl:grid xl:grid-cols-3 xl:h-72  mx-11  my-9 ">

     
     <h1 className="text-green-700 sm:text-1xl  font-serif  p-4 rounded mt-14">
    Hamdard Intermediate College Celeberated A Eid-Milad-e-Nabi.Full support by faculty,all students.
      </h1>
      <div className="xl:flex justify-between">
        <Image className=" xl:mt-16 my-4 " height={200} width={300} src="/milad1.jpg" alt="hero"></Image>
        <Image className="xl:mx-3 xl:mt-16  my-4" height={200} width={300} src="/milad2.jpg" alt="hero"></Image>
        </div>     

</div>
  </section>


  <section>
  <div className="bg-slate-50 xl:grid xl:grid-cols-3 xl:h-72  mx-11  my-9 ">

     
     <h1 className="text-green-700 sm:text-1xl  font-serif  p-4 rounded mt-14">
   Empower yourself with knowledgr,strength,and confidence.Self-Defense is not a skill.Its a mindset. <br /> A fantastic session conducted,and all the credit goes to our Computer Science students who shared their skills with rest of our students.
      </h1>
      <div className="xl:flex justify-between">
        <Image className=" xl:mt-16 my-4 " height={200} width={300} src="/kungfo.jpg" alt="hero"></Image>
        <Image className="xl:mx-3 xl:mt-16  my-4" height={200} width={300} src="/kungfo.jpg" alt="hero"></Image>
        </div>     

</div>
  </section>

  
  
 </div>
)


}