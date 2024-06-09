"use client"

import { Button, Image } from "@chakra-ui/react"
import { Grid, GridItem } from '@chakra-ui/react'
import {
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react'
import "@/styles/custom-style.css"
import { MdCall, MdCheckCircle, MdDirectionsCarFilled, MdFaceRetouchingNatural, MdFastfood, MdGroups3, MdOutlineAttachMoney, MdOutlineFace2, MdOutlineFaceRetouchingOff, MdOutlineSportsRugby, MdSettings, MdWatchLater, MdWhatsapp } from "react-icons/md"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
  } from '@chakra-ui/react'
import { HelperFunc } from "@/lib/utils"
import { useRouter } from "next/navigation"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react"
import SpinnerLoader from "@/components/ui/loading-spiner"

export function Services() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const toBooking = async() => {
        setIsLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            router.push('/booking')
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

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
           {isLoading && (
           SpinnerLoader()
        )}
          <div className='service w-full relative lg:px-11 px-0'>
          <div className="">
            <div className="grid-img lg:float-left lg:w-1/2">
            <Grid
                h='auto'
                w='100%'
                templateRows='repeat(1, 1fr)'
                templateColumns='repeat(7, 1fr)'
                gap={4}
            >
                <GridItem colSpan={4}>
                <Image data-aos="flip-right" src="/serv-1.jpg" alt="serv-img" className="w-full h-[200px] lg:h-full object-cover" />
                {/* <FadeInImage src="/serv-1.jpg" alt="Service Image" className="w-full h-[200px] lg:h-full object-cover" /> */}
                 
                </GridItem>
                <GridItem colSpan={3}>
                    <Image data-aos="flip-right" src="/serv-2.jpg" alt="serv-img" className="w-full h-[200px] lg:h-full object-cover" />

                    {/* <FadeInImage src="/serv-2.jpg" alt="Service Image" className="w-full h-[200px] lg:h-full object-cover" /> */}
                   
                </GridItem>
                <GridItem colSpan={7}>
                    <Image data-aos="flip-left" src="/serv-3.jpg" alt="serv-img" className="w-full h-full object-cover" />
                    {/* <FadeInImage src="/serv-3.jpg" alt="Service Image" className="w-full h-full object-cover" /> */}
                </GridItem>
            </Grid>

            </div>

            <div className="service-text lg:float-right mt-11 lg:mt-[20%] lg:w-2/6 lg:px-0 px-6 flex flex-col gap-4 justify-center">
            <h4 className="text-sm lg:text-lg font-bold leading-7 lg:leading-9">JEWELRY MASTER CLASS</h4>
                <List spacing={3}>
                    <ListItem className="text-xs lg:text-base">
                        <ListIcon as={MdOutlineSportsRugby } color='green.500' />
                        Free 5 grams silver
                    </ListItem>
                    <ListItem className="text-xs lg:text-base">
                        <ListIcon as={MdWatchLater} color='green.500' />
                        2-Hour Class: Experience Intensive Learning Opportunities!
                    </ListItem>
                    <ListItem className="text-xs lg:text-base">
                        <ListIcon as={MdFaceRetouchingNatural} color='green.500' />
                        Guided by experienced instructure/teacher
                    </ListItem>
                  
                    <ListItem className="text-xs lg:text-base">
                        <ListIcon as={MdFastfood} color='green.500' />
                        Taste Balinese Tea, Coffee, and Traditional Cakes!
                    </ListItem>
                    <ListItem className="text-xs lg:text-base">
                        <ListIcon as={MdGroups3} color='green.500' />
                        One class session occupied a maximum of 8 people
                    </ListItem>
                </List>

                <Popover placement="bottom">
                <PopoverTrigger>
                <span className="details cursor-pointer text-xs lg:text-base">See more details</span>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                   
                    <PopoverBody>
                    <List spacing={3}>
                    <ListItem className="text-xs lg:text-base">
                        <ListIcon as={MdOutlineSportsRugby} color='green.500' />
                        Extra silver +IDR 50k/gram
                    </ListItem>
                    <ListItem className="text-xs lg:text-base">
                        <ListIcon as={MdWatchLater} color='green.500' />
                        Extra time +IDR 100k/hour
                    </ListItem>
                    <ListItem className="text-xs lg:text-base">
                        <ListIcon as={MdOutlineFaceRetouchingOff} color='green.500' />
                        Silver ratios can't be shared with another guest
                    </ListItem>
                    <ListItem className="text-xs lg:text-base">
                        <ListIcon as={MdOutlineAttachMoney} color='green.500' />
                        Additional cost if using gemstones
                    </ListItem>
                  
                    <ListItem className="text-xs lg:text-base">
                        <ListIcon as={MdOutlineFace2} color='green.500' />
                        Participants age between 8 to 65 years
                    </ListItem>
                    <ListItem className="text-xs lg:text-base">
                        <ListIcon as={MdWatchLater} color='green.500' />
                        Morning class start on 9.00 am and 11.00 am, afternoon class start on 2.00 pm and 4.00 pm
                    </ListItem>
                    <ListItem className="text-xs lg:text-base">
                        <ListIcon as={MdDirectionsCarFilled} color='green.500' />
                        We provide transport from Ubud Central +IDR 300k
                    </ListItem>
                </List>
                    </PopoverBody>
                </PopoverContent>
                </Popover>


                <div className="price lg:mt-3">
                    <p className="font-semibold leading-9 text-xs lg:text-base lg:mb-3">IDR 500k/Person</p>
                    <Button onClick={toBooking} rightIcon={<MdWhatsapp />} colorScheme='blue' variant='outline' size={HelperFunc.IsMobile() ? 'sm' : "md"}>
                       <span className="text-xs lg:text-base"> Book now</span>
                    </Button>
                </div>
            </div>

            
        </div>
        </div>
        </>
    )
}