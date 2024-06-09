"use client"

import { Image } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export default function SimpleNavbar() {


  return (
    <>
    <div className='navbar sticky top-0 z-50'>
    <div className="w-full p-3 bg-white border-b flex flex-col gap-3 mx-auto">
           <Link href={'/'}>
           <Image src='/logo.png' className='w-11 h-14 mx-auto' />
            <h5 className="text-center font-bold text-base md:text-lg">
              {process.env.APP_NAME ?? "Master Silver Class"}
            </h5>
           </Link>
          </div>
    </div>
    </>
  )
}