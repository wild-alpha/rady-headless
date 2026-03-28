"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  "All",
  "Apartments",
  "Villas",
  "Offices",
  "Restaurants",
  "Retail",
  "Clinics",
  "Beauty Salons",
];

const projects = [
  {
    title: "Dubai Silicon Oasis Apartment",
    subtitle: "Apartment Interior",
    category: "Apartments",
    image: "/images/project-1.jpg",
    href: "/projects/dubai-silicon-oasis-apartment",
  },
  {
    title: "Dubai Marina Apartment",
    subtitle: "Apartment Interior Design",
    category: "Apartments",
    image: "/images/project-2.jpg",
    href: "/projects/dubai-marina-apartment",
  },
  {
    title: "Business Bay Apartment",
    subtitle: "Luxury Apartment Interior",
    category: "Apartments",
    image: "/images/project-3.jpg",
    href: "/projects/business-bay-apartment",
  },
  {
    title: "Jumeirah Islands Villa",
    subtitle: "Villa Interior",
    category: "Villas",
    image: "/images/project-4.jpg",
    href: "/projects/jumeirah-islands-villa",
  },
  {
    title: "Palm Jumeirah Villa",
    subtitle: "Villa Interior Design",
    category: "Villas",
    image: "/images/project-5.jpg",
    href: "/projects/palm-jumeirah-villa",
  },
  {
    title: "Emirates Hills Villa",
    subtitle: "Luxury Villa Fit-Out",
    category: "Villas",
    image: "/images/project-6.jpg",
    href: "/projects/emirates-hills-villa",
  },
  {
    title: "Downtown Dubai Office",
    subtitle: "Office Fit-out",
    category: "Offices",
    image: "/images/project-7.jpg",
    href: "/projects/downtown-dubai-office",
  },
  {
    title: "Business Bay Office",
    subtitle: "Commercial Office Interior",
    category: "Offices",
    image: "/images/project-8.jpg",
    href: "/projects/business-bay-office",
  },
  {
    title: "DIFC Office Interior",
    subtitle: "Corporate Workspace Design",
    category: "Offices",
    image: "/images/project-9.jpg",
    href: "/projects/difc-office-interior",
  },
  {
    title: "DIFC Restaurant Interior",
    subtitle: "Restaurant Interior Design",
    category: "Restaurants",
    image: "/images/project-10.jpg",
    href: "/projects/difc-restaurant-interior",
  },
  {
    title: "Dubai Marina Restaurant",
    subtitle: "Hospitality Interior Design",
    category: "Restaurants",
    image: "/images/project-11.jpg",
    href: "/projects/dubai-marina-restaurant",
  },
  {
    title: "JBR Restaurant Fit-Out",
    subtitle: "Restaurant Fit-Out Project",
    category: "Restaurants",
    image: "/images/project-12.jpg",
    href: "/projects/jbr-restaurant-fitout",
  },
  {
    title: "City Walk Retail Store",
    subtitle: "Retail Interior Design",
    category: "Retail",
    image: "/images/project-13.jpg",
    href: "/projects/city-walk-retail-store",
  },
  {
    title: "Dubai Mall Retail Kiosk",
    subtitle: "Retail Fit-Out",
    category: "Retail",
    image: "/images/project-14.jpg",
    href: "/projects/dubai-mall-retail-kiosk",
  },
  {
    title: "Mall of the Emirates Store",
    subtitle: "Luxury Retail Interior",
    category: "Retail",
    image: "/images/project-15.jpg",
    href: "/projects/mall-of-the-emirates-store",
  },
  {
    title: "Jumeirah Clinic Interior",
    subtitle: "Clinic Interior Design",
    category: "Clinics",
    image: "/images/project-16.jpg",
    href: "/projects/jumeirah-clinic-interior",
  },
  {
    title: "Business Bay Medical Center",
    subtitle: "Healthcare Interior Design",
    category: "Clinics",
    image: "/images/project-17.jpg",
    href: "/projects/business-bay-medical-center",
  },
  {
    title: "Dental Clinic Fit-Out",
    subtitle: "Modern Clinic Interior",
    category: "Clinics",
    image: "/images/project-18.jpg",
    href: "/projects/dental-clinic-fitout",
  },
  {
    title: "JVC Salon Interior Design",
    subtitle: "Beauty Salon Interior Design",
    category: "Beauty Salons",
    image: "/images/project-19.jpg",
    href: "/projects/jvc-salon-interior-design",
  },
  {
    title: "Downtown Beauty Lounge",
    subtitle: "Salon Fit-Out Design",
    category: "Beauty Salons",
    image: "/images/project-20.jpg",
    href: "/projects/downtown-beauty-lounge",
  },
  {
    title: "Marina Nail Bar",
    subtitle: "Beauty Space Interior",
    category: "Beauty Salons",
    image: "/images/project-21.jpg",
    href: "/projects/marina-nail-bar",
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