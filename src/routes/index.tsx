import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Instagram, Linkedin, Dribbble, Twitter, Youtube, Github } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    n: "01",
    t: "Brand Systems",
    d: "Identity, voice, and visual worlds that don't blend in.",
    c: "bg-magenta text-cream",
    img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
    tag: "Identity & Visuals",
  },
  {
    n: "02",
    t: "Performance Ads",
    d: "Meta, TikTok, Google — creative-led media that pays back.",
    c: "bg-lime text-ink",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    tag: "Paid Acquisition",
  },
  {
    n: "03",
    t: "SEO & Content",
    d: "Topic clusters, editorial ops, and links that actually rank.",
    c: "bg-electric text-cream",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    tag: "Editorial & Ranking",
  },
  {
    n: "04",
    t: "Web & Product",
    d: "Landing pages and funnels engineered for conversion.",
    c: "bg-tangerine text-ink",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    tag: "Funnels & UI/UX",
  },
  {
    n: "05",
    t: "Social & Video",
    d: "Short-form studios, always-on content, cultural fluency.",
    c: "bg-violet text-cream",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    tag: "Studio Production",
  },
  {
    n: "06",
    t: "Growth Ops",
    d: "Lifecycle, CRM, attribution — the plumbing behind scale.",
    c: "bg-sky text-ink",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tag: "Lifecycle & CRM",
  },
];

const stats = [
  { k: "312%", v: "Avg. ROAS lift in year one" },
  { k: "$180M+", v: "Media managed across clients" },
  { k: "48", v: "Awards for brand & campaigns" },
  { k: "94%", v: "Client retention past year two" },
];

const words = ["further", "faster", "sharper", "smarter"];

function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 400, damping: 40, mass: 0.4 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
    >
      <motion.div
        animate={{
          scale: hover ? 2.4 : 1,
          backgroundColor: hover ? "oklch(0.9 0.22 130)" : "oklch(0.68 0.28 350)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="-ml-2 -mt-2 h-4 w-4 rounded-full mix-blend-difference"
      />
    </motion.div>
  );
}

function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Demure Global Logo"
    >
      <rect width="48" height="48" rx="14" className="fill-ink" />
      <path
        d="M14 13H24C31.1797 13 37 18.8203 37 26C37 33.1797 31.1797 39 24 39H14V13Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
        className="text-cream"
      />
      <path
        d="M19 13V39"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        className="text-cream"
      />
      <circle cx="26" cy="26" r="4.5" fill="oklch(0.55 0.14 25)" />
      <circle
        cx="26"
        cy="26"
        r="8"
        stroke="oklch(0.88 0.05 120)"
        strokeWidth="2"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
        <a href="#top" className="group flex items-center gap-3">
          <Logo className="h-10 w-10 transition-transform duration-300 group-hover:scale-105" />
          <span className="font-display text-xl font-bold tracking-tight">
            Demure Global<span className="text-magenta">.</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-ink/10 bg-cream/70 px-2 py-2 backdrop-blur-xl md:flex">
          {["Work", "Services", "Studio", "Journal"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-ink/80 transition hover:bg-ink hover:text-cream"
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream"
        >
          <span className="relative z-10">Start a project</span>
          <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
          <span className="absolute inset-0 -z-0 translate-y-full bg-magenta transition-transform duration-300 group-hover:translate-y-0" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 1600);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* floating blobs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="blob absolute -left-24 top-20 h-80 w-80 bg-magenta/70 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="blob absolute right-0 top-40 h-96 w-96 bg-electric/60 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, 30, -10, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="blob absolute bottom-0 left-1/3 h-72 w-72 bg-lime/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 px-4 py-2 text-xs font-mono uppercase tracking-widest backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-lime" />
          Now booking Q3 · 2026
        </motion.div>

        <h1 className="font-display text-[14vw] font-bold leading-[0.9] tracking-tight md:text-[9rem]">
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="block"
          >
            We make
          </motion.span>
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-baseline gap-4"
          >
            brands go{" "}
            <span className="relative inline-block">
              <motion.span
                key={words[i]}
                initial={{ y: 40, opacity: 0, rotate: -6 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: -40, opacity: 0 }}
                className="inline-block rounded-2xl bg-magenta px-4 py-1 text-cream"
              >
                {words[i]}
              </motion.span>
            </span>
          </motion.span>
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="block text-outline"
          >
            on the internet.
          </motion.span>
        </h1>

        <div className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-lg text-ink/70 md:text-xl">
            Demure Global is a full-service digital marketing studio building loud brands, sharp
            campaigns, and growth systems that compound quarter after quarter.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-cream"
            >
              <span className="font-medium">See the work</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-cream text-ink transition-transform group-hover:rotate-45">
                ↗
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-4 font-medium transition hover:bg-ink hover:text-cream"
            >
              What we do
            </a>
          </div>
        </div>

        {/* Hero visual showcase cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {[
            {
              title: "Editorial & Identity",
              tag: "Brand Direction",
              img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Product & Packaging",
              tag: "DTC Campaigns",
              img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "High-Growth Media",
              tag: "Performance Ads",
              img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Digital Funnels",
              tag: "Web Experience",
              img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative h-48 overflow-hidden rounded-2xl border border-ink/10 md:h-60 shadow-sm"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-cream md:bottom-4 md:left-4 md:right-4">
                <span className="inline-block rounded-full bg-cream/20 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm">
                  {item.tag}
                </span>
                <p className="mt-1.5 font-display text-sm font-semibold leading-tight md:text-base">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Brand Systems",
    "Performance Media",
    "SEO",
    "Content Studios",
    "Growth Ops",
    "Web Design",
    "Product",
    "Lifecycle",
  ];
  return (
    <section className="overflow-hidden border-y-2 border-ink bg-ink py-6 text-cream">
      <div className="marquee-track gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-3xl md:text-5xl">
            {it}
            <span className="text-magenta">✺</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink/60">§ Services</p>
          <h2 className="max-w-2xl font-display text-5xl font-bold leading-[0.95] md:text-7xl">
            Full-stack marketing, <span className="italic text-magenta">strangely</span> effective.
          </h2>
        </div>
        <p className="max-w-sm text-ink/70">
          Six practices, one team. We plug into wherever the growth math is broken and fix it in
          public.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -8 }}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] p-7 md:p-8 ${s.c} shadow-sm`}
            data-cursor
          >
            <div>
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm font-semibold opacity-70">{s.n}</span>
                <motion.span className="text-2xl" whileHover={{ rotate: 45 }}>
                  ↗
                </motion.span>
              </div>

              {/* Service visual image container */}
              <div className="relative mt-5 mb-6 h-44 w-full overflow-hidden rounded-2xl border border-current/10 bg-black/10 shadow-inner">
                <img
                  src={s.img}
                  alt={s.t}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70" />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-md">
                  {s.tag}
                </span>
              </div>

              <h3 className="mb-2 font-display text-2xl font-bold md:text-3xl">{s.t}</h3>
              <p className="text-sm opacity-85 leading-relaxed">{s.d}</p>
            </div>

            <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-current opacity-10 transition-transform duration-500 group-hover:scale-150" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rot = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  return (
    <section ref={ref} className="relative overflow-hidden bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
        <motion.div
          style={{ rotate: rot }}
          className="pointer-events-none absolute right-10 top-10 hidden md:block"
        >
          <div className="grid h-48 w-48 place-items-center rounded-full border-2 border-lime text-center font-mono text-xs uppercase tracking-widest text-lime">
            <div>
              Numbers
              <br />
              that don't
              <br />
              lie ✺ Since 2018
            </div>
          </div>
        </motion.div>
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-cream/60">
          § By the numbers
        </p>
        <h2 className="mb-16 max-w-3xl font-display text-5xl font-bold leading-[0.95] md:text-7xl">
          Growth you can put on a board slide.
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-cream/20 pt-6"
            >
              <div className="font-display text-5xl font-bold text-lime md:text-6xl">{s.k}</div>
              <p className="mt-2 text-sm text-cream/70">{s.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    t: "Fable Coffee",
    cat: "Brand · Web · Retail",
    color: "bg-tangerine",
    accent: "text-cream",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    metric: "+240% DTC Revenue",
  },
  {
    t: "Northlab Fitness",
    cat: "Performance · Content",
    color: "bg-lime",
    accent: "text-cream",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    metric: "3.8x Blended ROAS",
  },
  {
    t: "Halogen Skincare",
    cat: "DTC · Lifecycle",
    color: "bg-magenta",
    accent: "text-cream",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    metric: "45% Repeat Rate",
  },
  {
    t: "Orbit Fintech",
    cat: "SaaS · SEO · Web",
    color: "bg-electric",
    accent: "text-cream",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    metric: "+180k Organic Traffic",
  },
];

function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink/60">
            § Selected work
          </p>
          <h2 className="font-display text-5xl font-bold leading-[0.95] md:text-7xl">
            Recent obsessions.
          </h2>
        </div>
        <a href="#" className="hidden font-mono text-sm underline underline-offset-4 md:inline">
          All case studies →
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.t}
            href="#"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover="hover"
            className={`group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-[2rem] p-8 ${p.color} ${p.accent}`}
            data-cursor
          >
            {/* Background image with hover zoom */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={p.image}
                alt={p.t}
                className="h-full w-full object-cover opacity-50 mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20" />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="rounded-full border border-cream/30 bg-ink/40 px-3 py-1 font-mono text-xs uppercase tracking-widest text-cream backdrop-blur-md">
                Case Study
              </span>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-lime px-3 py-1 font-mono text-xs font-semibold text-ink shadow-sm">
                  {p.metric}
                </span>
                <motion.span
                  variants={{ hover: { rotate: 45, scale: 1.2 } }}
                  className="text-3xl text-cream"
                >
                  ↗
                </motion.span>
              </div>
            </div>

            {/* Big decorative glyph */}
            <motion.div
              variants={{ hover: { scale: 1.1, rotate: -6 } }}
              transition={{ type: "spring", stiffness: 120 }}
              className="pointer-events-none absolute inset-0 grid place-items-center opacity-10"
            >
              <div className="font-display text-[18rem] font-bold leading-none text-cream">
                {p.t[0]}
              </div>
            </motion.div>

            <div className="relative z-10 text-cream">
              <h3 className="font-display text-4xl font-bold md:text-5xl">{p.t}</h3>
              <p className="mt-2 font-mono text-sm text-cream/80">{p.cat}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

function Studio() {
  return (
    <section id="studio" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink/60">
            § The studio
          </p>
          <h2 className="mb-8 font-display text-5xl font-bold leading-[0.95] md:text-7xl">
            Small team,
            <br />
            <span className="text-outline">big appetite.</span>
          </h2>
          <p className="mb-6 text-lg text-ink/70">
            We're 22 strategists, designers, media buyers, and engineers wired into one Slack. No
            account layers, no handoffs — the person pitching you is the person building it.
          </p>
          <ul className="space-y-3 font-mono text-sm">
            {[
              "Senior-only pods, no juniors on your account",
              "Weekly working sessions, not monthly decks",
              "Fixed monthly fee, no hourly gotchas",
              "Kill switch every 30 days",
            ].map((x) => (
              <li key={x} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-magenta" /> {x}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-[480px] md:h-[520px]">
          {/* Studio Workspace Image */}
          <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-ink/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Demure Global creative studio workspace"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-cream">
              <div>
                <p className="font-display text-lg font-bold">Demure Global Studio</p>
                <p className="font-mono text-xs text-cream/70">Creative Headquarters & Media Lab</p>
              </div>
              <span className="rounded-full bg-lime px-3 py-1 font-mono text-xs font-semibold text-ink">
                Live Pods
              </span>
            </div>
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -left-6 -top-6 grid h-40 w-40 place-items-center rounded-full bg-magenta text-cream shadow-2xl"
          >
            <div className="text-center">
              <div className="font-display text-4xl font-bold">22</div>
              <div className="font-mono text-[10px] uppercase tracking-widest">humans</div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-16 grid h-32 w-32 place-items-center rounded-2xl bg-lime text-ink shadow-xl rotate-6"
          >
            <div className="text-center">
              <div className="font-display text-3xl font-bold">7</div>
              <div className="font-mono text-xs">countries</div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 right-10 grid h-28 w-44 place-items-center rounded-2xl bg-electric text-cream shadow-2xl -rotate-3"
          >
            <div className="text-center">
              <div className="font-display text-3xl font-bold">∞</div>
              <div className="font-mono text-[10px] uppercase tracking-widest">cups of coffee</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const quotes = [
  {
    q: "Demure Global rebuilt our funnel and doubled paid ROAS in one quarter. Rare team.",
    a: "Priya Ahuja",
    r: "VP Growth, Halogen",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    q: "They treat our brand like it's their own. Best agency relationship in 12 years of marketing.",
    a: "Marcus Reed",
    r: "CMO, Northlab",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    q: "Sharp thinkers, faster shippers. They removed three vendors from our stack.",
    a: "Yuki Tanaka",
    r: "Founder, Orbit",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&h=160&q=80",
  },
];

function Testimonials() {
  return (
    <section className="bg-violet text-cream py-24 md:py-32 grain">
      <div className="mx-auto max-w-[1400px] px-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-cream/70">
          § Words from the room
        </p>
        <h2 className="mb-16 font-display text-5xl font-bold leading-[0.95] md:text-7xl">
          Kind things
          <br />
          clients said.
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.a}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl bg-cream/10 p-8 backdrop-blur"
            >
              <div className="mb-6 font-display text-6xl leading-none text-lime">"</div>
              <p className="mb-8 text-lg leading-snug">{q.q}</p>
              <footer className="flex items-center gap-4 border-t border-cream/20 pt-4 font-mono text-sm">
                <img
                  src={q.avatar}
                  alt={q.a}
                  className="h-11 w-11 rounded-full object-cover border-2 border-lime/50 shadow-sm"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-cream">{q.a}</div>
                  <div className="text-cream/70 text-xs">{q.r}</div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-lime p-10 md:p-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border-2 border-dashed border-ink/30"
        />
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-ink/70">§ Say hi</p>
        <h2 className="mb-8 max-w-4xl font-display text-5xl font-bold leading-[0.95] text-ink md:text-8xl">
          Got a brand that deserves louder pixels?
        </h2>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <a
            href="mailto:info@demureglobal.net"
            className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-5 text-cream"
            data-cursor
          >
            <span className="font-display text-xl">info@demureglobal.net</span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-magenta transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <span className="font-mono text-sm text-ink/70">or DM us — we answer within 24h.</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="font-display text-xl font-bold">
                Demure Global<span className="text-magenta">.</span>
              </span>
            </div>
            <p className="max-w-sm text-sm text-ink/60">
              Brooklyn · London · Lagos. Building things that make numbers go up.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 font-mono text-sm md:grid-cols-3">
            <div>
              <div className="mb-3 text-ink/50">Studio</div>
              {["Work", "Services", "Journal", "Careers"].map((x) => (
                <a key={x} href="#" className="block py-1 hover:text-magenta">
                  {x}
                </a>
              ))}
            </div>
            <div>
              <div className="mb-3 text-ink/50">Elsewhere</div>
              <div className="mb-4 flex flex-wrap gap-2">
                {[
                  { I: Instagram, l: "Instagram" },
                  { I: Linkedin, l: "LinkedIn" },
                  { I: Dribbble, l: "Dribbble" },
                  { I: Twitter, l: "Twitter" },
                  { I: Youtube, l: "YouTube" },
                  { I: Github, l: "GitHub" },
                ].map(({ I, l }) => (
                  <a
                    key={l}
                    href="#"
                    aria-label={l}
                    className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-cream text-ink transition hover:bg-ink hover:text-cream"
                    data-cursor
                  >
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
              {["Instagram", "LinkedIn", "Dribbble", "Read.cv"].map((x) => (
                <a key={x} href="#" className="block py-1 hover:text-magenta">
                  {x}
                </a>
              ))}
            </div>
            <div>
              <div className="mb-3 text-ink/50">Legal</div>
              {["Privacy", "Terms"].map((x) => (
                <a key={x} href="#" className="block py-1 hover:text-magenta">
                  {x}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-ink/10 pt-6 font-mono text-xs text-ink/50">
          <span>© {new Date().getFullYear()} Demure Global</span>
          <span>Made loudly ✺</span>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <Work />
        <Studio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
