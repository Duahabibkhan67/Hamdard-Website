import Link from "next/link";
import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import {
 Sheet,
 SheetContent,
 SheetDescription,
 SheetHeader,
 SheetTitle,
 SheetTrigger,
} from "@/components/ui/sheet";

export default function Header(){
 return(
<div className="flex justify-between items-center px-4 py-3  shadow-md">
<section className=" flex items-center justify-between w-full  " >

 <div className="flex items-center gap-4 ">
<Image className="h-auto w-auto" height={50} width={60} src="/hamlogo.png" alt="hamlogo"></Image>
<h1 className="text-2xl  sm:text-3xl md:text-4xl font-bold text-black "><span className="text-green-700">Hamdard</span></h1>
</div>

<div className=" gap-6 items-center hidden md:flex ">
<Link href="/"><button className="text-lg font-serif   hover:scale-110 hover:underline-offset-2"><b>Home</b></button></Link>
<Link href="/about"><button className="text-lg  font-serif  hover:scale-110 hover:underline-offset-2"><b>About</b></button></Link>
<Link href="/events"><button  className="text-lg font-serif  hover:scale-110"><b>Events</b></button></Link>
<Link href="/faculty"><button className="text-lg font-serif  hover:scale-110"> <b>Faculty</b></button></Link>
</div>
<div className=" hidden md:flex items-center gap-4 ">
 
<Link href="/apply"><button className="text-lg    py-2 px-4 rounded bg-green-700 text-white sm:h-10 sm:w-30 hover:scale-110 hover:bg-lime-600"><b className="my-1 mx-2">Apply</b></button></Link>
<Link href="/contact"><button className="text-lg py-2 px-4 rounded     bg-green-700 text-white sm:h-10 sm:w-30 hover:scale-110 hover:bg-lime-600"><b className="my-1 mx-2">Contact</b></button></Link>

</div>
</section>

<Sheet>
  <SheetTrigger className="md:hidden text-3xl  ">
  <TiThMenu />
   </SheetTrigger>
  <SheetContent  className="bg-black text-white">
  
  <div className="flex-col  flex gap-4 px-6 py-4   ">
<Link href="/"><button className="text-xl  hover:scale-110 hover:underline-offset-1"><b>Home</b></button></Link>
<Link href="/about"><button className="text-xl    hover:scale-110 hover:underline-offset-1"><b>About</b></button></Link>
<Link href="/events"><button  className="text-xl hover:scale-110"><b>Events</b></button></Link>
<Link href="/faculty"><button className="text-xl   hover:scale-110"> <b>Faculty</b></button></Link>


<Link href="/apply"><button className="text-xl  hover:scale-110 "><b>Apply</b></button></Link>
<Link href="/contact"><button className="text-xl    hover:scale-110 "><b >Contact</b></button></Link>
</div>

  </SheetContent>
</Sheet>

</div>
 )
}
