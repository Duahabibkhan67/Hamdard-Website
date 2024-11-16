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
<div className="flex justify-between shadow-black">
<section className=" sm:grid grid-cols-3   " >
 <div className="flex justify-between">
 <div className="sm:flex  mx-4  gap-2 ">
<Image className="sm:h sm:w" height={5} width={60} src="/hamlogo.png" alt="hamlogo"></Image>
<h1 className="sm:text-6xl  sm:mt-12 sm:text-left  text-black "><b className="text-green-700">Hamdard</b></h1>
</div>
</div>
<div className=" gap-2 sm:my-9 sm:mt-14  hidden md:block ">
<Link href="/"><button className="text-2xl font-serif  mx-4  hover:scale-110 hover:underline-offset-1"><b>Home</b></button></Link>
<Link href="/about"><button className="text-2xl  font-serif  mx-4  hover:scale-110 hover:underline-offset-1"><b>About</b></button></Link>
<Link href="/events"><button  className="text-2xl font-serif  mx-4 hover:scale-110"><b>Events</b></button></Link>
<Link href="/faculty"><button className="text-2xl  font-serif  hover:scale-110"> <b>Faculty</b></button></Link>
</div>
<div className=" hidden md:block ">
 <div className="flex">
<Link href="/apply"><button className="text-2xl mt-14   ml-40 flex bg-green-700 text-white sm:h-10 sm:w-30 hover:scale-110 hover:bg-lime-600"><b className="my-1 mx-2">Apply</b></button></Link>
<Link href="/contact"><button className="text-2xl mt-14 ml-8 flex   bg-green-700 text-white sm:h-10 sm:w-30 hover:scale-110 hover:bg-lime-600"><b className="my-1 mx-2">Contact</b></button></Link>
</div>
</div>
</section>

<Sheet>
  <SheetTrigger className="md:hidden h-11 w-3 mr-28 mt-16  ">
  <TiThMenu />
   </SheetTrigger>
  <SheetContent  className="bg-black text-white">
  
  <div className="flex-col    ">
<Link href="/"><button className="text-2xl flex mx-9  hover:scale-110 hover:underline-offset-1"><b>Home</b></button></Link>
<Link href="/about"><button className="text-2xl  flex mx-9  hover:scale-110 hover:underline-offset-1"><b>About</b></button></Link>
<Link href="/events"><button  className="text-2xl flex  mx-9 hover:scale-110"><b>Events</b></button></Link>
<Link href="/faculty"><button className="text-2xl flex  mx-9  hover:scale-110"> <b>Faculty</b></button></Link>
</div>
<div className="flex-col">
<Link href="/apply"><button className="text-2xl mx-9  flex  hover:scale-110 "><b>Apply</b></button></Link>
<Link href="/contact"><button className="text-2xl mx-9  flex   hover:scale-110 "><b >Contact</b></button></Link>
</div>

  </SheetContent>
</Sheet>

</div>
 )
}
