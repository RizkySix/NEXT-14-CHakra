"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@chakra-ui/react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/leaf.gif"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10" data-aos="fade-down">
        <Image src={'/logo.png'} alt="Logo" width={80} height={80} />
      </div>
      <h1 className="relative z-10 text-6xl font-bold text-blue-600 mt-8" data-aos="fade-up">404</h1>
      <h2 className="relative z-10 text-2xl font-semibold text-gray-800 mt-4" data-aos="fade-up" data-aos-delay="200">
        Page Not Found
      </h2>
      <p className="relative z-10 text-gray-600 mt-2 mb-8 text-center" data-aos="fade-up" data-aos-delay="400">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="relative z-10" data-aos="fade-up" data-aos-delay="600">
        <Button
          colorScheme="blue"
          size="lg"
          onClick={() => router.push('/')}
        >
          Go Back Home
        </Button>
      </div>
    </div></>
  );
}

export default NotFoundPage;
