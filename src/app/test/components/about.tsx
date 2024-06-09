"use client"
import { useEffect } from 'react'
import { Image } from "@chakra-ui/react"
import AOS from 'aos'
import 'aos/dist/aos.css';

export function About() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false, // Pastikan animasi tidak hanya dijalankan sekali
        });

        // Memastikan AOS di-refresh setiap kali komponen dirender ulang
        AOS.refresh();
    }, []);
    
    return (
        
          <div className='about w-full relative my-11 lg:my-24 lg:px-11 px-4'>
          <div className="lg:clearfix">
            <div className="house-img lg:float-left lg:w-1/2">
                <Image data-aos="fade-up-right" src="/house.jpg" alt="hero-img" className="lg:h-screen h-auto w-full object-cover" />
            </div>

            <div  className="about-text lg:float-right mt-11 lg:mt-[20%] lg:w-2/6 lg:px-0 px-6 flex flex-col gap-4 justify-center">
                <div className="text-about w-3/4 hidden lg:block">
                    <h4 className="text-lg font-bold leading-9">About Master Silver Class</h4>
                    <p className="block">About Master Silver Class Born in Bali out of an artisan community, we are artisan hand-crafted jewelry unlike any other. Deeply rooted in self-expression and fueled by beauty and adventure, our designs fuse traditional craftsmanship with modern design.</p>
                </div>
                <Image data-aos="fade-up-left" src="/neckles.jpg" alt="hero-img" className="w-full h-[400px] lg:h-[700px] object-cover" />
                {/* <FadeInImage src="/neckles.jpg" alt="hero-img" className="w-full h-[400px] lg:h-[700px] object-cover" /> */}
                <div className="text-about w-full md:w-1/2 block lg:hidden">
                    <h4 className="text-sm font-bold leading-9">About Master Silver Class</h4>
                    <p className="block text-xs">About Master Silver Class Born in Bali out of an artisan community, we are artisan hand-crafted jewelry unlike any other. Deeply rooted in self-expression and fueled by beauty and adventure, our designs fuse traditional craftsmanship with modern design.</p>
                </div>
            </div>
        </div>
        </div>
        
    )
}