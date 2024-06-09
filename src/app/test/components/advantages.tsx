"use client"

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import { Card, CardBody, Image } from '@chakra-ui/react'
import 'swiper/css';
import { advantagesData } from '@/app/data/advantages.data';

export function Advantages() {
  const [advantageSlides, setAdvantageSlides] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let icon = "";
    const slides = advantagesData.map((advantage, index) => {
      switch (index) {
        case 0:
          icon = "/cool.svg";
          break;
        case 1:
          icon = "/star.svg";
          break;
        case 2:
          icon = "/rainbow.svg";
          break;
        case 3:
          icon = "/love.svg";
          break;
      }

      return (
        <SwiperSlide key={index} className='p-5'>
          <Card className='w-[300px] h-[150px] md:w-[400px] md:h-[200px] mx-auto opacity-80'>
            <CardBody className="flex justify-center text-center items-center font-bold text-sm md:text-base leading-5 md:leading-8">
              <div className="icon-text flex flex-col gap-3">
                <Image src={icon} alt="icon" className="h-11 w-11 md:h-14 md:w-14 mx-auto" />
                <p>{advantage}</p>
              </div>
            </CardBody>
          </Card>
        </SwiperSlide>
      );
    });

    setAdvantageSlides(slides);
  }, []);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2000
      }}
    >
      {advantageSlides}
    </Swiper>
  );
}
