const steps = [
  {
    number: "01",
    title: "Book Online",
    body: "Choose your service and pick a time that works for you. Booking takes less than 60 seconds, no phone calls required.",
  },
  {
    number: "02",
    title: "We Come to You",
    body: "Our fully-equipped mobile detailing van arrives at your home or office, ready to work — no drop-off required.",
  },
  {
    number: "03",
    title: "The Detail",
    body: "Our certified detailers hand-wash, correct, and protect your paint with premium products and obsessive attention to every panel.",
  },
  {
    number: "04",
    title: "The Reveal",
    body: "Step outside to a car that looks better than the day you drove it off the lot, protected and ready to turn heads.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-5 font-sans text-base text-ink-soft sm:text-lg">
            A simple, convenient process from booking to reveal — all done
            at your location.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 divide-y divide-line md:mt-24 md:grid-cols-4 md:divide-y-0 md:divide-x">
          {steps.map((step) => (
            <div key={step.number} className="px-0 py-10 first:pt-0 last:pb-0 md:px-8 md:py-0 md:first:pl-0 md:last:pr-0">
              <span className="font-display text-5xl text-ink-soft/70">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-2xl text-ink">
                {step.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-ink-soft sm:text-base">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
