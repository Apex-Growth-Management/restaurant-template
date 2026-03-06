import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Ember & Oak Kitchen | Fine Dining & Craft Cocktails",
  description: "Experience elevated comfort food in a warm, inviting atmosphere. Fresh ingredients, handcrafted cocktails, and unforgettable evenings in Raleigh, NC.",
  openGraph: {
    title: "Ember & Oak Kitchen | Fine Dining in Raleigh, NC",
    description: "Handcrafted dishes, seasonal ingredients, and an atmosphere that feels like home — elevated.",
  },
};

const defaultDishes = [
  { _id: "1", name: "Smoked Brisket", description: "12-hour oak-smoked brisket with house BBQ glaze, roasted garlic mash, and seasonal greens.", price: "$32", tag: "Chef's Pick", photoUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80&fit=crop" },
  { _id: "2", name: "Pan-Seared Salmon", description: "Atlantic salmon with lemon caper butter, wild rice pilaf, and charred asparagus.", price: "$28", tag: "Fan Favorite", photoUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80&fit=crop" },
  { _id: "3", name: "Truffle Mushroom Risotto", description: "Arborio rice, wild mushroom medley, black truffle oil, aged parmesan, and fresh herbs.", price: "$24", tag: "Vegetarian", photoUrl: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80&fit=crop" },
];

const defaultReviews = [
  { _id: "1", name: "Sarah M.", text: "The atmosphere is incredible and the food is even better. The brisket is unlike anything I've had in Raleigh.", stars: 5 },
  { _id: "2", name: "James T.", text: "Ember & Oak has become our go-to for date nights. Impeccable service and a wine list that never disappoints.", stars: 5 },
  { _id: "3", name: "Priya K.", text: "The truffle risotto is absolutely divine. We've been back three times in the past month.", stars: 5 },
];

export default async function HomePage() {
  const [{ data: settings }, { data: sanityDishes }, { data: sanityReviews }] = await Promise.all([
    sanityFetch({ query: `*[_type == "siteSettings" && _id == "siteSettings"][0]` }),
    sanityFetch({ query: `*[_type == "menuItem"] | order(order asc)[0...3] { _id, name, description, price, tag, photo }` }),
    sanityFetch({ query: `*[_type == "review"] | order(order asc)` }),
  ]);

  const restaurantName = settings?.restaurantName || "Ember & Oak";
  const tagline = settings?.tagline || "Raleigh, NC — Est. 2019";
  const heroTitle = settings?.heroTitle || "Where Every Meal";
  const heroSubtitle = settings?.heroSubtitle || "Handcrafted dishes, seasonal ingredients, and an atmosphere that feels like home — elevated.";
  const phone = settings?.phone || "(555) 000-0000";
  const address = settings?.address || "Your City, ST 00000";
  const hoursWeekday = settings?.hoursWeekday || "Mon–Thu: 5pm – 10pm";
  const hoursWeekend = settings?.hoursWeekend || "Fri–Sat: 5pm – 11pm";
  const hoursSunday = settings?.hoursSunday || "Sun: 4pm – 9pm";

  const dishes = sanityDishes?.length
    ? sanityDishes.map((d: { _id: string; name: string; description: string; price: string; tag: string; photo?: object }) => ({
        ...d,
        photoUrl: d.photo ? urlFor(d.photo).width(600).url() : "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80&fit=crop",
      }))
    : defaultDishes;

  const reviews = sanityReviews?.length ? sanityReviews : defaultReviews;

  return (
    <main className="bg-stone-950 text-white">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80&fit=crop"
          alt="Restaurant interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-4">{tagline}</p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              {heroTitle}<br />
              <span className="text-amber-400">Tells a Story</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-xl mx-auto">{heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30"
              >
                Reserve a Table
              </Link>
              <Link
                href="/menu"
                className="bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300"
              >
                View Menu →
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-6 text-sm text-white/50 z-10">
          <span>{hoursWeekday}</span>
          <span>·</span>
          <span>{hoursWeekend}</span>
          <span>·</span>
          <span>{hoursSunday}</span>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 px-6 bg-stone-900">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">From the Kitchen</p>
              <h2 className="text-3xl md:text-5xl font-extrabold">Tonight&apos;s Favorites</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {dishes.map((dish: { _id: string; name: string; description: string; price: string; tag: string; photoUrl: string }, i: number) => (
              <FadeIn key={dish._id} delay={i * 120}>
                <div className="bg-stone-950 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={dish.photoUrl}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {dish.tag && (
                      <div className="absolute top-3 left-3">
                        <span className="text-xs bg-black/70 text-amber-400 border border-amber-500/30 rounded-full px-3 py-1 font-medium backdrop-blur-sm">
                          {dish.tag}
                        </span>
                      </div>
                    )}
                    {dish.price && (
                      <div className="absolute top-3 right-3">
                        <span className="text-sm bg-black/70 text-amber-400 font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                          {dish.price}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2">{dish.name}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{dish.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-block border border-amber-500/30 text-amber-500 hover:bg-amber-500/10 hover:border-amber-500/60 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                See Full Menu →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About / Ambiance */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Rooted in Craft,<br />Driven by Flavor</h2>
              <p className="text-white/60 leading-relaxed mb-4">
                {restaurantName} was born from a simple idea: great food deserves great atmosphere. Our chefs source locally whenever possible, building menus around what&apos;s fresh, seasonal, and bold.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Whether you&apos;re celebrating a milestone or just craving a night out, we&apos;re here to make it memorable.
              </p>
              <Link
                href="/about"
                className="inline-block border border-amber-500/30 text-amber-500 hover:bg-amber-500/10 hover:border-amber-500/60 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Learn More About Us →
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden h-48 hover:scale-[1.02] transition-transform duration-300">
                <Image src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80&fit=crop" alt="Restaurant interior" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-48 mt-6 hover:scale-[1.02] transition-transform duration-300">
                <Image src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80&fit=crop" alt="Craft cocktails" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-48 hover:scale-[1.02] transition-transform duration-300">
                <Image src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80&fit=crop" alt="Chef preparing food" fill className="object-cover" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-48 mt-6 hover:scale-[1.02] transition-transform duration-300">
                <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80&fit=crop" alt="Fine dining" fill className="object-cover" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 px-6 bg-stone-900">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">Guest Reviews</p>
              <h2 className="text-3xl md:text-5xl font-extrabold">What People Are Saying</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r: { _id: string; name: string; text: string; stars: number }, i: number) => (
              <FadeIn key={r._id} delay={i * 120}>
                <div className="bg-stone-950 border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: r.stars }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                  <p className="text-white/40 text-sm font-semibold">— {r.name}</p>
                </div>
              </FadeIn>
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
        <FadeIn>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">Ready for an Unforgettable Evening?</h2>
            <p className="text-white/60 mb-8 text-lg">
              Reservations recommended, walk-ins welcome based on availability.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-10 py-5 rounded-lg text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30"
            >
              Reserve Your Table
            </Link>
          </div>
        </FadeIn>
      </section>

      <footer className="border-t border-white/10 py-10 px-6 bg-stone-950 pb-24 md:pb-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div>
            <p className="font-bold text-lg"><span className="text-amber-500">{restaurantName}</span><span className="text-white/80"> Kitchen</span></p>
            <p className="text-white/30 text-xs mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-white/40">
            <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-white/70 transition-colors">{phone}</a>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>{address}</span>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-1 text-white/30 text-xs">
            <span>{hoursWeekday}</span>
            <span>{hoursWeekend} &nbsp;·&nbsp; {hoursSunday}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
