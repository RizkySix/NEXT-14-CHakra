import Navbar from "@/components/layouts/navbar";
import { Hero } from "./components/hero";
import { Owner } from "./components/owner";
import { Galleries } from "./components/galleries";
import Footer from "@/components/layouts/footer";
import SimpleFooter from "@/components/layouts/simple-footer";


export default function BookingForm() {
  return (
    <>
     <Navbar />

     <div className="py-2 md:py-3">
        <div className="hero  ">
        <Hero />
        </div>

        <div id='owner' className="content flex flex-col gap-14 lg:gap-28 bg-gradient-to-b from-[#e9dede] via-[#fffefe] to-white">
            <div className="owner">
              <Owner />
            </div>

            <div className="galleries">
              <Galleries />
            </div>
        </div>
      </div>
     
      <SimpleFooter />
    </>
  )
}