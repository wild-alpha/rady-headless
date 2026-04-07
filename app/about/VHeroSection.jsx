import Image from "next/image";

export default function VHeroSection() {
  return (
    <section className="relative min-h-[42vh] overflow-hidden sm:min-h-[50vh] md:min-h-[62vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/about/hero.jpg"
          alt="Luxury living room interior by RadyInterior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/35" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[42vh] max-w-7xl items-center px-4 sm:min-h-[50vh] sm:px-6 md:min-h-[62vh] lg:px-8">
        <div className="max-w-5xl">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Designed With Purpose,
            <br className="hidden sm:block" />
            Built With Precision.
          </h1>
        </div>
      </div>
    </section>
  );
}