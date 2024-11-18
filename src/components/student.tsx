import Image from "next/image"
export default function Student(){
 return(
  <div className="bg-white">
   <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-12 sm:m-4 m-2 md:m-4 lg:m-6   rounded-lg bg-slate-200 ">
    <div className="text-center sm:text-left">
     <h1 className="text-green-700 text-4xl sm:text-6xl font-bold">
      <b>1000+</b>
      </h1>
     <p className="text-lg sm:text-xl mt-2">Student Enrolled</p>

    </div>
    <div className="text-center sm:text-left">
     <h1 className="text-green-700 text-4xl sm:text-6xl font-bold"><b>25+</b></h1>
     <p className="text-lg sm:text-xl mt-2">Qualified Teachers</p>

    </div>
    <div className="text-center sm:text-left">
     <h1 className="text-green-700 text-4xl sm:text-6xl font-bold"><b>25+</b></h1>
     <p className="text-lg sm:text-xl mt-2">Comfortable Classes</p>
    </div>
   </section>

<section >
   <section className="sm:p-12 p-6 m-2 sm:m-4 md:m-6 lg:m-8 border border-gray-300 bg-slate-50 rounded-lg flex flex-col lg:flex-row items-center ">
    <div className="flex-1 sm:pr-6">
     <p  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-base sm:text-lg lg:text-xl text-gray-700 leading-6 lg:leading-8     ">
      Highly qualified, experienced & competent faculty. <br />
Limited number of students in each class. <br />
Ideal location, congenial environment & grand infrastructure. <br />
 Well-equipped Science & Computer laboratories. <br />
Well-stocked library. <br />
 70% Scholarship awarded in tuition & admission fee to the outstanding students. <br />
 50% discount in tuition & admission fee for Hamdard Public School students. <br />
     </p>
     
    </div>
    <div className="flex-1 flex justify-center mt-6 lg:mt-0">
     <Image data-aos="fade-up"
     data-aos-duration="3000" className="rounded-lg" height={300} width={500} src="/card.jpg" alt="burger1"></Image>
    </div>
   </section>
   </section>
  </div>
 )
}