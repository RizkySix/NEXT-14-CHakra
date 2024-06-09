"use client"

import { Image } from "@chakra-ui/react"

import Link from "next/link"
import { Advantages } from "./advantages"

export function Hero() {
    return (
       
          <div className='hero-img w-full relative'>
          <Image src="/hero.jpg" alt="hero-img" objectFit="cover" className="h-screen w-full" />

          <div className="advantages absolute top-[30%] md:top-64 left-1/2 transform -translate-x-1/2 w-full mx-auto">
            <Advantages />
          </div>

          <div className="text-box absolute bottom-[5%] left-1/2 transform -translate-x-1/2 w-full">
           <div className="flex flex-col gap-5">
            <span className="text-sm md:text-base font-bold text-white text-center">{process.env.APP_NAME ?? "Master Silver Class"}</span>
            <span className="text-xl md:text-3xl font-bold text-white text-center">Experience Our CLass</span>
            <span className="text-xs md:text-base font-bold text-white text-center underline cursor-pointer"><Link href={'#location'}>LOCATION</Link></span>
           </div>
          </div>
        </div>
       
    )
}