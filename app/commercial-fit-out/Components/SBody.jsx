"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const designImages = [
  "/images/vservice1.webp",
  "/images/vservice2.webp",
  "/images/vservice3.webp",
];

const textImage = {
  src: "/images/vservice1.webp",
  link: "/villa-damac-hills-5-bedroom",
  title: "Damac Hills Villa",
};

const galleryImages = [
  {
    src: "/images/vservice2.webp",
    link: "/classic-villa-interior-design",
    title: "CLASSIC VILLA INTERIOR DESIGN",
  },
  { src: "/images/vservice3.webp", link: "/villa-lantana", title: "VILLA LATANA" },
  { src: "/images/vservice1.webp", link: "/villa-khawaneej", title: "VILLA KHAWANEEJ" },
  {
    src: "/images/vservice1.webp",
    link: "/emirates-hills-villa",
    title: "EMIRATES HILLS VILLA",
  },
  { src: "/images/vservice2.webp", link: "/mbr-city-villa", title: "MBR CITY VILLA" },
  {
    src: "/images/vservice3.webp",
    link: "/palm-jumeirah-villa",
    title: "PALM JUMEIRAH VILLA",
  },
];

const villaSteps = [
  {
    id: "01",
    title: "Initial Consultation & Project Brief",
    desc: "We begin with a detailed consultation to understand your business type, space requirements, brand direction, functional needs, workflow, timeline, and budget. This helps us define the right commercial fit out strategy for your project.",
    img: "/images/mission.webp",
  },
  {
    id: "02",
    title: "Site Inspection & Space Planning",
    desc: "Our team carefully studies the existing layout, access, circulation, service requirements, spatial challenges, and operational needs of your commercial unit. We then prepare a fit out plan that supports efficiency, comfort, and business performance.",
    img: "/images/material.webp",
  },
  {
    id: "03",
    title: "Material, Finish & Fixture Selection",
    desc: "We help you select flooring, ceilings, partitions, lighting, counters, joinery, furniture, and finishes that reflect your brand image while maintaining durability, practicality, and long-term commercial use.",
    img: "/images/customized.webp",
  },
  {
    id: "04",
    title: "Technical Drawings & Fit Out Planning",
    desc: "Our designers and technical team prepare layouts, reflected ceiling plans, joinery drawings, MEP coordination, detailed fit out drawings, and supporting documents needed for proper planning and execution.",
    img: "/images/mission.webp",
  },
  {
    id: "05",
    title: "Execution, Fit Out & Installation",
    desc: "Once the design and technical scope are approved, our project team and craftsmen begin site execution. From civil works and partitions to ceilings, flooring, joinery, MEP works, and installations, every stage is handled with precision.",
    img: "/images/material.webp",
  },
  {
    id: "06",
    title: "Final Finishing & Handover",
    desc: "Before handover, we complete finishing checks, snag corrections, cleaning, final adjustments, and quality review to ensure your commercial space is polished, functional, and ready for business operations.",
    img: "/images/customized.webp",
  },
];

const faqs = [
  {
    question: "How long does a commercial fit out project in Dubai usually take?",
    answer:
      "The timeline depends on the size of the unit, type of business, design scope, authority requirements, and level of fit out work involved. In most cases, commercial fit out projects in Dubai can take from a few weeks to a few months.",
  },
  {
    question: "Do you handle fit out projects for different types of commercial spaces?",
    answer:
      "Yes, we work on a wide range of commercial fit out projects including offices, retail shops, cafes, restaurants, salons, clinics, showrooms, and other business spaces across Dubai.",
  },
  {
    question: "Do you provide both design and commercial fit out execution?",
    answer:
      "Yes, we offer complete commercial fit out solutions including concept development, space planning, material selection, technical drawings, coordination, and full on-site execution.",
  },
  {
    question: "What affects the cost of a commercial fit out in Dubai?",
    answer:
      "The cost depends on the unit size, type of business, materials, custom joinery, MEP requirements, partitions, ceilings, flooring, furniture, branding features, approvals, and the overall level of finishing involved.",
  },
  {
    question: "Can you design the space to improve both appearance and business functionality?",
    answer:
      "Yes, our commercial fit out approach focuses on both visual presentation and operational performance, including workflow, customer circulation, staff efficiency, storage, branding, comfort, and practical daily use.",
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
                Professional commercial fit out services in Dubai
              </h2>

              <p className="text-sm sm:text-base leading-7 mb-4">
                Are you looking for
                <a
                  href="https://radyinterior.ae/"
                  className=" ml-1"
                >
                  commercial fit out services in Dubai <span></span>
                </a>
                that create a functional, branded, and business-ready space. You
                are at the right place.
                <br />
                With 15+ years of experience in interior design and fit out,
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers commercial fit out solutions that combine operational
                efficiency, visual appeal, quality workmanship, and practical
                planning.
                <br />
                Whether you are setting up a new office, retail unit, cafe,
                restaurant, salon, clinic, or another business space, our team
                helps transform your unit into a polished and functional commercial
                environment. Keep reading to discover how
                <a
                  href="https://radyinterior.ae/"
                  className="ml-1"
                >
                  Rady Interior Design & Fit Out, <span></span>
                </a>
                delivers commercial fit out services in Dubai tailored to your
                business model, brand identity, and daily operations.
              </p>

              <div className="bg-[#8c6b1f] text-white text-xs sm:text-base font-play rounded px-6 py-4 mt-6 w-fit">
                15 Years of Experience
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6">
              <h2 className="text-xs sm:text-xl md:text-xl font-bold tracking-widest text-[#d4af37]">
                Get Best Commercial Fit Out Services in Dubai
              </h2>

              {!videoLoaded ? (
                <div
                  className="relative w-full aspect-video bg-black cursor-pointer group overflow-hidden rounded-lg border-4 border-[#8c6b1f]"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Image
                    src="/images/villa-cover.webp"
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
          Commercial Fit Out Dubai Services We Provide
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
            for Your Commercial Fit Out in Dubai?
          </h2>

          <div className="space-y-4 text-sm sm:text-base font-play text-left">
            <p>
              With years of experience in commercial interiors,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              helps businesses in Dubai create spaces that are practical,
              professional, and aligned with their brand goals.
            </p>

            <p>
              A successful commercial fit out is not only about appearance. It is
              about making the space work efficiently for staff, customers,
              services, movement, storage, and everyday operations while still
              presenting a strong visual identity.
            </p>

            <p>
              Our process begins with understanding your business type, operational
              requirements, target audience, brand image, and spatial challenges so
              we can develop a fit out solution that supports performance and
              presentation.
            </p>

            <p>
              From offices and retail shops to cafes, restaurants, salons, clinics,
              and other commercial spaces,
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              delivers fit out solutions that balance quality, function, and
              long-term usability.
              <br />
              <br />
              We carefully plan partitions, ceilings, flooring, lighting, joinery,
              counters, MEP works, and finishing details to ensure every commercial
              unit feels complete, efficient, and visually strong.
              <br />
              <br />
              Our team focuses on proper coordination, site management, technical
              accuracy, and clean execution so your project moves forward smoothly
              and is ready for operation with confidence.
              <br />
              <br />
              When you choose
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              you choose a professional team dedicated to delivering commercial fit
              out services in Dubai with reliability, quality workmanship, and
              strong project understanding.
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] mx-auto flex flex-col lg:flex-row items-start gap-6 mb-12">
          <div className="w-full lg:w-2/3 space-y-4">
            <h2 className="text-sm sm:text-xl md:text-xl tracking-widest font-conthrax text-[#d4af37]">
              Our Dubai Commercial Fit Out Projects
            </h2>
            <p className="text-sm sm:text-base">
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out, <span></span>
              </a>
              works on a variety of commercial fit out projects in Dubai, helping
              businesses transform empty or outdated units into efficient and
              well-presented spaces.
            </p>
            <p className="text-sm sm:text-base">
              Every commercial fit out project is planned with attention to layout,
              workflow, customer experience, staff movement, technical needs,
              brand presentation, and the practical use of every area.
            </p>
            <p className="text-sm sm:text-base">
              Clients trust
              <a
                href="https://radyinterior.ae/"
                className="ml-1"
              >
                Rady Interior Design & Fit Out <span></span>
              </a>
              to deliver commercial environments that feel functional, polished,
              and better suited to the demands of day-to-day business operations.
            </p>
            <p className="text-sm sm:text-base">
              From compact business units to larger commercial spaces, our work
              focuses on quality execution, strong space planning, and premium
              finishing suited to modern business environments in Dubai.
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

        <div className="bg-[#141517] py-16 mt-10">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-conthrax mb-2 text-[#d4af37]">
              6-Step Process For Our Commercial Fit Out Services In Dubai
            </h2>
            <p className="font-play text-sm sm:text-base max-w-2xl mx-auto">
              We follow a clear and transparent 6-step process to deliver smooth
              and well-managed commercial fit out services in Dubai.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
              {villaSteps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center text-center font-play"
                >
                  <div className="relative w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full border-[6px] border-[#8c6b1f] overflow-hidden flex items-center justify-center shadow-md bg-white">
                    <Image
                      src={step.img}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <span className="relative text-3xl sm:text-4xl font-conthrax text-white drop-shadow-lg">
                      {step.id}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base sm:text-lg font-conthrax text-[#d4af37]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-conthrax py-12 text-[#d4af37]">
            Commercial Fit Out Dubai, Built for Business Performance
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-6 font-play">
              <h2 className="text-xl font-conthrax mb-4 text-[#d4af37]">
                Our Commercial Fit Out Services in Dubai
              </h2>
              <p>
                Our commercial fit out services are tailored to create practical,
                visually strong, and fully functional business spaces. Whether you
                are launching a new business or upgrading an existing unit, we
                deliver fit out solutions that support your brand and daily
                operations.
              </p>
              <p>Our Featured Services:</p>
              <ul className="list-decimal pl-5 space-y-2">
                <li>
                  <p className="font-play">
                    <b>Office Fit Out – </b>
                    Efficient and professional interiors designed for workflow,
                    staff comfort, and productivity
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Retail Shop Fit Out –</b> Branded commercial spaces designed
                    to improve product display and customer experience
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Cafe & Restaurant Fit Out – </b>
                    Hospitality spaces planned for customer comfort, service flow,
                    and visual identity
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Salon & Clinic Fit Out –</b> Functional and attractive
                    business interiors tailored to service-based environments
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Partitions, Ceilings & Joinery Works – </b>
                    Technical and finishing works delivered with precision and
                    commercial-grade durability
                  </p>
                </li>

                <li>
                  <p className="font-play">
                    <b>Complete Turnkey Fit Out Execution –</b> End-to-end
                    commercial fit out delivery from planning and drawings to final
                    handover
                  </p>
                </li>
              </ul>

              <p>
                We are among the trusted companies for commercial fit out in
                Dubai, helping businesses create spaces that feel practical,
                polished, and ready for long-term performance.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/vservice1.webp"
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
            Commercial Fit Out Dubai – FAQs
          </h2>
          <p className="font-play text-sm sm:text-base mb-6 text-center">
            Find quick answers to common questions about our commercial fit out
            services in Dubai.
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