import type { Metadata } from "next";

import "../globals.css";
import { Providers } from '../providers'
import { poppins } from "@/lib/global.fonts";



export const metadata: Metadata = {
  title: "Products Bali Silver Class",
  description: "Generated by create next app",
  icons: '/logo.png'
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <Providers>{children}</Providers>
  )
}