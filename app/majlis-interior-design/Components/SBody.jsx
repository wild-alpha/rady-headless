"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const designImages = [
  "/images/1_CShading_LightMix_View01.jpg",
  "/images/I.jpg",
  "/images/cam02.jpg",
];

const textImage = {
  src: "/images/2 (7).jpg",
  link: "/villa-damac-hills-5-bedroom",
  title: "Damac Hills Villa",
};

const galleryImages = [
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
  },
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
  },
];

const villaSteps = [
  {
    id: "01",
    title: "Initial Consultation & Design Brief",
    desc: "We begin with a detailed consultation to understand your majlis requirements, cultural preferences, seating style, guest hosting needs, design taste, and budget. This helps us create a majlis concept that feels elegant, welcoming, and tailored to your lifestyle.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Site Study & Space Planning",
    desc: "Our team studies the majlis layout, circulation, entrance flow, seating arrangement, focal points, lighting potential, and available space. We then prepare a space plan that improves comfort, visual balance, and the overall guest experience.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Material, Furniture & Finish Selection",
    desc: "We help you choose majlis seating, wall finishes, carpets, curtains, lighting, decorative details, and furniture elements that match your design style while ensuring comfort, durability, and a refined atmosphere.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Technical Drawings & Design Detailing",
    desc: "Our designers and technical team prepare majlis layouts, ceiling plans, wall feature details, lighting drawings, joinery plans, and other documents required for accurate planning and smooth execution.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Fit-Out Execution & Installation",
    desc: "Once the design is finalized, our craftsmen and project team begin the transformation. From wall finishes and custom joinery to seating installation, lighting, and decorative detailing, every element is executed with care and precision.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Final Styling & Handover",
    desc: "Before handover, we complete final styling, finishing checks, seating arrangement, accessory placement, and quality review so your majlis feels polished, welcoming, and ready for family gatherings and guest hosting.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "How long does a majlis interior design project in Dubai usually take?",
    answer:
      "The timeline depends on the majlis size, design scope, and level of customization involved. In most cases, majlis interior design projects in Dubai can take from a few weeks to a couple of months from concept to final setup.",
  },
  {
    question: "Can you design both traditional and modern majlis interiors?",
    answer:
      "Yes, we design majlis interiors in different styles, including traditional Arabic majlis, contemporary majlis, luxury majlis spaces, and modern formal sitting areas across Dubai.",
  },
  {
    question: "Do you provide both majlis design and fit-out execution?",
    answer:
      "Yes, we offer complete majlis interior design support including concept development, seating planning, material selection, technical drawings, custom joinery, and fit-out coordination.",
  },
  {
    question: "What affects the cost of majlis interior design in Dubai?",
    answer:
      "The cost depends on the majlis size, seating design, wall treatments, ceiling features, lighting, carpets, curtains, joinery details, decorative elements, and the overall level of customization involved in the project.",
  },
  {
    question: "Can you make a majlis feel both luxurious and comfortable?",
    answer:
      "Yes, our majlis design approach focuses on combining elegant layouts, comfortable seating, refined finishes, layered lighting, and thoughtful styling so the space feels both luxurious and welcoming.",
  },
];

const SBody = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="bg-[#000000] text-[#ffffff]">
      {/* Section 1 */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 font-sans">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2 flex flex-col justify-start">
              <h2 className="text-sm sm:text-xl md:text-xl font-bold tracking-widest py-2 text-[#d4af37]">
                Premium majlis interior design services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  majlis interior design services in Dubai <span></span>
                </a>
                that combine elegance, hospitality, and cultural character. You
                are at the right place.
                <br />
                With 15+ years of experience in residential interior design,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                creates majlis interiors that feel welcoming, sophisticated, and
                tailored to your family traditions, guest hosting style, and design
                preferences.
                <br />
                Whether you want a traditional Arabic majlis, a contemporary majlis,
                or a luxury formal sitting space for entertaining guests, our team
                helps shape interiors that feel warm, refined, and memorable. Keep
                reading to discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers majlis interior design solutions in Dubai tailored to your
                lifestyle, comfort needs, and design vision.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Majlis Interior Design Services in Dubai
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/4.png"
                    alt="Watch our company video"
                    width={1280}
                    height={720}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm transition group-hover:scale-110">
                      <FaPlay className="text-white text-xl sm:text-2xl ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full aspect-video border-4 border-[#8c6b1f] rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/F1tjU-4YMmg?autoplay=1&rel=0&modestbranding=1&controls=1"
                    title="YouTube Shorts Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              <Link
                href="/contact-us"
                className="border border-[#8c6b1f] text-[#d4af37] text-xs sm:text-base font-play px-6 py-2 mt-6 w-fit uppercase rounded hover:bg-[#8c6b1f] hover:text-white transition-all duration-200"
              >
                GET YOUR QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-10 px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
          Majlis Interior Design Dubai Services We Provide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {designImages.map((src, index) => (
            <div key={index} className="relative aspect-square overflow-hidden">
              <Image
                src={src}
                alt={`service ${index + 1}`}
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-semibold uppercase text-[#d4af37]">
            Get In Touch With Us
          </h3>
          <p className="text-black text-sm sm:text-base font-semibold">
            We are located in the world's luxury city, Dubai
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a
              href="https://wa.me/971588075603"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#f0c95a] transition"
            >
              Request availability by WhatsApp
            </a>

            <a
              href="mailto:info@example.com"
              className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#d4af37] hover:text-black transition"
            >
              Request availability by E-mail
            </a>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="px-6 py-10 sm:px-10 md:px-16 lg:px-28 xl:px-40">
        <div className="lg:max-w-[80%] mx-auto bg-[#141517] p-6 sm:p-10 rounded shadow text-center space-y-6 mb-12">
          <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
            Why Choose
            <a
              href="https://radyinterior.ae/"
              className="text-[#d4af37] hover:text-[#f0c95a] ml-1"
            >
              Rady Interior Design <span></span>
            </a>
            for Your Majlis Interior Design in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in residential interior design,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps homeowners in Dubai create majlis interiors that feel elegant,
              welcoming, and tailored to the traditions of guest hosting and
              refined living.
            </p>

            <p>
              A majlis should be more than just a formal sitting room. It should
              reflect warmth, hospitality, comfort, and a strong sense of style
              while remaining practical for gatherings and family occasions.
            </p>

            <p>
              We begin by understanding your hosting habits, seating preferences,
              cultural style, layout requirements, and design taste so we can
              create a majlis that truly matches your home and lifestyle.
            </p>

            <p>
              From traditional majlis interiors to contemporary luxury majlis
              spaces,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              creates tailored interiors that combine thoughtful planning, refined
              materials, and carefully selected furnishings.
              <br />
              <br />
              We thoughtfully choose seating layouts, wall treatments, carpets,
              lighting, curtains, feature elements, and decorative details that
              create visual harmony while maintaining comfort and elegance.
              <br />
              <br />
              Our team focuses on layout efficiency, cultural sensitivity, and
              clean execution so the final majlis feels polished, luxurious, and
              truly welcoming for guests.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering majlis
              interior design services in Dubai with quality, creativity, and
              lasting sophistication.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Majlis Design Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on residential interior projects in Dubai, including majlis
              spaces designed for hospitality, comfort, and elegant social living.
            </p>
            <p className="text-sm sm:text-base">
              Every majlis design project is planned with attention to seating
              layout, guest flow, lighting, wall detailing, soft furnishings, and
              the overall interior character of the home.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to create majlis interiors that feel stylish, practical, and deeply
              welcoming without compromising comfort or cultural elegance.
            </p>
            <p className="text-sm sm:text-base">
              From modern formal sitting rooms to more traditional and luxurious
              majlis spaces, our work focuses on hospitality, personalization, and
              premium finishing suited to homes in Dubai.
            </p>
          </div>

          <div className="w-full lg:w-1/3 group relative overflow-hidden rounded-lg shadow-lg">
            <a href={textImage.link} className="block">
              <Image
                src={textImage.src}
                alt={textImage.title}
                width={500}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm sm:text-base font-conthrax text-center">
                  {textImage.title}
                </p>
              </div>
            </a>
          </div>
        </div> 
                  <h2 className="text-center text-xs sm:text-xl md:text-xl font-bold tracking-widest mb-6 uppercase text-[#d4af37]">
      OUR MAJLIS INTERIOR DESIGN PROJECTS IN DUBAI</h2>

        <div className="lg:max-w-[60%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-10">
          {galleryImages.map(({ src, link, title }, i) => (
            <a
              href={link}
              key={i}
              className="group block relative overflow-hidden rounded shadow"
            >
              <Image
                src={src}
                alt={title}
                width={400}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm sm:text-base font-conthrax text-center">
                  {title}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="w-screen ml-[calc(50%-50vw)] bg-[#f5ede5] py-10 text-center space-y-4">
          <h3 className="text-xs sm:text-xl font-conthrax uppercase text-[#d4af37]">
            Get In Touch With Us
          </h3>
          <p className="text-sm sm:text-base font-play">
            We are located in the world's luxury city, Dubai
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 px-4">
            <a
              href="https://wa.me/971586023677"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#d4af37] text-black font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#f0c95a] transition"
            >
              Request availability by WhatsApp
            </a>

            <a
              href="mailto:info@radyinterior.ae"
              className="px-6 py-3 bg-[#8c6b1f] text-white font-play text-sm rounded w-full sm:w-auto text-center hover:bg-[#d4af37] hover:text-black transition"
            >
              Request availability by E-mail
            </a>
          </div>
        </div>

        

        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-conthrax py-12 text-[#d4af37]">
            Bespoke Majlis Interior Design Dubai, Crafted for Hospitality and Elegance
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Majlis Interior Design Services in Dubai
              </h2>
              <p>
                Our majlis interior design services are tailored to improve
                comfort, hospitality, and the overall appearance of your formal
                gathering space. Whether you want a traditional Arabic majlis, a
                luxury majlis, or a more modern formal sitting room, we design
                according to your lifestyle and preferences.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Majlis Layout Planning – </b>
                    Smart space planning for comfortable guest seating, movement,
                    and social gatherings
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Seating & Furniture Design Coordination –</b> Functional and
                    elegant seating arrangements tailored to your majlis style
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Wall Features & Joinery Design – </b>
                    Well-balanced wall and custom joinery solutions that support
                    both beauty and hospitality
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Lighting & Ceiling Design –</b> Layered and practical
                    lighting solutions that enhance mood and majlis atmosphere
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Carpets, Curtains & Styling – </b>
                    Carefully chosen textiles, finishes, and décor elements for a
                    refined majlis look
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Majlis Fit-Out & Installation –</b> Complete execution with
                    careful detailing, joinery support, and final setup
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for majlis interior design in
                Dubai, helping homeowners create spaces that feel elegant,
                functional, and deeply welcoming for family and guests.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/2_CShading_LightMix (1).jpg"
                alt="Round luxury bed with fairy lights"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 mb-4 bg-[#141517] rounded-lg shadow p-6 sm:p-10">
          <h2 className="text-center text-2xl sm:text-3xl font-conthrax mb-4 text-[#d4af37]">
            Majlis Interior Design Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our majlis interior
            design services in Dubai.
          </p>

          <div className="space-y-3">
            {faqs.map((item, index) => (
              <details
                key={index}
                className="group border-b border-gray-200 py-3"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-play font-semibold text-sm sm:text-base text-[#8c6b1f] text-left">
                    {item.question}
                  </span>
                  <span className="ml-3 text-[#d4af37] text-xl transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm sm:text-base font-play">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default SBody;