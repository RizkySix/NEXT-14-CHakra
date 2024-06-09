"use client"
import { useEffect } from 'react'
import { Img } from "@chakra-ui/react"
import "@/styles/custom-style.css"
import AOS from 'aos'
import 'aos/dist/aos.css';

export function Owner() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // Pastikan animasi tidak hanya dijalankan sekali
        });

        // Memastikan AOS di-refresh setiap kali komponen dirender ulang
        AOS.refresh();
    }, []);
    
    return (
        <>
          <div className='owner w-full relative lg:px-11 px-4 '>
      <div className="owner-header-title mx-auto my-11 lg:my-24 text-center flex flex-col items-center">
        <h1 className="text-sm lg:text-lg font-bold leading-7 lg:leading-9">DOCUMENTATIONS OF OUR LOVELY STUDENTS</h1>
        <p className="text-xs lg:text-base mb-4 lg:mb-8 px-1 lg:px-0 text-center max-w-xl">
          Discover our shop offering a wide range of high quality jewellery, located in strategic Ubud locations.
        </p>
      </div>

      <div className="lg:clearfix">
        <div className="house-img lg:float-left lg:w-1/2">
          <Img data-aos="fade-up-right" src="/made.jpeg" alt="owner-img" className="lg:h-screen h-auto w-full object-cover" />
        </div>

        <div className="owner-text lg:float-right mt-11 lg:mt-[20%] lg:w-2/6 lg:px-0 px-6 flex flex-col gap-4 justify-center">
          <div className="text-owner w-3/4 hidden lg:block">
            <h4 className="text-lg font-bold leading-9">Who Is Made Kriting?</h4>
            <p className="block">Owner Master Silver Class Born in Bali out of an artisan community, we are artisan hand-crafted jewelry unlike any other. Deeply rooted in self-expression and fueled by beauty and adventure, our designs fuse traditional craftsmanship with modern design.</p>
          </div>

          <div className="text-owner w-full md:w-1/2 block lg:hidden">
            <h4 className="text-sm font-bold leading-9">Who Is Made Kriting?</h4>
            <p className="block text-xs">Owner Master Silver Class Born in Bali out of an artisan community, we are artisan hand-crafted jewelry unlike any other. Deeply rooted in self-expression and fueled by beauty and adventure, our designs fuse traditional craftsmanship with modern design.</p>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}