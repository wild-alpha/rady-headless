import Navbar from "@/Componenets/Navbar";
import CallButton from "@/Componenets/CallButton";
import WhatsAppButton from "@/Componenets/WhatsAppButton";
import PHeroSection from "./PHeroSection";
import AreasGallerySection from "./AreasGallerySection"
import Footer from "@/Componenets/Footer";

export default function ProjectsPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#121212]">
      {/* Sticky Top Navbar */}
      <Navbar className="absolute top-0 z-10 w-screen" />

      {/* Hero Image Section */}
      <PHeroSection />

      {/* Floating Action Buttons */}
      <CallButton />
      <WhatsAppButton />

      {/* Projects Grid Section */}
      <AreasGallerySection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
=======
import Navbar from "@/Componenets/Navbar";
import CallButton from "@/Componenets/CallButton";
import WhatsAppButton from "@/Componenets/WhatsAppButton";
import PHeroSection from "./PHeroSection";
import AreasGallerySection from "./AreasGallerySection"
import Footer from "@/Componenets/Footer";

export default function ProjectsPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#121212]">
      {/* Sticky Top Navbar */}
      <Navbar className="absolute top-0 z-10 w-screen" />

      {/* Hero Image Section */}
      <PHeroSection />

      {/* Floating Action Buttons */}
      <CallButton />
      <WhatsAppButton />

      {/* Projects Grid Section */}
      <AreasGallerySection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
>>>>>>> 63d8315699495e243aed1d357ff2faa1633c0984
