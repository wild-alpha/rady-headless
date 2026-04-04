"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "All",
  "Dubai",
  "Sharjah",
  "Ajman",
  "Umm Al Quwain",
  "Ras Al Khaimah",
  "Fujairah",
];

const areas = [
  {
    title: "Palm Jumeirah",
    subtitle: "Interior Design Company in Palm Jumeirah",
    category: "Dubai",
    image: "/images/project-1.jpg",
    href: "/interior-design-company-palm-jumeirah",
  },
  {
    title: "Emirates Hills",
    subtitle: "Interior Design Company in Emirates Hills",
    category: "Dubai",
    image: "/images/project-2.jpg",
    href: "/interior-design-company-emirates-hills",
  },
  {
    title: "Jumeirah Bay Island",
    subtitle: "Interior Design in Jumeirah Bay Island",
    category: "Dubai",
    image: "/images/project-3.jpg",
    href: "/interior-design-jumeirah-bay-island",
  },
  {
    title: "District One Dubai",
    subtitle: "Interior Design in District One Dubai",
    category: "Dubai",
    image: "/images/project-4.jpg",
    href: "/interior-design-district-one-dubai",
  },
  {
    title: "Dubai Hills Estate",
    subtitle: "Interior Design in Dubai Hills Estate",
    category: "Dubai",
    image: "/images/project-5.jpg",
    href: "/interior-design-dubai-hills-estate",
  },
  {
    title: "Al Barari",
    subtitle: "Interior Design Company in Al Barari",
    category: "Dubai",
    image: "/images/project-6.jpg",
    href: "/interior-design-company-al-barari",
  },
  {
    title: "Jumeirah Golf Estates",
    subtitle: "Interior Design in Jumeirah Golf Estates",
    category: "Dubai",
    image: "/images/project-7.jpg",
    href: "/interior-design-jumeirah-golf-estates",
  },
  {
    title: "Downtown Dubai",
    subtitle: "Interior Design in Downtown Dubai",
    category: "Dubai",
    image: "/images/project-8.jpg",
    href: "/interior-design-downtown-dubai",
  },
  {
    title: "Dubai Marina",
    subtitle: "Interior Design in Dubai Marina",
    category: "Dubai",
    image: "/images/project-9.jpg",
    href: "/interior-design-dubai-marina",
  },
  {
    title: "Bluewaters Island",
    subtitle: "Interior Design in Bluewaters Island",
    category: "Dubai",
    image: "/images/project-10.jpg",
    href: "/interior-design-bluewaters-island",
  },
  {
    title: "Emaar Beachfront",
    subtitle: "Interior Design in Emaar Beachfront",
    category: "Dubai",
    image: "/images/project-11.jpg",
    href: "/interior-design-emaar-beachfront",
  },
  {
    title: "Aljada Sharjah",
    subtitle: "Interior Design in Aljada Sharjah",
    category: "Sharjah",
    image: "/images/project-12.jpg",
    href: "/interior-design-aljada-sharjah",
  },
  {
    title: "Al Zahia",
    subtitle: "Interior Design Company in Al Zahia",
    category: "Sharjah",
    image: "/images/project-13.jpg",
    href: "/interior-design-company-al-zahia",
  },
  {
    title: "Maryam Island",
    subtitle: "Interior Design in Maryam Island",
    category: "Sharjah",
    image: "/images/project-14.jpg",
    href: "/interior-design-maryam-island",
  },
  {
    title: "Sharjah Sustainable City",
    subtitle: "Interior Design in Sharjah Sustainable City",
    category: "Sharjah",
    image: "/images/project-15.jpg",
    href: "/interior-design-sharjah-sustainable-city",
  },
  {
    title: "Tilal City Sharjah",
    subtitle: "Interior Design in Tilal City Sharjah",
    category: "Sharjah",
    image: "/images/project-16.jpg",
    href: "/interior-design-tilal-city-sharjah",
  },
  {
    title: "Al Rahmaniya",
    subtitle: "Interior Design in Al Rahmaniya",
    category: "Sharjah",
    image: "/images/project-17.jpg",
    href: "/interior-design-al-rahmaniya",
  },
  {
    title: "Al Tai",
    subtitle: "Interior Design Company in Al Tai",
    category: "Sharjah",
    image: "/images/project-18.jpg",
    href: "/interior-design-company-al-tai",
  },
  {
    title: "Al Suyoh",
    subtitle: "Interior Design Company in Al Suyoh",
    category: "Sharjah",
    image: "/images/project-19.jpg",
    href: "/interior-design-company-al-suyoh",
  },
  {
    title: "Barashi",
    subtitle: "Interior Design Company in Barashi",
    category: "Sharjah",
    image: "/images/project-20.jpg",
    href: "/interior-design-company-barashi",
  },
  {
    title: "Al Qarayen",
    subtitle: "Interior Design in Al Qarayen",
    category: "Sharjah",
    image: "/images/project-21.jpg",
    href: "/interior-design-al-qarayen",
  },
  {
    title: "Ajman",
    subtitle: "Interior Design Company in Ajman",
    category: "Ajman",
    image: "/images/project-1.jpg",
    href: "/interior-design-company-ajman",
  },
  {
    title: "Umm Al Quwain",
    subtitle: "Interior Design in Umm Al Quwain",
    category: "Umm Al Quwain",
    image: "/images/project-2.jpg",
    href: "/interior-design-umm-al-quwain",
  },
  {
    title: "Ras Al Khaimah",
    subtitle: "Interior Design in Ras Al Khaimah",
    category: "Ras Al Khaimah",
    image: "/images/project-3.jpg",
    href: "/interior-design-ras-al-khaimah",
  },
  {
    title: "Fujairah",
    subtitle: "Interior Design Company in Fujairah",
    category: "Fujairah",
    image: "/images/project-4.jpg",
    href: "/interior-design-company-fujairah",
  },
];

const AreasGallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredAreas = useMemo(() => {
    if (activeCategory === "All") return areas;
    return areas.filter((area) => area.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-black pb-16">
      <div className="mx-auto max-w-[1250px] px-6 sm:px-10 lg:px-16">
        <div className="border-y border-[#8c6b1f]/60 py-4">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-play transition duration-300 ${
                    isActive
                      ? "bg-[#1a1408] text-[#d4af37] border border-[#8c6b1f]"
                      : "text-white hover:text-[#d4af37]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredAreas.map((area, i) => (
            <div
              key={i}
              className="group mx-auto w-full max-w-[320px] bg-[#0d0a05] overflow-hidden transition duration-300 hover:-translate-y-1"
            >
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="bg-[#100b04] px-4 py-4 text-center border-t border-[#8c6b1f]/20">
                <h3 className="text-white text-[17px] font-play">
                  {area.title}
                </h3>

                <p className="text-white/50 text-xs mt-1">
                  {area.subtitle}
                </p>

                <Link href={area.href}>
                  <button className="mt-3 w-full border border-[#8c6b1f]/60 text-[#d4af37] py-2 rounded-md text-sm transition duration-300 hover:bg-[#1a1408] hover:text-[#f0c95a]">
                    View Area →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasGallerySection;