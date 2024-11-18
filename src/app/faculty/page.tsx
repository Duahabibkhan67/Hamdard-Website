import Image from "next/image";
import Link from "next/link";
export default function Faculty(){
 return(
  <div className="bg-slate-50">
    <div className="relative hidden md:block bg-[url('/faculty.jpg')] bg-cover brightness-75 bg-center xl:h-96">
            <div className="absolute hidden lg:block inset-0  item-center justify-center">
                <h1 className="text-white text-5xl ml-96 mt-24  font-bold  bg-opacity-50 p-4 rounded">
                Meet Our Senior Faculty <br /> 
                <h2 className="text-2xl text-black hidden lg:block">Hamdard Intermediate College ,Faculty</h2>
                </h1>
                
                </div>
            </div>
            <h1 className="sm:text-4xl sm:ml-96 mt-11"><b>Our Faculty</b></h1>
   <section className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 my-8 ml-9">
 
   <div>
  <Image className="rounded-2xl sm:mx-5 my-3" height={300} width={300} src="/tahir.jpg" alt="img"></Image>
 </div>
 <div>
  <Image className="rounded-2xl sm:mx-5 my-3"  height={300} width={300} src="/osama.jpg" alt="img"></Image>
 </div>
 <div>
  <Image className="rounded-2xl sm:mx-5 my-3"  height={300} width={300} src="/salman.jpg" alt="img"></Image>
 </div>
 <div>
  <Image className="rounded-2xl sm:mx-5 my-3"  height={300} width={300} src="/muzammil.jpg" alt="img"></Image>
 </div>
 <div>

  <Image className="rounded-2xl sm:mx-5 my-3"  height={300} width={300} src="/afzal.jpg" alt="img"></Image>
 </div>
 <div>
  <Image className="rounded-2xl sm:mx-5 my-3"  height={300} width={300} src="/ahsan.jpg" alt="img"></Image>
 </div>
 <div>
  <Image className="rounded-2xl sm:mx-5 my-3"  height={300} width={300} src="/ahmed.jpg" alt="img"></Image>
 </div>
 <div>
  <Image className="rounded-2xl sm:mx-5 my-3"  height={300} width={300} src="/bakkar.jpg" alt="img"></Image>
 </div>
 <div>
  <Image className="rounded-2xl sm:mx-5 my-3"  height={300} width={300} src="/babar.jpg" alt="img"></Image>
 </div>
 <div>
  <Image className="rounded-2xl sm:mx-5 my-3"  height={300} width={300} src="/ateeq.jpg" alt="img"></Image>
 </div>
 <div>
  <Image className="rounded-2xl sm:mx-5 my-3"  height={300} width={300} src="/kashif.jpg" alt="img"></Image>
 </div>
 <div>
  <Image className="rounded-2xl sm:mx-5 my-3"  height={300} width={300} src="/khizer.jpg" alt="img"></Image>
 </div>
 <div>
  <Image className="rounded-2xl sm:mx-5 my-3"  height={300} width={300} src="/liaquat.jpg" alt="img"></Image>
 </div>
 <div>
  <Image className="rounded-2xl sm:mx-5 my-3"  height={300} width={300} src="/mubashir.jpg" alt="img"></Image>
 </div>
 <div>
  <Image className="rounded-2xl sm:mx-5 my-3"  height={300} width={300} src="/yumna.jpg" alt="img"></Image>
 </div>
   </section>
  </div>
 )
}