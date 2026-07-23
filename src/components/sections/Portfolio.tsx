import Image from "next/image";

const projects = [
  {
    name: "Ceramic Coating",
    location: "Full Gloss Protection",
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2000&auto=format&fit=crop",
    alt: "Red supercar with a glossy ceramic-coated finish in a showroom",
    span: "md:col-span-4 md:row-span-2",
  },
  {
    name: "Paint Correction",
    location: "Swirl & Scratch Removal",
    image:
      "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?q=80&w=1600&auto=format&fit=crop",
    alt: "Luxury sports car with a flawless corrected paint finish under showroom lighting",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    name: "Headlight Restoration",
    location: "Clarity Renewed",
    image:
      "https://images.unsplash.com/photo-1583267746897-2cf415887172?q=80&w=1600&auto=format&fit=crop",
    alt: "Close-up of a luxury car's front grille and headlights",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    name: "Interior Deep Clean",
    location: "Showroom Fresh",
    image:
      "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?q=80&w=1600&auto=format&fit=crop",
    alt: "Luxury car on display under dramatic showroom lighting",
    span: "md:col-span-3 md:row-span-1",
  },
  {
    name: "Full Exterior Detail",
    location: "Bumper to Bumper",
    image:
      "https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?q=80&w=1600&auto=format&fit=crop",
    alt: "White luxury sports car driving through autumn foliage",
    span: "md:col-span-3 md:row-span-1",
  },
  {
    name: "Wheel & Rim Detail",
    location: "Every Spoke, Spotless",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop",
    alt: "Blue muscle car with detailed wheels in desert light",
    span: "md:col-span-6 md:row-span-1",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            Featured Work
          </h2>
          <p className="mt-5 font-sans text-base text-ink-soft sm:text-lg">
            A selection of details finished with the same care and precision
            we bring to every vehicle.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-6 md:auto-rows-[220px] md:gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`group relative aspect-[4/5] overflow-hidden md:aspect-auto ${project.span}`}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover transition-transform duration-700 md:group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/15 to-transparent transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-6 transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                <h3 className="font-display text-xl text-white sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-1 font-sans text-sm text-white/80">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
