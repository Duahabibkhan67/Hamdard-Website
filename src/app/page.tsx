'use client';
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/hero";
import Card from "@/components/card";
import Student from "@/components/student";
import Admission from "@/components/admission";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home(){
  useEffect(()=>{
    AOS.init({
     easing:"ease-out-back",
     duration:1200,
     delay:200,
     mirror:true,
     anchorPlacement:"bottom-bottom",
     offset:160,
    })
    AOS.refresh();
   } ,[]);
 return(
  <div>
< Hero />
< Admission />
< Card />
< Student />
  </div>
 )
}