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

  const Logo = (props: any) => {
    return (
     <Image src='/logo.png' className='w-12 h-16 md:w-16 md:h-20' />
    );
  };
  
  
  export default function SimpleFooter() {
    return (
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
    );
  }