import Image from "next/image";
import Link from "next/link";
export default function About(){
 return(
  <div>
    <div className="relative hidden md:block bg-[url('/faculty.jpg')] bg-cover brightness-75 sm:bg-center sm:h-96">
            <div className="absolute inset-0 sm:flex sm:item-center sm:justify-center">
                <h1 className="text-white sm:text-5xl mt-24  font-bold   p-4 rounded">
       About Our Mentors <br /> 
                </h1>
                </div>  </div>
                <div className="sm:justify-center items-center sm:mx-11 my-5">
                  <div className="flex justify-center">
                  
                  <Image className="" height={200} width={200} src="/founder.png" alt="founder"></Image>
                  </div>
                  <div className="flex justify-center">
                  <h1 className="text-green-700 sm:text-3xl font-bold "><b>HAKIM MUHAMMAD SAID</b></h1></div>
                  </div>
                  <p className="text-1xl font-serif text-gray-500 sm:mx-9">
                  Shaheed Hakim Mohammed Said (1920-1998) established Hamdard Dawakhana
                   Pakistan in 1948. Within few years, the herbal medicines products of 
                   Hamdard became household names. The phenomenal business success of 
                   Hamdard brands is a legendary part of the business history of Pakistan.
                    The name Hamdard however acquired a still wider meaning, when Shaheed 
                Hakim Mohammed Said founded Hamdard University in 1991. The establishment of a university which could enliven the intellectual traditions of the educational institutions of the Golden Era of Muslim Civilization, had always been his most cherished dream. In fact, it was the central point towards which all his endeavors were directed. The founding of the University was the culmination of a long dedicated and continued effort which spanned over his whole life. Apart from being a great educational leader, Shaheed Hakim Mohammed Said was also one of the finest exponents of Eastern Medicine, who had treated millions of patients the world over by the time of his martyrdom (Shahadat) in October 1998. In the fifty years of his active career as a practitioner of Greco-Arab medicine par excellence, Shaheed Hakim Mohammed Said also achieved international fame as a scholar and researcher in medicine. In recognition of his meritorious services and scholarly achievements he was awarded Nishan-e-lmtiaz (Posthumous) by the Government of Pakistan, in 2002.
                  </p>
                
                <section className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="mx-11 lg:mx-11 md:mx-11 sm:mx-11 my-5 bg-slate-200 border border-accent h-auto w-72 sm:w-96 md:w-1/2 lg:w-1/2 rounded-2xl">
                  <div className="">
                  <Image className="sm:ml-28 mt-2" height={200} width={200} src="/sadia.jpg" alt="founder"></Image>
                  <h1 className="text-green-900 sm:text-3xl sm:ml-24 "><b>Mrs. Sadia Rashid</b></h1>
                  <h1 className="sm:text-2xl text-green-700 sm:ml-4">President, Hamdard Foundation Pakistan & Chancellor Hamdard University</h1>
                  </div>
                  <p className="text-1xl sm:ml-2 font-serif text-gray-500">
                  Hamdard Intermediate College for Science & Commerce (HICSC) is an educational project of Shaheed Hakim Mohammed Said whose aim was always to offer, in one spot, education from Primary to the Post-graduate level – the spot being Madinat al-Hikmah. The revival of Hamdard Intermediate College has indeed re-opened avenues for many aspiring students to move forward from school to post-graduate level, and get closer to achieving their educational goals.
                  </p>
                </div>
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="mx-11 lg:mx-11 md:mx-11 sm:mx-11 my-5 bg-slate-200 border border-accent h-auto w-72 sm:w-96 md:w-1/2 lg:w-1/2  rounded-2xl">
                  <div >
                  <Image className="md:ml-36 mt-6 " height={200} width={200} src="/vice.jpg" alt="founder"></Image>
                  <h1 className="text-green-900 sm:text-3xl sm:ml-24 "><b>Prof. Dr. Syed Shabib Ul Hassan</b></h1>
                  <h1 className="sm:text-2xl text-green-700 sm:ml-12">Vice Chancellor Hamdard University</h1>
                  </div>
                  <p className="text-1xl font-serif sm:ml-2 text-gray-500">
                  Hamdard University has a mission to nurture the youth into enlightened future of mankind as expressed by the Founder Chancellor, Shaheed Hakim Mohammed Said:

                 “Our main role is to develop our students in the qualities of devotion, love, determination and service to humanity”
                  </p>
                </div>
                </section>
                
                <div className="sm:justify-center items-center sm:mx-11 my-5 bg-slate-50">
                  <div className="sm:ml-96 mt-12">
                  <Image className="ml-14 " height={200} width={200} src="/principal.jpg" alt="founder"></Image>
                  <h1 className="text-green-700 sm:text-3xl font-bold "><b>Ms. Shakeela Khurram</b></h1>
                  <h1 className="sm:text-2xl text-green-700 ">Principal, Hamdard Intermediate College</h1>
                  </div>
                  <p className="text-1xl sm:mx-6 font-serif text-gray-500">
                  “A vision is not just a picture of what could be; instead it is an appeal to our better selves and a call to become something more” <br />
                  am very happy with the progress the college has made by absorbing in its students value based education synergized with modern teaching-learning methods to produce a generation of well informed and emotionally sound generation. I am positive that in times to come we will continue this journey with elevated enthusiasm and persistently provide a platform of holistic learning to the young generation of learners. <br />

In achieving our goals, we are fortunate to have a team of committed and expert teaching and support staff that ensure the learning environment of our students is the best it can be. Our unique teaching and learning methods with the right blend of theory and practice takes the students towards industry readiness and global excellence. We believe in the capacity of every student to grow and excel in his/her field as everyone is gifted with different talents and infinite potentials. We seek to instill in our students a passion for learning and understanding required for a positive contribution to the society.

            <br />HAMDARD INTERMEDIATE COLLEGE is a vibrant learning community that encourages partnership between students, parents and the management. The strength of this partnership is certainly reflected in the growth and success of our students.

<br />We are partners in learning with our students and seek to deepen their knowledge, provide enriching and innovative learning experiences, while also gently urging our students to come out of their comfort zone to attempt new challenges.
                  </p>
                </div>


                <div className="sm:justify-center items-center sm:mx-11 my-5 bg-slate-50">
                  <div className="sm:ml-96 mt-12">
                  <Image className="ml-14 " height={200} width={200} src="/viceprin.jpg" alt="founder"></Image>
                  <h1 className="text-green-700 sm:text-3xl font-bold "><b>Mr. Adnan Ahmad Khan</b></h1>
                  <h1 className="sm:text-2xl text-green-700 ">Vice Principal, Hamdard Intermediate College</h1>
                  </div>
                  <p className="text-1xl sm:mx-6 font-serif text-gray-500">
                  “Imagination is more important than knowledge, while knowledge defines all we currently know and understand, imagination points to all we might yet discover and create”

With 13 years of Academic Experience at Hamdard University, I strongly believe that Imparting Education is a noble task and taking this responsibility is not easy, thus, it is a job of a reliable and competent team to accomplish this successfully and efficiently.  At Hamdard Intermediate College, we try our best to achieve this goal. <br />

<br />An educational institute is always a world in miniature, where one receives training for life, where effective, meaningful and joyful learning takes place. It is here that we begin to learn our Lessons of life – to accept challenges, face competition, defeat and failure and rejoice at victory and triumph.  We want our students to develop valuable life skills and become more independent, resilient and confident individuals. Our team of qualified and experienced teachers has been specially trained to provide personalized attention to every student.

 <br />Today, the role of education is not only to pursue academic excellence but also to motivate and empower students to be lifelong learners’ critical thinkers and productive members of an ever changing global society while academic excellence is our major thrust, the college is also devoted to prepare our students for life, groom them to face the challenges of tomorrow.
                  </p>
                </div>
  </div>
 )
}