"use client"

import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Image,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const Logo = (props: any) => {
    return (
     <Image src='/logo.png' className='w-12 h-16 md:w-16 md:h-20' />
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer() {
    return (
      <Box
      className='mt-24'
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid className='text-xs lg:text-sm' columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
            <Stack align={'flex-start'}>
              <ListHeader>Product</ListHeader>
              <Link href={'#services'}>Silver Class</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#about'}>About Us</Link>
              <Link href={'#'}>Contact Us</Link>
              <Link href={'#location'}>Location</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>TikTok</Link>
              <Link href={'#'}>Twitter</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            <Logo />
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2024 Master Silver Class. All rights reserved
          </Text>
        </Box>
      </Box>
    );
  }