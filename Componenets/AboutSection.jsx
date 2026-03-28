"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "OUR SERVICES",
    description:
      "Rady Interior delivers a complete suite of luxury interior design and fit out services in Dubai, offering bespoke solutions for residential, commercial, hospitality and office spaces. With expert space planning, precise execution, and turnkey project delivery, we transform vision into timeless environments defined by craftsmanship, elegance, and technical excellence.",
    image: "/images/1.webp",
    imageAlt: "Luxury interior living room",
    buttons: [
      { label: "OUR PROJECTS", href: "/projects", filled: true },
      { label: "FREE CONSULTATION", href: "/contact", filled: false },
    ],
    reverse: false,
  },
  {
    title: "RESIDENTIAL PROJECTS",
    description:
      "As Dubai's leading interior fit out specialist, we provide bespoke turnkey solutions for luxury homes and high end commercial spaces. We blend expert craftsmanship with precise project execution to transform design concepts into refined, functional interiors across the UAE.",
    image: "/images/3.webp",
    imageAlt: "Luxury residential dining interior",
    buttons: [],
    reverse: true,
  },
  {
    title: "COMMERCIAL PROJECTS",
    description:
      "We craft refined, distinctive interiors that truly express your lifestyle by blending bold creativity with precise architectural detailing. As a leading interior design company in Dubai, we elevate every space into a reflection of your taste and priorities. Our dedicated team delivers luxurious, tailor made environments, supported by exceptional craftsmanship and a forward thinking design approach.",
    image: "/images/2.webp",
    imageAlt: "Modern commercial office interior",
    buttons: [
      { label: "OUR PROJECTS", href: "/projects", filled: true },
      { label: "FREE CONSULTATION", href: "/contact", filled: false },
    ],
    reverse: false,
  },
];

function ActionButton({ label, href, filled }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center border px-4 py-2 font-roboto text-[10px] font-semibold tracking-[0.8px] transition duration-300 sm:px-5 sm:py-2.5 ${
        filled
          ? "border-[#c9a13b] bg-[#c9a13b] text-black hover:bg-transparent hover:text-[#c9a13b]"
          : "border-white bg-white text-black hover:border-[#c9a13b] hover:bg-[#c9a13b]"
      }`}
    >
      {label}
    </Link>
  );
}

function AboutCard({ title, description, image, imageAlt, buttons, reverse }) {
  return (
    <div className="grid grid-cols-1 overflow-hidden bg-[#111111] md:grid-cols-2">
      <div
        className={`flex flex-col justify-center px-5 py-8 sm:px-8 md:px-6 lg:px-8 xl:px-10 ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <h3 className="font-khand text-[16px] leading-none text-white sm:text-[22px] lg:text-[28px]">
          {title}
        </h3>

        <p className="mt-4 max-w-[520px] font-roboto text-[13px] leading-[1.9] text-white/70 sm:text-[14px] lg:text-[15px]">
          {description}
        </p>

        {buttons?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {buttons.map((button) => (
              <ActionButton
                key={button.label}
                label={button.label}
                href={button.href}
                filled={button.filled}
              />
            ))}
          </div>
        )}
      </div>

      <div className={`${reverse ? "md:order-1" : ""}`}>
        <div className="relative h-[220px] sm:h-[280px] md:h-full md:min-h-[320px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-[1920px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16 xl:px-10 2xl:px-16">
        <div className="mx-auto max-w-[980px] text-center">
          <h2 className="font-khand font-semibold text-[20px] leading-[1.1] text-white sm:text-[26px] lg:text-[32px]">
            Top Interior Designers &amp; Fit Out
            Specialists In Dubai
          </h2>

          <div className="mt-5 space-y-4 font-roboto text-[13px] leading-[1.9] text-white sm:text-[13px] lg:text-[14px]">
            <p>
              RadyInterior is a luxury interior design and fit-out company in
              Dubai delivering villa renovations, corporate offices, retail fit
              outs, F&amp;B concepts, and high-end residential projects. We
              manage the full journey space planning, 3D visualization,
              authority approvals, construction, joinery, MEP integration, and
              turnkey handover. Our in-house team manages the entire process.
              Every project is approached with a consultant led mindset,
              combining design intelligence, material expertise, and disciplined
              project management.
            </p>

            <p>
              With offices in Dubai and Sharjah, RadyInterior serves clients
              across the UAE, delivering luxury interiors that are functional,
              refined, and built to perform. Whether you&apos;re planning a full
              villa renovation, a corporate office fit out, or a high end
              commercial space, we provide a seamless end to end solution
              aligned with your vision and budget.
            </p>

            <div>
              <p>Our philosophy is simple</p>
              <p>
                Every space should feel elevated, functional, and deeply
                personal.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 h-px w-[180px] bg-[#c9a13b] sm:w-[220px]" />
        </div>

        <div className="mt-10 space-y-4 sm:mt-14 sm:space-y-5 lg:mt-16 lg:space-y-6">
          {cards.map((card) => (
            <AboutCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}