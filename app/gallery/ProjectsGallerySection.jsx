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
<<<<<<< HEAD
=======
  "Prayer Rooms",
  "Majlis",
  "Kitchens",
>>>>>>> 63d8315699495e243aed1d357ff2faa1633c0984
];

const projects = [
  
  {
<<<<<<< HEAD
    title: "Al Barari Villa",
    subtitle: "Villa Interior",
    category: "Villas",
    image: "/images/al-barari-villa.jpg",
    href: "/al-barari-villa",
  },
  {
    title: "Aljada Retail Design",
    subtitle: "Retail Interior",
    category: "Retail",
    image: "/images/aljada-retail-design.png",
    href: "/aljada-retail-design",
  },
  {
    title: "Aljada Sharjah Office",
    subtitle: "Office Interior",
    category: "Offices",
    image: "/images/aljada-sharjah-office-interior.jpg",
    href: "/aljada-sharjah-office-interior",
  },
  {
    title: "Al Noaf Café",
    subtitle: "Café Interior",
    category: "Restaurants",
    image: "/images/al-noaf-cafe-interior.jpg",
    href: "/al-noaf-cafe-interior",
  },
  {
    title: "Al Qarayen Prayer Room",
    subtitle: "Prayer Room Interior",
    category: "Offices",
    image: "/images/al-qarayen-prayer-room.webp",
    href: "/al-qarayen-prayer-room",
  },
  {
    title: "Al Rahmaniya Retail",
    subtitle: "Retail Interior",
    category: "Retail",
    image: "/images/al-rahmaniya-retail-interior.jpeg",
    href: "/al-rahmaniya-retail-interior",
  },
  {
    title: "Al Ramaqia Apartment",
    subtitle: "Apartment Interior",
    category: "Apartments",
    image: "/images/al-ramaqia-apartment.webp",
    href: "/al-ramaqia-apartment",
  },
  {
    title: "Al Riqaibah Café",
    subtitle: "Café Interior",
    category: "Restaurants",
    image: "/images/al-riqaibah-cafe.webp",
    href: "/al-riqaibah-cafe",
  },
  {
    title: "Al Suyoh Majlis",
    subtitle: "Majlis Interior",
    category: "Villas",
    image: "/images/al-suyoh-majlis-interior.webp",
    href: "/al-suyoh-majlis-interior",
  },
  {
    title: "Al Tai Kitchen Fit-Out",
    subtitle: "Kitchen Fit-Out",
    category: "Villas",
    image: "/images/al-tai-sharjah-kitchen-fit-out.webp",
    href: "/al-tai-sharjah-kitchen-fit-out",
  },
  {
    title: "Al Zahia Villa",
    subtitle: "Villa Interior",
    category: "Villas",
    image: "/images/al-zahia-villa-interior.webp",
    href: "/al-zahia-villa-interior",
  },
  {
    title: "Arabian Ranches Villa",
    subtitle: "Villa Fit-Out",
    category: "Villas",
    image: "/images/arabian-ranches-villa-interior-fit-ou.webp",
    href: "/arabian-ranches-villa-interior-fit-ou",
  },
  {
    title: "Barashi Retail Sharjah",
    subtitle: "Retail Interior",
    category: "Retail",
    image: "/images/barashi-retail-interior-sharjah.webp",
    href: "/barashi-retail-interior-sharjah",
  },
  {
    title: "Bluewaters Island Apartment",
    subtitle: "Apartment Interior",
    category: "Apartments",
    image: "/images/bluewaters-island-apartment.webp",
    href: "/bluewaters-island-apartment",
  },
  {
    title: "Bluewaters Island Retail",
    subtitle: "Retail Interior",
    category: "Retail",
    image: "/images/bluewaters-island-retail.webp",
    href: "/bluewaters-island-retail",
  },
  {
    title: "DAMAC Hills Townhouse",
    subtitle: "Townhouse Interior",
    category: "Villas",
    image: "/images/damac-hills-townhouse.webp",
    href: "/damac-hills-townhouse",
  },
  {
    title: "District One MBR Villa",
    subtitle: "Villa Interior",
    category: "Villas",
    image: "/images/district-one-mbr-villa.webp",
    href: "/district-one-mbr-villa",
  },
  {
    title: "Downtown Dubai Apartment",
    subtitle: "Apartment Interior",
    category: "Apartments",
    image: "/images/downtown-dubai-apartment.webp",
    href: "/downtown-dubai-apartment",
  },
  {
    title: "Downtown Dubai Office",
    subtitle: "Office Interior",
    category: "Offices",
    image: "/images/downtown-dubai-office.webp",
    href: "/downtown-dubai-office",
  },
  {
    title: "Downtown Dubai Restaurant",
    subtitle: "Restaurant Interior",
    category: "Restaurants",
    image: "/images/downtown-dubai-restaurant.webp",
    href: "/downtown-dubai-restaurant",
  },
  {
    title: "Dubai Creek 2 Bedroom Apartment",
    subtitle: "Apartment Interior",
    category: "Apartments",
    image: "/images/dubai-creek-2-bedroom-apartment.webp",
    href: "/dubai-creek-2-bedroom-apartment",
  },
  {
    title: "Dubai Creek Office Fit-Out",
    subtitle: "Office Fit-Out",
    category: "Offices",
    image: "/images/dubai-creek-office-fit-out.webp",
    href: "/dubai-creek-office-fit-out",
  },
  {
    title: "Dubai Hills 3 Bedroom Apartment",
    subtitle: "Apartment Interior",
    category: "Apartments",
    image: "/images/dubai-hills-estate-3-bedroom-apartment.webp",
    href: "/dubai-hills-estate-3-bedroom-apartment",
  },
  {
    title: "Dubai Hills Estate Villa",
    subtitle: "Villa Interior",
    category: "Villas",
    image: "/images/dubai-hills-estate-villa-interior.webp",
    href: "/dubai-hills-estate-villa-interior",
  },
  {
    title: "Dubai Islands Villa",
    subtitle: "Villa Interior",
    category: "Villas",
    image: "/images/dubai-islands-villa.webp",
    href: "/dubai-islands-villa",
  },
  {
    title: "Dubai Marina Office",
    subtitle: "Office Fit-Out",
    category: "Offices",
    image: "/images/dubai-marina-office-fitout.webp",
    href: "/dubai-marina-office-fitout",
  },
  {
    title: "Dubai South Apartment",
    subtitle: "Apartment Interior",
    category: "Apartments",
    image: "/images/dubai-south-apartment.webp",
    href: "/dubai-south-apartment",
  },
  {
    title: "Emaar Beachfront Palm View",
    subtitle: "Apartment Interior",
    category: "Apartments",
    image: "/images/emaar-beachfront-palm-view-apartment.webp",
    href: "/emaar-beachfront-palm-view-apartment",
  },
  {
    title: "Emaar Beachfront Restaurant",
    subtitle: "Restaurant Interior",
    category: "Restaurants",
    image: "/images/emaar-beachfront-restaurant.webp",
    href: "/emaar-beachfront-restaurant",
  },
  {
    title: "Emirates Hills Villa",
    subtitle: "Villa Interior",
    category: "Villas",
    image: "/images/emirates-hills-villa.webp",
    href: "/emirates-hills-villa",
  },
  {
    title: "Fujairah Home Office",
    subtitle: "Home Office Interior",
    category: "Offices",
    image: "/images/fujairah-home-office-interior.webp",
    href: "/fujairah-home-office-interior",
  },
  {
    title: "Hoshi Office",
    subtitle: "Office Interior",
    category: "Offices",
    image: "/images/hoshi-office-interior-design.webp",
    href: "/hoshi-office-interior-design",
  },
  {
    title: "Jumeirah Bay Island Mansion",
    subtitle: "Luxury Mansion Interior",
    category: "Villas",
    image: "/images/jumeirah-bay-island-mansion.webp",
    href: "/jumeirah-bay-island-mansion",
  },
  {
    title: "Jumeirah Golf Estates Villa",
    subtitle: "Villa Interior",
    category: "Villas",
    image: "/images/jumeirah-golf-estates-villa.png",
    href: "/jumeirah-golf-estates-villa",
  },
  {
    title: "Jumeirah Islands Villa Renovation",
    subtitle: "Villa Renovation",
    category: "Villas",
    image: "/images/jumeirah-islands-villa-renovation.webp",
    href: "/jumeirah-islands-villa-renovation",
  },
  {
    title: "La Mer Beach Restaurant",
    subtitle: "Restaurant Interior",
    category: "Restaurants",
    image: "/images/la-mer-beach-restaurant.webp",
    href: "/la-mer-beach-restaurant",
  },
  {
    title: "Maryam Island Apartment",
    subtitle: "Apartment Fit-Out",
    category: "Apartments",
    image: "/images/maryam-island-apartment-fit-out.webp",
    href: "/maryam-island-apartment-fit-out",
  },
  {
    title: "Meadows Villa",
    subtitle: "Villa Interior",
    category: "Villas",
    image: "/images/meadows-villa-interior.png",
    href: "/meadows-villa-interior",
  },
  {
    title: "Moradda Villa Renovation",
    subtitle: "Villa Renovation",
    category: "Villas",
    image: "/images/moradda-villa-renovation.png",
    href: "/moradda-villa-renovation",
  },
  {
    title: "Nad Al Sheba Villa",
    subtitle: "Villa Interior",
    category: "Villas",
    image: "/images/nad-al-sheba-villa-interior.webp",
    href: "/nad-al-sheba-villa-interior",
  },
  {
    title: "Palm Jumeirah Apartment",
    subtitle: "Apartment Interior",
    category: "Apartments",
    image: "/images/palm-jumeirah-apartment.webp",
    href: "/palm-jumeirah-apartment",
  },
  {
    title: "Palm Jumeirah Villa",
    subtitle: "Villa Interior",
    category: "Villas",
    image: "/images/palm-jumeirah-villa.webp",
    href: "/palm-jumeirah-villa",
  },
  {
    title: "Ras Al Khaimah Resort Restaurant",
    subtitle: "Restaurant Interior",
    category: "Restaurants",
    image: "/images/ras-al-khaimah-resort-restaurant.webp",
    href: "/ras-al-khaimah-resort-restaurant",
=======
    title: "Palm Jumeirah Villa",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-1.jpg",
    href: "/palm-jumeirah-villa",
  },
  {
    title: "Emirates Hills Villa",
    subtitle: "Luxury Villa Interior",
    category: "Villas",
    image: "/images/project-2.jpg",
    href: "/emirates-hills-villa",
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
    title: "Dubai Hills Estate Villa Interior",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-5.jpg",
    href: "/dubai-hills-estate-villa-interior",
  },
  {
    title: "Al Barari Villa",
    subtitle: "Luxury Villa Interior",
    category: "Villas",
    image: "/images/project-6.jpg",
    href: "/al-barari-villa",
  },
  {
    title: "Jumeirah Golf Estates Villa",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-7.jpg",
    href: "/jumeirah-golf-estates-villa",
  },
  {
    title: "Downtown Dubai Apartment",
    subtitle: "Luxury Apartment Interior",
    category: "Apartments",
    image: "/images/project-8.jpg",
    href: "/downtown-dubai-apartment",
  },
  {
    title: "Dubai Marina Office Fitout",
    subtitle: "Office Interior Design",
    category: "Offices",
    image: "/images/project-9.jpg",
    href: "/dubai-marina-office-fitout",
  },
  {
    title: "Bluewaters Island Retail",
    subtitle: "Retail Interior Fit-Out",
    category: "Retail",
    image: "/images/project-10.jpg",
    href: "/bluewaters-island-retail",
  },
  {
    title: "Emaar Beachfront Palm View Apartment",
    subtitle: "Apartment Interior Design",
    category: "Apartments",
    image: "/images/project-11.jpg",
    href: "/emaar-beachfront-palm-view-apartment",
  },
  {
    title: "Al Zahia Villa Interior",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-12.jpg",
    href: "/al-zahia-villa-interior",
  },
  {
    title: "Aljada Sharjah Office Interior",
    subtitle: "Office Fit-Out",
    category: "Offices",
    image: "/images/project-13.jpg",
    href: "/aljada-sharjah-office-interior",
  },
  {
    title: "Maryam Island Apartment Fit-Out",
    subtitle: "Apartment Interior",
    category: "Apartments",
    image: "/images/project-14.jpg",
    href: "/maryam-island-apartment-fit-out",
  },
  {
    title: "Sharjah Sustainable City Villa",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-15.jpg",
    href: "/sharjah-sustainable-city-villa",
  },
  {
    title: "Tilal City Villa Interior",
    subtitle: "Villa Interior Fit-Out",
    category: "Villas",
    image: "/images/project-16.jpg",
    href: "/tilal-city-villa-interior",
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
    title: "Hoshi Office Interior Design",
    subtitle: "Office Interior Design",
    category: "Offices",
    image: "/images/project-20.jpg",
    href: "/hoshi-office-interior-design",
  },
  {
    title: "Al Qarayen Prayer Room",
    subtitle: "Prayer Room Interior",
    category: "Prayer Rooms",
    image: "/images/project-21.jpg",
    href: "/al-qarayen-prayer-room",
  },
  {
    title: "Al Suyoh Majlis Interior",
    subtitle: "Majlis Interior Design",
    category: "Majlis",
    image: "/images/project-1.jpg",
    href: "/al-suyoh-majlis-interior",
  },
  {
    title: "Al Tai Sharjah Kitchen Fit-Out",
    subtitle: "Kitchen Interior Design",
    category: "Kitchens",
    image: "/images/project-2.jpg",
    href: "/al-tai-sharjah-kitchen-fit-out",
  },
  {
    title: "Downtown Dubai Restaurant",
    subtitle: "Restaurant Interior Fit-Out",
    category: "Restaurants",
    image: "/images/project-3.jpg",
    href: "/downtown-dubai-restaurant",
  },
  {
    title: "Al Rahmaniya Retail Interior",
    subtitle: "Retail Interior Design",
    category: "Retail",
    image: "/images/project-4.jpg",
    href: "/al-rahmaniya-retail-interior",
  },
  {
    title: "Jumeirah Islands Villa Renovation",
    subtitle: "Villa Renovation Project",
    category: "Villas",
    image: "/images/project-5.jpg",
    href: "/jumeirah-islands-villa-renovation",
  },
  {
    title: "Nad Al Sheba Villa Interior",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-6.jpg",
    href: "/nad-al-sheba-villa-interior",
  },
  {
    title: "Arabian Ranches Villa Interior Fit-Out",
    subtitle: "Family Villa Interior",
    category: "Villas",
    image: "/images/project-7.jpg",
    href: "/arabian-ranches-villa-interior-fit-ou",
  },
  {
    title: "Tilal Al Ghaf Villa Renovation",
    subtitle: "Villa Renovation Project",
    category: "Villas",
    image: "/images/project-8.jpg",
    href: "/tilal-al-ghaf-villa-renovation",
  },
  {
    title: "Damac Hills Townhouse",
    subtitle: "Townhouse Interior Design",
    category: "Townhouses",
    image: "/images/project-9.jpg",
    href: "/damac-hills-townhouse",
  },
  {
    title: "Meadows Villa Interior",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-10.jpg",
    href: "/meadows-villa-interior",
  },
  {
    title: "Palm Jumeirah Apartment",
    subtitle: "Apartment Interior Design",
    category: "Apartments",
    image: "/images/project-11.jpg",
    href: "/palm-jumeirah-apartment",
  },
  {
    title: "Umm Sugeim Villa",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-12.jpg",
    href: "/umm-sugeim-villa",
  },
  {
    title: "Dubai Creek 2 Bedroom Apartment",
    subtitle: "Luxury Apartment Interior",
    category: "Apartments",
    image: "/images/project-13.jpg",
    href: "/dubai-creek-2-bedroom-apartment",
  },
  {
    title: "Dubai Creek Office Fit-Out",
    subtitle: "Office Interior Fit-Out",
    category: "Offices",
    image: "/images/project-14.jpg",
    href: "/dubai-creek-office-fit-out",
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
>>>>>>> 63d8315699495e243aed1d357ff2faa1633c0984
  },
  {
    title: "Royal Atlantis 2 Bedroom Apartment",
    subtitle: "Luxury Apartment Interior",
    category: "Apartments",
<<<<<<< HEAD
    image: "/images/royal-atlantis-2-bedroom-apartment.webp",
    href: "/royal-atlantis-2-bedroom-apartment",
  },
  {
    title: "Sharjah Sustainable City Villa",
    subtitle: "Eco Villa Interior",
    category: "Villas",
    image: "/images/sharjah-sustainable-city-villa.png",
    href: "/sharjah-sustainable-city-villa",
  },
  {
    title: "Tilal Al Ghaf Villa Renovation",
    subtitle: "Villa Renovation",
    category: "Villas",
    image: "/images/tilal-al-ghaf-villa-renovation.webp",
    href: "/tilal-al-ghaf-villa-renovation",
  },
  {
    title: "Tilal City Villa",
    subtitle: "Villa Interior",
    category: "Villas",
    image: "/images/tilal-city-villa-interior.webp",
    href: "/tilal-city-villa-interior",
  },
  {
    title: "Umm Suqeim Villa",
    subtitle: "Villa Interior",
    category: "Villas",
    image: "/images/umm-sugeim-villa.webp",
    href: "/umm-sugeim-villa",
  }

=======
    image: "/images/project-18.jpg",
    href: "/royal-atlantis-2-bedroom-apartment",
  },
  {
    title: "Dubai South Apartment",
    subtitle: "Apartment Interior Fit-Out",
    category: "Apartments",
    image: "/images/project-19.jpg",
    href: "/dubai-south-apartment",
  },
  {
    title: "Al Noaf Cafe Interior",
    subtitle: "Cafe Interior Design",
    category: "Restaurants",
    image: "/images/project-20.jpg",
    href: "/al-noaf-cafe-interior",
  },
  {
    title: "Al Riqaibah Cafe",
    subtitle: "Cafe Interior Fit-Out",
    category: "Restaurants",
    image: "/images/project-21.jpg",
    href: "/al-riqaibah-cafe",
  },
  {
    title: "Moradda Villa Renovation",
    subtitle: "Villa Renovation Project",
    category: "Villas",
    image: "/images/project-1.jpg",
    href: "/moradda-villa-renovation",
  },
  {
    title: "Al Ramaqia Apartment",
    subtitle: "Apartment Interior Design",
    category: "Apartments",
    image: "/images/project-2.jpg",
    href: "/al-ramaqia-apartment",
  },
  {
    title: "Aljada Retail Design",
    subtitle: "Retail Interior Fit-Out",
    category: "Retail",
    image: "/images/project-3.jpg",
    href: "/aljada-retail-design",
  },
  {
    title: "Bluewaters Island Apartment",
    subtitle: "Apartment Interior Design",
    category: "Apartments",
    image: "/images/project-4.jpg",
    href: "/bluewaters-island-apartment",
  },
  {
    title: "Villa Interior Design Dubai",
    subtitle: "Luxury Villa Interior Design",
    category: "Villas",
    image: "/images/project-5.jpg",
    href: "/villa-interior-design-dubai",
  },
>>>>>>> 63d8315699495e243aed1d357ff2faa1633c0984
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