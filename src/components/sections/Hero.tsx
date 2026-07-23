import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2400&auto=format&fit=crop"
        alt="Detailer hand-washing a luxury car with foam and buckets"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/20" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <h1 className="font-display text-4xl leading-tight text-white sm:text-6xl md:text-7xl">
          Mobile Car Detailing, Done Right.
        </h1>
        <p className="mt-6 max-w-xl font-sans text-base text-white/85 sm:text-lg">
          Premium ceramic coating and paint correction brought directly to
          your driveway. Book in 60 seconds.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="#contact"
            className="w-full rounded-full bg-accent px-8 py-3.5 text-center font-sans text-sm font-medium tracking-wide text-white transition-colors hover:bg-accent-dark sm:w-auto"
          >
            Book Now
          </a>
          <a
            href="#portfolio"
            className="w-full rounded-full border border-white/60 px-8 py-3.5 text-center font-sans text-sm font-medium tracking-wide text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
