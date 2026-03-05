import Link from "next/link";

const team = [
  {
    name: "Marcus Webb",
    role: "Executive Chef & Co-Founder",
    bio: "Trained in New Orleans and New York, Marcus brings 15 years of fine dining experience to every plate. His philosophy: bold flavors, local roots.",
  },
  {
    name: "Diane Okafor",
    role: "Pastry Chef",
    bio: "Diane studied at the French Culinary Institute and has a passion for turning simple ingredients into unforgettable finales.",
  },
  {
    name: "Liam Hargrove",
    role: "Bar Director",
    bio: "With a background in craft distilleries and NYC cocktail bars, Liam curates a drinks menu as thoughtful as the food.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-stone-950 text-white pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Built Around the Table</h1>
          <p className="text-white/60 text-lg leading-relaxed">
            Ember & Oak Kitchen opened in 2019 with one goal: create a place where people actually want to linger. Not just eat — but stay, talk, and come back.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 bg-stone-900">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">From a Dream to Downtown Raleigh</h2>
            <p className="text-white/60 leading-relaxed mb-4">
              Chef Marcus Webb spent years cooking in Michelin-starred kitchens before deciding he wanted something more personal. He partnered with childhood friend and hospitality veteran Diane Okafor to open a neighborhood restaurant that felt as comfortable as it did impressive.
            </p>
            <p className="text-white/60 leading-relaxed">
              The name &ldquo;Ember & Oak&rdquo; was chosen deliberately — fire and wood, two elements that define how we cook. Low and slow. With intention.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-stone-950 rounded-2xl h-36 flex items-center justify-center text-5xl border border-white/5">🌲</div>
            <div className="bg-stone-950 rounded-2xl h-36 flex items-center justify-center text-5xl border border-white/5 mt-6">🔥</div>
            <div className="bg-stone-950 rounded-2xl h-36 flex items-center justify-center text-5xl border border-white/5">🍽️</div>
            <div className="bg-stone-950 rounded-2xl h-36 flex items-center justify-center text-5xl border border-white/5 mt-6">🥂</div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🌱", title: "Local First", desc: "We partner with farms within 100 miles of Raleigh. Fresh produce, free-range proteins, and seasonal menus that change with the land." },
              { icon: "🤝", title: "Community Rooted", desc: "From fundraisers to private events, we see our dining room as an extension of the neighborhood we call home." },
              { icon: "🎯", title: "Craft Over Shortcuts", desc: "Everything from our sauces to our bread is made in-house. We don't cut corners because we believe the difference shows up on the plate." },
            ].map((v) => (
              <div key={v.title} className="bg-stone-900 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
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
              <div key={member.name} className="bg-stone-950 border border-white/10 rounded-2xl p-6">
                <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center text-2xl mb-4">
                  👨‍🍳
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-amber-500 text-sm mb-3">{member.role}</p>
                <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
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
          className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-full text-lg transition-colors"
        >
          Reserve a Table
        </Link>
      </section>

      <footer className="border-t border-white/10 py-8 px-6 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} Ember & Oak Kitchen. All rights reserved.
      </footer>
    </main>
  );
}
