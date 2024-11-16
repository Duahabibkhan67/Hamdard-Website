import Image from "next/image"
export default function Student(){
 return(
  <div>
   <section className="sm:grid sm:grid-cols-3 bg-slate-200 m-16 ">
    <div className="sm:mx-3 my-6">
     <h1 className="text-green-700 sm:text-6xl mx-3"><b>1000+</b></h1>
     <p className="sm:mx-3">Student Enrolled</p>

    </div>
    <div className="sm:mx-3 my-6">
     <h1 className="text-green-700 sm:text-6xl sm:mx-3"><b>25+</b></h1>
     <p className="sm:mx-3">Qualified Teachers</p>

    </div>
    <div className="sm:mx-3 my-6">
     <h1 className="text-green-700 sm:text-6xl mx-3"><b>25+</b></h1>
     <p className="sm:mx-3">Comfortable Classes</p>
    </div>
   </section>

<section>
   <section className="sm:mx-11 my-11 sm:flex sm:justify-between white border border-accent rounded-2xl bg-slate-50">
    <div className="sm:mx-4 sm:mt-20">
     <p  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="  sm:ml-16 my-2 mt-10  text-1xl sm:text-sm ">
      Highly qualified, experienced & competent faculty. <br />
Limited number of students in each class. <br />
Ideal location, congenial environment & grand infrastructure. <br />
 Well-equipped Science & Computer laboratories. <br />
Well-stocked library. <br />
 70% Scholarship awarded in tuition & admission fee to the outstanding students. <br />
 50% discount in tuition & admission fee for Hamdard Public School students. <br />
     </p>
     
    </div>
    <div>
     <Image data-aos="fade-up"
     data-aos-duration="3000" className="sm:mr-20 sm:mt-20 mb-3" height={300} width={500} src="/card.jpg" alt="burger1"></Image>
    </div>
   </section>
   </section>
  </div>
 )
}