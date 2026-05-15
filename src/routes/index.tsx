import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Instagram,
  Youtube,
  Plus,
  Minus,
  Flame,
  Home,
  Sparkles,
  Heart,
  Sun,
  Moon,
  Star,
  Leaf,
  Gem,
  Crown,
  HandHeart,
  ScrollText,
  Calendar,
  Users,
  Baby,
  GraduationCap,
  Building2,
  PartyPopper,
  Languages,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { StickyContact } from "@/components/site/StickyContact";
import { Ornament } from "@/components/site/Ornament";
import heroImg from "@/assets/Hero.png";
import aboutImg from "@/assets/About.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE_DISPLAY = "+91 98433 15323";
const PHONE_TEL = "+919843315323";
const WA_URL = `https://wa.me/919843315323?text=${encodeURIComponent(
  "Namaste, I would like to enquire about a pooja / homam service.",
)}`;

const services = [
  { name: "Griha Pravesham", sub: "House Warming", icon: Home },
  { name: "Ganapathi Homam", sub: "Auspicious Beginnings", icon: Sparkles },
  { name: "Navagraha Homam", sub: "Planetary Harmony", icon: Star },
  { name: "Sudharshana Homam", sub: "Protection", icon: ShieldCheck },
  { name: "Lakshmi Kubera Pooja", sub: "Wealth & Prosperity", icon: Gem },
  { name: "Ayush Homam", sub: "Health & Longevity", icon: HandHeart },
  { name: "Mrityunjaya Homam", sub: "Healing & Strength", icon: Flame },
  { name: "Dhanvantri Homam", sub: "Wellbeing", icon: Leaf },
  { name: "Sathyanarayana Pooja", sub: "Family Blessings", icon: Moon },
  { name: "Rudra Homam", sub: "Spiritual Power", icon: Flame },
  { name: "Vastu Pooja", sub: "Home Harmony", icon: Building2 },
  { name: "Bhoomi Pooja", sub: "Foundation Ritual", icon: ScrollText },  
  { name: "Naming Ceremony", sub: "Namakarana", icon: Users },  
  { name: "Temple Poojas", sub: "Sannidhi Seva", icon: Crown },
  { name: "Festival Poojas", sub: "Seasonal Rituals", icon: PartyPopper },
  { name: "Monthly Poojas", sub: "Regular Worship", icon: Calendar },
];

const whyUs = [
  {
    icon: ScrollText,
    title: "Traditional Vedic Method",
    text: "Every ritual is performed exactly as prescribed in the Vedas, with the right vidhi and sankalpam.",
  },
  {
    icon: Sparkles,
    title: "Sanskrit Mantra Rituals",
    text: "Authentic Sanskrit chanting with correct pronunciation, swara and meaning preserved.",
  },
  {
    icon: HandHeart,
    title: "Respectful & Professional",
    text: "Punctual, dignified service. We arrive prepared and treat every home like our own.",
  },
  {
    icon: Users,
    title: "Family Guidance",
    text: "Clear guidance on what to prepare, the meaning of each step, and how the family can participate.",
  },
  {
    icon: MapPin,
    title: "Coimbatore & Tiruppur",
    text: "Available across Coimbatore, Tiruppur and surrounding towns for home and temple ceremonies.",
  },
  {
    icon: Languages,
    title: "Tamil & Kannada",
    text: "Comfortable communicating with families in Tamil and Kannada — explanations made simple.",
  },
];

const testimonials = [
  {
    name: "Ramesh & Lakshmi",
    place: "Saibaba Colony, Coimbatore",
    text: "Our Griha Pravesham was conducted with so much shraddha. Every step was explained clearly and the chanting was beautiful. The whole family felt blessed.",
  },
  {
    name: "Anitha Subramanian",
    place: "Tiruppur",
    text: "We invited Sastrigal for our daughter's Seemantham. Punctual, calm and very respectful with elders. We will only call him for our future poojas.",
  },
  {
    name: "Karthik Iyer",
    place: "Ganapathy, Coimbatore",
    text: "The Navagraha Homam was performed with full vidhi. He guided us patiently and the whole atmosphere felt sacred. Highly recommend to families.",
  },
];

const faqs = [
  {
    q: "Which homams and poojas are performed?",
    a: "All major Vedic homams and poojas — Ganapathi, Gayathri, Navagraha, Sudharshana, Mrityunjaya, Chandi, Rudra, Lakshmi Kubera, Sathyanarayana Pooja, Griha Pravesham, wedding rituals, Seemantham, Naming, Upanayanam and festival/monthly poojas. If you have a specific ritual in mind, please call to confirm.",
  },
  {
    q: "How can we contact you?",
    a: "The fastest way is WhatsApp or a phone call to +91 98433 15323. Please share the date, type of pooja and your location, and we will guide you on the next steps.",
  },
  {
    q: "Do you travel to Coimbatore and Tiruppur?",
    a: "Yes. Services are available across Coimbatore, Tiruppur and nearby towns. For locations slightly further, please call us to discuss feasibility.",
  },
  {
    q: "Are Sanskrit mantras included?",
    a: "Yes. Every ritual is performed with authentic Sanskrit mantra chanting, following traditional Vedic vidhi with proper sankalpam and procedures.",
  },
  {
    q: "What details are needed before a pooja?",
    a: "Usually the names, nakshatra and gotra of the family members, the type of pooja, and the date and place. Once you contact us, we will share a clear list of materials (saamagri) to be arranged at home.",
  },
];

function Index() {
  return (
    <div id="top" className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <StickyContact />
    </div>
  );
}

/* -------- HERO -------- */
function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-28 overflow-hidden">
      {/* Soft background ornaments */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, oklch(0.95 0.04 75 / 0.55), transparent 60%), linear-gradient(180deg, var(--cream) 0%, var(--background) 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 text-center lg:text-left">
          <div className="lg:justify-start flex justify-center">
            <Ornament label="Vedic Purohitham" />
          </div>
          <h1 className="mt-6 font-display text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.05] text-maroon">
            K. Gopalakrishnan
            <span className="block text-foreground/85 italic font-normal mt-1">
              Purohitham
            </span>
          </h1>

          <p className="mt-6 font-tamil text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
            இங்கு அனைத்து ஹோமங்களும் சிறந்த முறையில் செய்து தரப்படும்.
          </p>

          <p className="mt-5 text-[15px] sm:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Trusted Vedic <em className="not-italic text-foreground/80">Homam &amp; Pooja</em>{" "}
            services in Coimbatore &amp; Tiruppur — performed with traditional vidhi, Sanskrit
            mantras and quiet devotion.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-white px-7 py-3.5 text-sm font-medium shadow-sm hover:opacity-95 transition"
            >
              <MessageCircle size={18} /> WhatsApp Enquiry
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-maroon text-primary-foreground px-7 py-3.5 text-sm font-medium shadow-sm hover:bg-maroon/90 transition"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin size={14} className="text-gold" /> Coimbatore · Tiruppur</span>
            <span className="inline-flex items-center gap-2"><Languages size={14} className="text-gold" /> Tamil · Kannada · Sanskrit</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] border border-gold/40"
            />
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2.5rem] border border-gold/20"
            />
            <img
              src={heroImg}
              alt="Traditional brass kalasha and sacred fire prepared for a Vedic homam"
              width={1600}
              height={1200}
              className="relative rounded-[1.75rem] shadow-[0_30px_60px_-30px_rgba(80,20,20,0.35)] object-cover w-full h-[420px] sm:h-[480px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- ABOUT -------- */
function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-cream/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative max-w-md">
            <img
              src={aboutImg}
              alt="Hindu priest holding a brass deepam during a pooja"
              width={800}
              height={1200}
              loading="lazy"
              className="rounded-2xl object-cover w-full h-[600px] shadow-[0_20px_50px_-25px_rgba(80,20,20,0.3)]"
            />
            <div className="absolute -bottom-5 -right-5 hidden sm:block bg-background border border-gold/30 px-5 py-3 rounded-xl shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Since</p>
              <p className="font-display text-2xl text-maroon">Generations</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Ornament label="About the Priest" />
          <h2 className="mt-5 font-display text-3xl sm:text-4xl text-maroon leading-tight">
            A quiet devotion to{" "}
            <span className="italic text-foreground/85">tradition and family.</span>
          </h2>
          <div className="mt-6 space-y-4 text-foreground/75 text-[15px] leading-relaxed">
            <p>
              K. Gopalakrishnan Sastrigal performs traditional Hindu rituals and homams
              following the Vedic vidhi handed down through generations of purohithars in
              Tamil Nadu.
            </p>
            <p>
              Every ceremony is conducted with authentic <em className="not-italic">Sanskrit mantra</em>{" "}
              chanting, with the proper sankalpam, kalasha sthapana and homa procedures —
              never hurried, never simplified.
            </p>
            <p>
              From a child's naming ceremony to weddings, griha pravesham and ancestral
              poojas, he gently guides the family through every step — speaking comfortably
              in <strong className="font-medium text-foreground/85">Tamil and Kannada</strong>
              {" "}so that elders, children and guests all feel included.
            </p>
            <p>
              Services are available across <strong className="font-medium text-foreground/85">Coimbatore and Tiruppur</strong>, at homes,
              new houses, function halls and temples.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- SERVICES -------- */
function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Ornament label="Services" />
          <h2 className="mt-5 font-display text-3xl sm:text-4xl text-maroon">
            Homams, Poojas &amp; Family Rituals
          </h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            A complete range of Vedic ceremonies, performed traditionally at your home,
            new house, function hall or temple.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map(({ name, sub, icon: Icon }) => (
            <div
              key={name}
              className="group relative rounded-xl border border-border bg-card p-5 sm:p-6 hover:border-gold/60 hover:shadow-[0_10px_30px_-15px_rgba(80,20,20,0.18)] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 h-11 w-11 rounded-full grid place-items-center bg-cream border border-gold/40 text-maroon">
                  <Icon size={18} strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground leading-tight">
                    {name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 tracking-wide">
                    {sub}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Looking for a specific ritual? We are happy to guide you.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-maroon/30 text-maroon px-6 py-3 text-sm font-medium hover:bg-maroon hover:text-primary-foreground transition"
          >
            <MessageCircle size={16} /> Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------- WHY US -------- */
function WhyUs() {
  return (
    <section id="why" className="py-20 lg:py-28 bg-cream/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Ornament label="Why Families Trust Us" />
          <h2 className="mt-5 font-display text-3xl sm:text-4xl text-maroon">
            Traditional. Respectful. Punctual.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {whyUs.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl bg-background border border-border p-7 hover:border-gold/50 transition"
            >
              <div className="h-12 w-12 rounded-full grid place-items-center bg-maroon/5 text-maroon border border-maroon/15">
                <Icon size={20} strokeWidth={1.6} />
              </div>
              <h3 className="mt-5 font-display text-xl text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* -------- TESTIMONIALS -------- */
function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-cream/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Ornament label="Words from Families" />
          <h2 className="mt-5 font-display text-3xl sm:text-4xl text-maroon">
            Heartfelt blessings, kindly shared.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl bg-background border border-border p-7 flex flex-col"
            >
              <div className="text-gold font-display text-4xl leading-none">“</div>
              <blockquote className="mt-2 text-[15px] text-foreground/80 leading-relaxed flex-1">
                {t.text}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <p className="font-display text-lg text-maroon">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------- FAQ -------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <Ornament label="FAQ" />
          <h2 className="mt-5 font-display text-3xl sm:text-4xl text-maroon">
            Common questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-5 sm:py-6 flex items-center justify-between gap-6"
                >
                  <span className="font-display text-lg sm:text-xl text-foreground pr-2">
                    {f.q}
                  </span>
                  <span className="shrink-0 h-8 w-8 rounded-full border border-gold/40 text-maroon grid place-items-center">
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 -mt-1 text-[15px] text-muted-foreground leading-relaxed pr-12">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------- CONTACT -------- */
function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream/60">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14">
        <div>
          <Ornament label="Contact" />
          <h2 className="mt-5 font-display text-3xl sm:text-4xl text-maroon leading-tight">
            Speak with us about your pooja.
          </h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed max-w-md">
            Share the date, type of ceremony and your location. We will guide you through
            the next steps with care.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp text-white px-6 py-3.5 text-sm font-medium"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-maroon text-primary-foreground px-6 py-3.5 text-sm font-medium"
            >
              <Phone size={18} /> {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-maroon">
            <a
              href=""
              aria-label="Instagram"
              className="h-10 w-10 rounded-full border border-maroon/20 grid place-items-center hover:bg-maroon hover:text-primary-foreground transition"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#https://www.youtube.com/@bhakthivazhi1246"
              aria-label="YouTube"
              className="h-10 w-10 rounded-full border border-maroon/20 grid place-items-center hover:bg-maroon hover:text-primary-foreground transition"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-background border border-border p-7 sm:p-9">
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Reach Us</p>

          <div className="mt-6 space-y-6">
            <div className="flex items-start gap-4">
              <Phone size={18} className="text-maroon mt-1" />
              <div>
                <p className="text-xs text-muted-foreground">Phone &amp; WhatsApp</p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="font-display text-xl text-foreground hover:text-maroon"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={18} className="text-maroon mt-1" />
              <div>
                <p className="text-xs text-muted-foreground">Address</p>
                <address className="not-italic text-[15px] text-foreground/85 leading-relaxed mt-1">
                  No 11, Ganapathy Nagar 1st Street,<br />
                  P&amp;T Colony Extn,<br />
                  Ganapathy, Coimbatore
                </address>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Calendar size={18} className="text-maroon mt-1" />
              <div>
                <p className="text-xs text-muted-foreground">Booking</p>
                <p className="text-[15px] text-foreground/85 mt-1">
                  By prior appointment — please call ahead so we can prepare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------- FOOTER -------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg text-maroon">K. Gopalakrishnan Purohitham</p>
          <p className="text-xs text-muted-foreground mt-1">
            Vedic Homam &amp; Pooja Services · Coimbatore &amp; Tiruppur
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} K. Gopalakrishnan Purohitham. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
