"use client"

import { Tabs, TabList, Tab, TabPanels, TabPanel, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const pathName = window.location.pathname;
      const pageIndex = pathName === '/' ? 0 : 1;
      setPageIndex(pageIndex);
    }
  }, []);

  const handleTabsChange = (index: number) => {
    setPageIndex(index);
    if (index === 0) {
      window.location.href = '/';
    } else {
      window.location.href = '/galleries';
    }
  };

  return (
    <div className='navbar sticky top-0 z-50'>
      <div className="w-full p-3 bg-white border-b flex flex-col gap-3 mx-auto">
        <Link href={'/'}>
          <Image src='/logo.png' className='w-11 h-14 mx-auto' alt="Logo" />
          <h5 className="text-center font-bold text-base md:text-lg">
            {process.env.APP_NAME ?? "Master Silver Class"}
          </h5>
        </Link>
      </div>
      <Tabs
        isFitted
        size="md"
        variant='enclosed'
        index={pageIndex}
        onChange={handleTabsChange}
      >
        <TabList className='bg-white'>
          <Tab><span className="text-xs md:text-base">Products</span></Tab>
          <Tab><span className="text-xs md:text-base">Galleries</span></Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* Konten untuk tab Products */}
          </TabPanel>
          <TabPanel>
            {/* Konten untuk tab Galleries */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
