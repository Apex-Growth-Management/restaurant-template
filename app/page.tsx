import Link from "next/link";
import Image from "next/image";

const dishes = [
  {
    name: "Smoked Brisket",
    description: "12-hour oak-smoked brisket with house BBQ glaze, roasted garlic mash, and seasonal greens.",
    price: "$32",
    tag: "Chef's Pick",
    photo: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80&fit=crop",
  },
  {
    name: "Pan-Seared Salmon",
    description: "Atlantic salmon with lemon caper butter, wild rice pilaf, and charred asparagus.",
    price: "$28",
    tag: "Fan Favorite",
    photo: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80&fit=crop",
  },
  {
    name: "Truffle Mushroom Risotto",
    description: "Arborio rice, wild mushroom medley, black truffle oil, aged parmesan, and fresh herbs.",
    price: "$24",
    tag: "Vegetarian",
    photo: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80&fit=crop",
  },
];

const reviews = [
  {
    name: "Sarah M.",
    text: "The atmosphere is incredible and the food is even better. The brisket is unlike anything I've had in Raleigh.",
    stars: 5,
  },
  {
    name: "James T.",
    text: "Ember & Oak has become our go-to for date nights. Impeccable service and a wine list that never disappoints.",
    stars: 5,
  },
  {
    name: "Priya K.",
    text: "The truffle risotto is absolutely divine. We've been back three times in the past month.",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <main className="bg-stone-950 text-white">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80&fit=crop"
          alt="Ember & Oak restaurant interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">Raleigh, NC — Est. 2019</p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Where Every Meal<br />
            <span className="text-amber-400">Tells a Story</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Handcrafted dishes, seasonal ingredients, and an atmosphere that feels like home — elevated.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6 text-sm text-white/50 z-10">
          <span>Mon–Thu: 5pm – 10pm</span>
          <span>·</span>
          <span>Fri–Sat: 5pm – 11pm</span>
          <span>·</span>
          <span>Sun: 4pm – 9pm</span>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 px-6 bg-stone-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">From the Kitchen</p>
            <h2 className="text-3xl md:text-5xl font-extrabold">Tonight&apos;s Favorites</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {dishes.map((dish) => (
              <div key={dish.name} className="bg-stone-950 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-colors group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={dish.photo}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs bg-black/70 text-amber-400 border border-amber-500/30 rounded-full px-3 py-1 font-medium backdrop-blur-sm">
                      {dish.tag}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-sm bg-black/70 text-amber-400 font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                      {dish.price}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2">{dish.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/menu" className="text-amber-500 hover:text-amber-400 font-semibold transition-colors">
              See Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* About / Ambiance */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Rooted in Craft,<br />Driven by Flavor</h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Ember & Oak was born from a simple idea: great food deserves great atmosphere. Our chefs source locally whenever possible, building menus around what&apos;s fresh, seasonal, and bold.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Whether you&apos;re celebrating a milestone or just craving a night out, we&apos;re here to make it memorable.
            </p>
            <Link href="/about" className="text-amber-500 hover:text-amber-400 font-semibold transition-colors">
              Learn More About Us →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden h-48">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80&fit=crop"
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-48 mt-6">
              <Image
                src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80&fit=crop"
                alt="Craft cocktails"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-48">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80&fit=crop"
                alt="Chef preparing food"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden h-48 mt-6">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80&fit=crop"
                alt="Fine dining"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 bg-stone-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">Guest Reviews</p>
            <h2 className="text-3xl md:text-5xl font-extrabold">What People Are Saying</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <div key={r.name} className="bg-stone-950 border border-white/10 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <span key={i} className="text-amber-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <p className="text-white/40 text-sm font-semibold">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1920&q=80&fit=crop"
          alt="Dining table setting"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready for an Unforgettable Evening?</h2>
          <p className="text-white/60 mb-8 text-lg">
            Reservations recommended, walk-ins welcome based on availability.
          </p>
          <Link
            href="/contact"
            className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-5 rounded-lg text-xl transition-colors"
          >
            Reserve Your Table
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm bg-stone-950">
        © {new Date().getFullYear()} Ember & Oak Kitchen. All rights reserved.
      </footer>
    </main>
  );
}
