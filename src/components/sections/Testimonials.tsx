const testimonials = [
  {
    quote:
      "My car looks better than the day I bought it. The ceramic coating is flawless and they came straight to my driveway — couldn't be easier.",
    author: "James",
    location: "Sydney",
  },
  {
    quote:
      "Booked online in under a minute and they showed up right on time. The paint correction results are unreal, worth every cent.",
    author: "David",
    location: "Sydney",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-5 font-sans text-base text-ink-soft sm:text-lg">
            The relationships we build are the true measure of our work.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-2 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="flex flex-col">
              <span className="font-display text-6xl leading-none text-ink-soft/40">
                &ldquo;
              </span>

              <p className="mt-4 font-display text-xl leading-relaxed text-ink sm:text-2xl">
                {testimonial.quote}
              </p>

              <div className="mt-8 border-t border-line pt-6">
                <p className="font-sans text-sm text-ink-soft">
                  {testimonial.author}
                </p>
                <p className="font-sans text-sm text-ink-soft">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
