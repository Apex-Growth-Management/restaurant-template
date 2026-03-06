import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Menu",
  description: "Explore our full menu of handcrafted starters, main courses, desserts, and craft cocktails. Seasonal ingredients, made in-house daily.",
  openGraph: {
    title: "Menu | Ember & Oak Kitchen",
    description: "Seasonal ingredients, handcrafted everything. Starters, mains, desserts, and craft cocktails.",
  },
};

const menuSections = [
  {
    category: "Starters",
    items: [
      { name: "Whipped Ricotta Toast", description: "Grilled sourdough, whipped ricotta, roasted cherry tomatoes, basil oil.", price: "$12" },
      { name: "Charred Octopus", description: "Tender octopus, smoked paprika aioli, pickled onion, microgreens.", price: "$16" },
      { name: "Bone Marrow", description: "Roasted marrow, gremolata, toasted crostini, sea salt.", price: "$14" },
      { name: "Soup of the Day", description: "Chef's daily creation made with seasonal ingredients.", price: "$10" },
    ],
  },
  {
    category: "Main Courses",
    items: [
      { name: "Smoked Brisket", description: "12-hour oak-smoked brisket, house BBQ glaze, roasted garlic mash, seasonal greens.", price: "$32" },
      { name: "Pan-Seared Salmon", description: "Atlantic salmon, lemon caper butter, wild rice pilaf, charred asparagus.", price: "$28" },
      { name: "Truffle Mushroom Risotto", description: "Arborio rice, wild mushroom medley, black truffle oil, aged parmesan.", price: "$24" },
      { name: "Duck Confit", description: "Slow-cooked duck leg, cherry gastrique, roasted fingerling potatoes, wilted spinach.", price: "$34" },
      { name: "Dry-Aged NY Strip", description: "12oz 28-day dry-aged strip, compound butter, hand-cut fries, béarnaise.", price: "$48" },
      { name: "Braised Short Rib", description: "Red wine braised short rib, creamy polenta, roasted root vegetables, gremolata.", price: "$38" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Warm Chocolate Lava Cake", description: "Dark chocolate cake, molten center, vanilla bean ice cream, raspberry coulis.", price: "$11" },
      { name: "Crème Brûlée", description: "Classic vanilla custard, caramelized sugar crust, seasonal berries.", price: "$9" },
      { name: "Seasonal Sorbet", description: "Three rotating flavors, made in-house daily.", price: "$8" },
    ],
  },
  {
    category: "Craft Cocktails",
    items: [
      { name: "Ember Old Fashioned", description: "Char-filtered bourbon, smoked cherry bitters, orange peel, large ice cube.", price: "$14" },
      { name: "Garden Spritz", description: "Elderflower liqueur, cucumber vodka, fresh mint, sparkling wine, lime.", price: "$13" },
      { name: "Oak & Honey Sour", description: "Rye whiskey, raw honey syrup, lemon juice, egg white, Angostura float.", price: "$14" },
      { name: "Mocktail of the Season", description: "Ask your server for our current alcohol-free creation.", price: "$9" },
    ],
  },
];

export default function MenuPage() {
  return (
    <main className="bg-stone-950 text-white pt-24 min-h-screen">
      {/* Hero */}
      <section className="relative h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1484723091739-30990fd6a9a9?w=1920&q=80&fit=crop"
          alt="Food spread"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65 flex flex-col items-center justify-center text-center px-6">
          <FadeIn>
            <p className="text-amber-500 text-sm font-semibold uppercase tracking-widest mb-2">Ember & Oak Kitchen</p>
            <h1 className="text-4xl md:text-6xl font-extrabold">Our Menu</h1>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-white/50 text-lg text-center mb-16">
              Seasonal ingredients. Handcrafted everything. Menu changes regularly based on what&apos;s fresh.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-16">
            {menuSections.map((section, si) => (
              <FadeIn key={section.category} delay={si * 60}>
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-extrabold text-amber-500">{section.category}</h2>
                    <div className="flex-1 h-px bg-white/10" />
                  </div>
                  <div className="flex flex-col gap-6">
                    {section.items.map((item) => (
                      <div key={item.name} className="flex items-start justify-between gap-6 group">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg group-hover:text-amber-400 transition-colors">{item.name}</h3>
                          <p className="text-white/50 text-sm mt-1 leading-relaxed">{item.description}</p>
                        </div>
                        <span className="text-amber-500 font-bold text-lg shrink-0">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-20 text-center bg-stone-900 border border-white/10 rounded-2xl p-10">
              <p className="text-white/50 text-sm mb-2">Dietary restrictions? We&apos;re happy to accommodate.</p>
              <p className="text-white/30 text-sm mb-6">GF = Gluten-Friendly available · V = Vegetarian · Ask your server for details.</p>
              <Link
                href="/contact"
                className="inline-block bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30"
              >
                Reserve a Table
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6 bg-stone-950 pb-24 md:pb-10">
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
