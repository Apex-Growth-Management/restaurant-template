import Link from "next/link";
import Image from "next/image";
import { Leaf, Users, Target } from "lucide-react";

const team = [
  {
    name: "Marcus Webb",
    role: "Executive Chef & Co-Founder",
    bio: "Trained in New Orleans and New York, Marcus brings 15 years of fine dining experience to every plate. His philosophy: bold flavors, local roots.",
    photo: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&q=80&fit=crop",
  },
  {
    name: "Diane Okafor",
    role: "Pastry Chef",
    bio: "Diane studied at the French Culinary Institute and has a passion for turning simple ingredients into unforgettable finales.",
    photo: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80&fit=crop",
  },
  {
    name: "Liam Hargrove",
    role: "Bar Director",
    bio: "With a background in craft distilleries and NYC cocktail bars, Liam curates a drinks menu as thoughtful as the food.",
    photo: "https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=400&q=80&fit=crop",
  },
];

const values = [
  { Icon: Leaf, title: "Local First", desc: "We partner with farms within 100 miles of Raleigh. Fresh produce, free-range proteins, and seasonal menus that change with the land." },
  { Icon: Users, title: "Community Rooted", desc: "From fundraisers to private events, we see our dining room as an extension of the neighborhood we call home." },
  { Icon: Target, title: "Craft Over Shortcuts", desc: "Everything from our sauces to our bread is made in-house. We don't cut corners because we believe the difference shows up on the plate." },
];

export default function AboutPage() {
  return (
    <main className="bg-stone-950 text-white pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80&fit=crop"
          alt="Restaurant interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Built Around the Table</h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Ember & Oak Kitchen opened in 2019 with one goal: create a place where people actually want to linger. Not just eat — but stay, talk, and come back.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden h-96">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80&fit=crop"
              alt="Restaurant dining room"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">From a Dream to Downtown Raleigh</h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Chef Marcus Webb spent years cooking in Michelin-starred kitchens before deciding he wanted something more personal. He partnered with childhood friend and hospitality veteran Diane Okafor to open a neighborhood restaurant that felt as comfortable as it did impressive.
            </p>
            <p className="text-white/60 leading-relaxed">
              The name &ldquo;Ember & Oak&rdquo; was chosen deliberately — fire and wood, two elements that define how we cook. Low and slow. With intention.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-stone-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-stone-950 border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen photo */}
      <section className="relative h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1920&q=80&fit=crop"
          alt="Chef in kitchen"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <p className="text-2xl md:text-4xl font-extrabold text-center max-w-xl px-6 text-white">
            &ldquo;Every plate is a promise to do it right.&rdquo;
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-stone-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">The People Behind the Plates</p>
            <h2 className="text-3xl font-extrabold">Meet the Team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-stone-950 border border-white/10 rounded-2xl overflow-hidden">
                <div className="relative h-56">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-amber-500 text-sm mb-3">{member.role}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-extrabold mb-4">Come Experience It Yourself</h2>
        <p className="text-white/50 mb-8">Reservations recommended. Walk-ins always welcome.</p>
        <Link
          href="/contact"
          className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Reserve a Table
        </Link>
      </section>
      <footer className="border-t border-white/10 py-10 px-6 bg-stone-950">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div>
            <p className="font-bold text-lg"><span className="text-amber-500">Ember &amp; Oak</span><span className="text-white/80"> Kitchen</span></p>
            <p className="text-white/30 text-xs mt-1">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-white/40">
            <a href="tel:5550000000" className="hover:text-white/70 transition-colors">(555) 000-0000</a>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>Your City, ST 00000</span>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-1 text-white/30 text-xs">
            <span>Mon–Thu: 5pm – 10pm</span>
            <span>Fri–Sat: 5pm – 11pm &nbsp;·&nbsp; Sun: 4pm – 9pm</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
