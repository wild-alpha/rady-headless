import Navbar from "@/Componenets/Navbar";

import HeroSection from "@/Componenets/HeroSection";
import AboutSection from "@/Componenets/AboutSection";
import Fitout from "@/Componenets/Fitout";
import DesignProjects from "@/Componenets/DesignProjects";
import Features from "@/Componenets/Features";
import Testimonials from "@/Componenets/Testimonials";
import Faq from "@/Componenets/Faq";
import Blogs from "@/Componenets/Blogs";
import ContactUs from "@/Componenets/ContactUs";

import Footer from "@/Componenets/Footer";



export default function Home() {
  return (
    <>
    <main className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar className="absolute top-0 z-10 w-screen" />
       
        <HeroSection />
        <AboutSection />
        <Fitout />
        <DesignProjects />
        <Features />
        <Testimonials />
        <Faq />
        <Blogs />
       
        <div className="px-20">
         <ContactUs />
         </div>
         
         <div className="bg-[#f5ede5]">
          <Footer />

         </div>

    </main>

    </>
  );
}