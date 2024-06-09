"use client"

import { HelperFunc } from '@/lib/utils';
import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
    FormLabel,
    Switch,
  } from '@chakra-ui/react';
import { useState } from 'react';
import Datepicker from "react-tailwindcss-datepicker"; 
import { addDays } from 'date-fns';
import SimpleFooter from '@/components/layouts/simple-footer';

export function Form() {
    const avatars = [
        {
          name: 'Ryan Florence',
          url: 'https://bit.ly/ryan-florence',
        },
        {
          name: 'Segun Adebayo',
          url: 'https://bit.ly/sage-adebayo',
        },
        {
          name: 'Kent Dodds',
          url: 'https://bit.ly/kent-c-dodds',
        },
        {
          name: 'Prosper Otemuyiwa',
          url: 'https://bit.ly/prosper-baba',
        },
        {
          name: 'Christian Nwamba',
          url: 'https://bit.ly/code-beast',
        },
      ];

      const [value, setValue] = useState({ 
        startDate: null ,
        endDate: null 
    }); 
        
    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        date: "",
        transport: false,
      });
    

    const handleValueChange = (newValue : any) => {
        setValue(newValue)
        dataForm.date = new Date(newValue.startDate).toDateString()
    } 

 
      const handleInputChange = (e : any) => {
        setDataForm({
          ...dataForm,
          [e.target.name]: e.target.value,
        });
      };
    
     
      const handleSwitchChange = (e : any) => {
        setDataForm({
          ...dataForm,
          transport: e.target.checked,
        });
      };
    
      const handleSubmit = (e : any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
       
        const name = formData.get('name');
        const email = formData.get('email');
        const date = dataForm.date
        const transport = formData.get('transport') === 'on' ? 'Yes' : 'No';
        const message = `Hello,

            I would like to book a spot in the Silver Class. Here are my details:

            My name: ${name}
            My email: ${email}
            Preferred Date: ${date}
            Transport Needed: ${transport} ${transport ? '(Availlable to pay 300k IDR transport from Ubud Cenntral)' : ''}

            Thank you!`;
        const whatsAppUrl = `https://wa.me/6285963108412?text=${encodeURIComponent(message)}`;
        window.open(whatsAppUrl, '_blank');
      };
    return (
       <div>
         <div className="px-4 lg:px-11 lg:w-1/2 mx-auto lg:flex lg:h-screen justify-center">
          <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'full'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            Practicing The Best Silver Class In Bali{' '}
            <Text
              as={'span'}
              bgGradient="linear(to-r, red.400,pink.400)"
              bgClip="text">
              &
            </Text>{' '}
            With Proffesional Instructure
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  size={useBreakpointValue({ base: 'md', md: 'lg' })}
                  position={'relative'}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: 'full',
                    height: 'full',
                    rounded: 'full',
                    transform: 'scale(1.125)',
                    bgGradient: 'linear(to-bl, red.400,pink.400)',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
              +
            </Text>
            <Flex
              align={'center'}
              justify={'center'}
              fontFamily={'heading'}
              fontSize={{ base: 'sm', md: 'lg' }}
              bg={'gray.800'}
              color={'white'}
              rounded={'full'}
              minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
              minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
              position={'relative'}
              _before={{
                content: '""',
                width: 'full',
                height: 'full',
                rounded: 'full',
                transform: 'scale(1.125)',
                bgGradient: 'linear(to-bl, orange.400,yellow.400)',
                position: 'absolute',
                zIndex: -1,
                top: 0,
                left: 0,
              }}>
              YOU
            </Flex>
          </Stack>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Join now
              <Text
                as={'span'}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
            We’re excited to welcome you to our exclusive Silver Class! Join our elite group and enhance your skills in a premium learning environment. Don't miss the opportunity to elevate your expertise and achieve new heights!
            </Text>
          </Stack>
          <Box as={'form'} mt={0} onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <Input
                placeholder="Your name"
                name='name'
                bg={'white'}
                required
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={handleInputChange}
              />
              <Input
                placeholder="Your email"
                type='email'
                name='email'
                required
                bg={'white'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                onChange={handleInputChange}
              />
                   <Datepicker 
                    
                    asSingle={true} 
                    useRange={false}
                    minDate={addDays(new Date(), 1)}
                    value={value} 
                    onChange={handleValueChange} 
                    inputClassName="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  
                    /> 
              
              <div className="flex">
              <FormLabel htmlFor='email-alerts' mb='0'>
                    Include transport?
                </FormLabel>
                <Switch id='email-alerts' name='transport' onChange={handleSwitchChange} />
              </div>
             
            </Stack>

              <p className='py-2 text-xs md:text-sm italic'>*For additional details, please provide by your self on whatsapp chat!</p>

            <Button  type='submit'
              mt={5}
              w={'full'} colorScheme='blue' variant='outline'>
                <span className="text-xs lg:text-base"> Book now</span>
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      />
    </Box>
            
        </div>

        <SimpleFooter />
       </div>
    )
}


export const Blur = (props: IconProps) => {
    return HelperFunc.IsMobile() ? (
        <Icon
          width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
          zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
          height="560px"
          viewBox="0 0 528 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
         <circle cx="71" cy="61" r="111" fill="#C09090" />
        <circle cx="244" cy="106" r="139" fill="#B292C1" />
        <circle cy="291" r="139" fill="#B292C1" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#D8B895" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#DFDBC2" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#9DBFAD" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#849FBB" />

        </Icon>
      ) : <></>
  };