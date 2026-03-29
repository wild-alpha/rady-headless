"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "All",
  "Apartments",
  "Villas",
  "Townhouses",
  "Offices",
  "Restaurants",
  "Retail",
  "Prayer Rooms",
  "Majlis",
  "Kitchens",
];

const projects = [
  {
    title: "Palm Jumeirah Villa",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-1.jpg",
    href: "/palm-jumeirah-villa",
  },
  {
    title: "Emirates Hills Luxury Villa",
    subtitle: "Luxury Villa Interior",
    category: "Villas",
    image: "/images/project-2.jpg",
    href: "/emirates-hills-luxury-villa",
  },
  {
    title: "Jumeirah Bay Island Mansion",
    subtitle: "Mansion Interior Design",
    category: "Villas",
    image: "/images/project-3.jpg",
    href: "/jumeirah-bay-island-mansion",
  },
  {
    title: "District One MBR Villa",
    subtitle: "Villa Interior Fit-Out",
    category: "Villas",
    image: "/images/project-4.jpg",
    href: "/district-one-mbr-villa",
  },
  {
    title: "Dubai Hills Estate Family Villa",
    subtitle: "Family Villa Interior",
    category: "Villas",
    image: "/images/project-5.jpg",
    href: "/dubai-hills-estate-family-villa",
  },
  {
    title: "Al Barari Eco-Luxury Villa",
    subtitle: "Eco-Luxury Villa Interior",
    category: "Villas",
    image: "/images/project-6.jpg",
    href: "/al-barari-eco-luxury-villa",
  },
  {
    title: "Jumeirah Golf Estates Villa",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-7.jpg",
    href: "/jumeirah-golf-estates-villa",
  },
  {
    title: "Downtown Dubai Luxury Apartment",
    subtitle: "Luxury Apartment Interior",
    category: "Apartments",
    image: "/images/project-8.jpg",
    href: "/downtown-dubai-luxury-apartment",
  },
  {
    title: "Dubai Marina Office",
    subtitle: "Office Interior Design",
    category: "Offices",
    image: "/images/project-9.jpg",
    href: "/dubai-marina-office",
  },
  {
    title: "Bluewaters Island Retail",
    subtitle: "Retail Interior Fit-Out",
    category: "Retail",
    image: "/images/project-10.jpg",
    href: "/bluewaters-island-retail",
  },
  {
    title: "Emaar Beachfront Apartment",
    subtitle: "Apartment Interior Design",
    category: "Apartments",
    image: "/images/project-11.jpg",
    href: "/emaar-beachfront-apartment",
  },
  {
    title: "Al Zahia Retail",
    subtitle: "Retail Interior Design",
    category: "Retail",
    image: "/images/project-12.jpg",
    href: "/al-zahia-retail",
  },
  {
    title: "Aljada Sharjah Office",
    subtitle: "Office Fit-Out",
    category: "Offices",
    image: "/images/project-13.jpg",
    href: "/aljada-sharjah-office",
  },
  {
    title: "Maryam Island Apartment",
    subtitle: "Apartment Interior",
    category: "Apartments",
    image: "/images/project-14.jpg",
    href: "/maryam-island-apartment",
  },
  {
    title: "Sharjah Sustainable City Villa",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-15.jpg",
    href: "/sharjah-sustainable-city-villa",
  },
  {
    title: "Tilal City Villa Interior Fit Out",
    subtitle: "Villa Interior Fit-Out",
    category: "Villas",
    image: "/images/project-16.jpg",
    href: "/tilal-city-villa-interior-fit-out",
  },
  {
    title: "Ras Al Khaimah Resort Restaurant",
    subtitle: "Restaurant Interior Design",
    category: "Restaurants",
    image: "/images/project-17.jpg",
    href: "/ras-al-khaimah-resort-restaurant",
  },
  {
    title: "Barashi Retail Interior Sharjah",
    subtitle: "Retail Interior Design",
    category: "Retail",
    image: "/images/project-18.jpg",
    href: "/barashi-retail-interior-sharjah",
  },
  {
    title: "Fujairah Home Office Interior",
    subtitle: "Office Interior Design",
    category: "Offices",
    image: "/images/project-19.jpg",
    href: "/fujairah-home-office-interior",
  },
  {
    title: "Ajman Office",
    subtitle: "Office Fit-Out",
    category: "Offices",
    image: "/images/project-20.jpg",
    href: "/ajman-office",
  },
  {
    title: "Al Qarayen Prayer Room",
    subtitle: "Prayer Room Interior",
    category: "Prayer Rooms",
    image: "/images/project-21.jpg",
    href: "/al-qarayen-prayer-room",
  },
  {
    title: "Al Suyoh Majlis",
    subtitle: "Majlis Interior Design",
    category: "Majlis",
    image: "/images/project-1.jpg",
    href: "/al-suyoh-majlis",
  },
  {
    title: "Al Tai Sharjah Kitchen",
    subtitle: "Kitchen Interior Design",
    category: "Kitchens",
    image: "/images/project-2.jpg",
    href: "/al-tai-sharjah-kitchen",
  },
  {
    title: "Downtown Dubai Restaurant",
    subtitle: "Restaurant Interior Fit-Out",
    category: "Restaurants",
    image: "/images/project-3.jpg",
    href: "/downtown-dubai-restaurant",
  },
  {
    title: "Al Rahmaniya Retail",
    subtitle: "Retail Interior Design",
    category: "Retail",
    image: "/images/project-4.jpg",
    href: "/al-rahmaniya-retail",
  },
  {
    title: "Jumeirah Islands Luxury Villa",
    subtitle: "Luxury Villa Interior",
    category: "Villas",
    image: "/images/project-5.jpg",
    href: "/jumeirah-islands-luxury-villa",
  },
  {
    title: "Nad Al Sheba Villa",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-6.jpg",
    href: "/nad-al-sheba-villa",
  },
  {
    title: "Arabian Ranches Family Villa",
    subtitle: "Family Villa Interior",
    category: "Villas",
    image: "/images/project-7.jpg",
    href: "/arabian-ranches-family-villa",
  },
  {
    title: "Tilal Al Ghaf Villa",
    subtitle: "Villa Interior Fit-Out",
    category: "Villas",
    image: "/images/project-8.jpg",
    href: "/tilal-al-ghaf-villa",
  },
  {
    title: "Damac Hills Townhouse",
    subtitle: "Townhouse Interior Design",
    category: "Townhouses",
    image: "/images/project-9.jpg",
    href: "/damac-hills-townhouse",
  },
  {
    title: "The Meadows / The Lakes Villa",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-10.jpg",
    href: "/the-meadows-the-lakes-villa",
  },
  {
    title: "Five Palm Jumeirah Apartment",
    subtitle: "Apartment Interior Design",
    category: "Apartments",
    image: "/images/project-11.jpg",
    href: "/five-palm-jumeirah-apartment",
  },
  {
    title: "Umm Suqeim Villa",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-12.jpg",
    href: "/umm-suqeim-villa",
  },
  {
    title: "Dubai Creek Harbour Luxury Apartment",
    subtitle: "Luxury Apartment Interior",
    category: "Apartments",
    image: "/images/project-13.jpg",
    href: "/dubai-creek-harbour-luxury-apartment",
  },
  {
    title: "Dubai Harbour Office",
    subtitle: "Office Interior Fit-Out",
    category: "Offices",
    image: "/images/project-14.jpg",
    href: "/dubai-harbour-office",
  },
  {
    title: "Emaar Beachfront Restaurant",
    subtitle: "Restaurant Interior Design",
    category: "Restaurants",
    image: "/images/project-15.jpg",
    href: "/emaar-beachfront-restaurant",
  },
  {
    title: "Dubai Islands Villa",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-16.jpg",
    href: "/dubai-islands-villa",
  },
  {
    title: "La Mer Beach Restaurant",
    subtitle: "Beach Restaurant Interior",
    category: "Restaurants",
    image: "/images/project-17.jpg",
    href: "/la-mer-beach-restaurant",
  },
  {
    title: "Palm Jebel Ali Villa",
    subtitle: "Luxury Villa Interior",
    category: "Villas",
    image: "/images/project-18.jpg",
    href: "/palm-jebel-ali-villa",
  },
  {
    title: "Luxury Dubai South Apartment Interior Fitout",
    subtitle: "Apartment Interior Fit-Out",
    category: "Apartments",
    image: "/images/project-19.jpg",
    href: "/luxury-dubai-south-apartment-interior-fitout",
  },
  {
    title: "Al Noaf Cafe",
    subtitle: "Cafe Interior Design",
    category: "Restaurants",
    image: "/images/project-20.jpg",
    href: "/al-noaf-cafe",
  },
  {
    title: "Al Riqaibah Cafe",
    subtitle: "Cafe Interior Fit-Out",
    category: "Restaurants",
    image: "/images/project-21.jpg",
    href: "/al-riqaibah-cafe",
  },
  {
    title: "Mowradda Villa Renovation",
    subtitle: "Villa Renovation Project",
    category: "Villas",
    image: "/images/project-1.jpg",
    href: "/mowradda-villa-renovation",
  },
  {
    title: "Hoshi Office",
    subtitle: "Office Interior Design",
    category: "Offices",
    image: "/images/project-2.jpg",
    href: "/hoshi-office",
  },
  {
    title: "Al Ramaqia Apartment",
    subtitle: "Apartment Interior Design",
    category: "Apartments",
    image: "/images/project-3.jpg",
    href: "/al-ramaqia-apartment",
  },
  {
    title: "Aljada Sharjah Retail",
    subtitle: "Retail Interior Fit-Out",
    category: "Retail",
    image: "/images/project-4.jpg",
    href: "/aljada-sharjah-retail",
  },
  {
    title: "Dubai Hills Estate Apartment",
    subtitle: "Apartment Interior Design",
    category: "Apartments",
    image: "/images/project-5.jpg",
    href: "/dubai-hills-estate-apartment",
  },
];

const ProjectsGallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="bg-black pb-16">
      <div className="mx-auto max-w-[1250px] px-6 sm:px-10 lg:px-16">
        {/* Filter Bar */}
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

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="group mx-auto w-full max-w-[320px] bg-[#0d0a05] overflow-hidden transition duration-300 hover:-translate-y-1"
            >
              <div className="relative h-[180px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="bg-[#100b04] px-4 py-4 text-center border-t border-[#8c6b1f]/20">
                <h3 className="text-white text-[17px] font-play">
                  {project.title}
                </h3>

                <p className="text-white/50 text-xs mt-1">
                  {project.subtitle}
                </p>

                <Link href={project.href}>
                  <button className="mt-3 w-full border border-[#8c6b1f]/60 text-[#d4af37] py-2 rounded-md text-sm transition duration-300 hover:bg-[#1a1408] hover:text-[#f0c95a]">
                    View Project →
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

export default ProjectsGallerySection;