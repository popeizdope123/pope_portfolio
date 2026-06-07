import { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Zap, ShieldCheck, Users, Brain, Mail, FileText } from "lucide-react";

const NAV_LINKS = [
  { label: "01 ABOUT", href: "#about" },
  { label: "02 SKILLS", href: "#skills" },
  { label: "03 PROJECTS", href: "#projects" },
  { label: "04 CONTACT", href: "#contact" },
];

const SKILLS = [
  { num: "Nº01", name: "PYTHON", tag: "ADVANCED" },
  { num: "Nº02", name: "JAVA", tag: "PROFICIENT" },
  { num: "Nº03", name: "JAVASCRIPT", tag: "FULLSTACK" },
  { num: "Nº04", name: "HTML/CSS", tag: "REACTIVE" },
  { num: "Nº05", name: "MYSQL", tag: "DBA" },
  { num: "Nº06", name: "GITHUB", tag: "DEVOPS" },
];

const ACHIEVEMENTS = [
  { num: "01", title: "Best Research Paper", sub: "CET Research Conference • 2026" },
  { num: "02", title: "Full Stack Development 101", sub: "Simplilearn • 2026" },
  { num: "03", title: "BUILD COMPLETE CMS BLOG IN PHP MYSQL BOOTSRAP & PDO", sub: "UDEMY • 2024" },
];

function Noise() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 transition-all ${
        scrolled ? "border-b border-white/10" : ""
      }`}
      style={{ background: "rgba(10,10,10,0.92)", backdropFilter: "blur(8px)" }}
    >
      <div className="flex items-center gap-3">
        <span className="text-[11px] font-bold tracking-widest text-[#00ff41]">
          PORTFOLIO [SYSTEM_V.1.0]
        </span>
        <span className="text-[11px] tracking-widest text-white/40">/ ARCHIVE</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-[11px] font-bold tracking-widest text-white/70 hover:text-white transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
      <span className="text-[10px] tracking-widest text-white/30">OBYS / HOLOGRAPHIK.CO INSPIRED</span>
    </nav>
  );
}

function HeroSection() {
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#0a0a0a]"
      style={{ paddingBottom: "0" }}
    >
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "linear-gradient(rgba(0,255,65,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.04) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      {/* Top right status */}
      <div className="absolute top-24 right-8 text-right z-10">
        <p className="text-[10px] tracking-[0.25em] text-white/40 mb-2">STATUS: GRADUATING IT STUDENT & WORKING STUDENT</p>
        <p className="text-[12px] text-white/50 max-w-xs leading-relaxed">
          Merging academic rigor with real-world industry experience. Specialized in modern web
          development, full-stack applications, and responsive design systems.
        </p>
      </div>

      {/* Side label */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-left ml-2">
        <span className="text-[9px] tracking-[0.4em] text-white/20 whitespace-nowrap">GRADUATING STUDENT</span>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-right mr-2">
        <span className="text-[9px] tracking-[0.4em] text-white/20 whitespace-nowrap">WORKING PROFESSIONAL</span>
      </div>

      {/* Main hero text */}
      <div className="relative z-10 px-6 pb-0">
        <h1
          className="font-black uppercase leading-none text-white select-none"
          style={{ fontSize: "clamp(80px, 13vw, 200px)", letterSpacing: "-0.02em", lineHeight: 0.88 }}
        >
          JOHN PAUL
          <span className="text-[#00ff41] inline-block ml-4" style={{ fontSize: "0.6em", verticalAlign: "super" }}>↗</span>
        </h1>
        <h1
          className="font-black uppercase leading-none text-[#00ff41] select-none flex items-end gap-4"
          style={{ fontSize: "clamp(80px, 13vw, 200px)", letterSpacing: "-0.02em", lineHeight: 0.88 }}
        >
          ALINO
          <span
            className="inline-block mb-2"
            style={{
              width: "clamp(50px, 7vw, 100px)",
              height: "clamp(14px, 2vw, 28px)",
              background: "#00ff41",
              opacity: blink ? 1 : 0,
              transition: "opacity 0.1s",
            }}
          />
        </h1>
      </div>

      {/* Buttons */}
      <div className="relative z-10 flex gap-4 px-6 py-8">
        <a
          href="#projects"
          className="px-6 py-3 bg-[#00ff41] text-black text-[11px] font-black tracking-widest hover:bg-white transition-colors"
          style={{ textDecoration: "none" }}
        >
          VIEW PROJECTS
        </a>
        <a   
          href="/resume_alino.pdf"
          download
          className="px-6 py-3 border border-white/40 text-white text-[11px] font-black tracking-widest hover:border-white transition-colors"
          style={{ textDecoration: "none" }}
        >
          DOWNLOAD CV
        </a>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="bg-[#0d0d0d] px-6 py-20" id="about-detail">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left */}
          <div className="md:w-1/2">
            <div className="text-[10px] tracking-[0.3em] text-white/30 mb-2">S 001 SECTION_ID</div>
            <h2 className="font-black text-white text-5xl md:text-6xl leading-none mb-6">
              BALANCED<br />
              <span className="text-white/30">DUALITY.</span>
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              As a final-year IT student working as a web developer, I've cultivated expertise in building responsive,
              performant web applications that bridge design and functionality.
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              My focus lies at the intersection of AI integration and scalable software systems. I thrive in environments
              that demand rapid problem-solving and disciplined project management.
            </p>
          </div>

          {/* Right grid */}
          <div className="md:w-1/2 grid grid-cols-2 gap-3">
            {[
              { icon: <Zap size={22} color="#00ff41" />,        title: "ADAPTABILITY", desc: "Seamless context switching between academic research and production deadlines." },
              { icon: <ShieldCheck size={22} color="#00ff41" />, title: "DISCIPLINE",   desc: "Rigorous time management and commitment to high-quality code standards." },
              { icon: <Users size={22} color="#00ff41" />,       title: "COLLABORATION",desc: "Effective communication across technical and non-technical stakeholders." },
              { icon: <Brain size={22} color="#00ff41" />,       title: "LOGIC",        desc: "Analytical approach to complex debugging and algorithmic optimization." },
            ].map((card) => (
              <div key={card.title} className="bg-[#161616] border border-white/[0.06] p-4 hover:border-[#00ff41]/30 transition-colors">
                <div className="mb-2">{card.icon}</div>
                <div className="text-[10px] font-black tracking-widest text-white mb-2">{card.title}</div>
                <div className="text-[11px] text-white/40 leading-relaxed">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="bg-[#0a0a0a]">
      {/* Core Tech header */}
      <div className="px-6 py-16 border-t border-white/[0.06]">
        <div className="flex items-end gap-1">
          <h2 className="font-black text-white text-7xl md:text-8xl leading-none">CORE</h2>
        </div>
        <div className="flex items-center gap-4">
          <h2 className="font-black text-[#00ff41] text-7xl md:text-8xl leading-none">TECH.</h2>
          <span className="text-[10px] tracking-widest text-white/30 self-end mb-4">[UPDATED_MAY_2026]</span>
        </div>
      </div>

      {/* Skills list */}
      <div className="border-t border-white/[0.06]">
        {SKILLS.map((skill, i) => (
          <div
            key={skill.name}
            className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06] group hover:bg-white/[0.02] transition-colors"
          >
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-bold text-[#00ff41] tracking-widest w-10">{skill.num}</span>
              <span className="font-black text-white text-2xl md:text-4xl tracking-tight group-hover:text-[#00ff41] transition-colors">
                {skill.name}
              </span>
            </div>
            <span className="text-[9px] font-bold tracking-widest border border-white/30 px-2 py-1 text-white/60">
              {skill.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

import slide1 from "./assets/calleval_login.png";
import slide2 from "./assets/calleval_dashboard.png"
import slide3 from "./assets/calleval_callevaluations.png";
import slide4 from "./assets/calleval_upload.png";
import slide5 from "./assets/calleval_agent.png";
import slide6 from "./assets/calleval_reports.png";
 
const SLIDES = [slide1, slide2, slide3, slide4, slide5, slide6
];

function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const hasSlides = SLIDES.length > 0;
 
  useEffect(() => {
    if (!hasSlides) return;
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [hasSlides]);
 
  const goTo = (i) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(i);
      setFade(true);
    }, 300);
  };
 
  return (
    <section id="projects" className="bg-[#0a0a0a] border-t border-white/[0.06]">
      <div className="px-6 py-8">
        <div className="text-[10px] font-bold tracking-widest text-[#00ff41] mb-4">FEATURED CASE STUDY</div>
        <h2
          className="font-black text-white leading-none mb-4"
          style={{ fontSize: "clamp(48px, 8vw, 120px)" }}
        >
          CALLEVAL:
        </h2>
        <p className="text-white/60 text-base md:text-lg mb-4">
          An AI-Driven Agent Performance Classification System for BPO Quality Monitoring
        </p>
        <div className="flex gap-2 flex-wrap">
          {["PYTHON", "BERT", "WHISPER ASR", "MYSQL"].map((tag) => (
            <span key={tag} className="text-[9px] font-bold border border-white/30 px-2 py-1 text-white/50 tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </div>
 
      {/* Slideshow */}
      <div className="mx-6 mb-8 relative overflow-hidden border border-white/[0.06]" style={{ height: "420px", background: "#111" }}>
 
        {hasSlides ? (
          <>
            {/* Image */}
            <img
              src={SLIDES[current]}
              alt={`Calleval screenshot ${current + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: fade ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
            />
 
            {/* Slide counter */}
            <div className="absolute top-4 right-4 text-[10px] font-bold tracking-widest text-white/50"
              style={{ background: "rgba(0,0,0,0.6)", padding: "4px 10px" }}>
              {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </div>
 
            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === current ? 24 : 6,
                    height: 6,
                    background: i === current ? "#00ff41" : "rgba(255,255,255,0.3)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
 
            {/* Prev / Next arrows */}
            <button
              onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#00ff41] transition-colors font-black text-xl"
              style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)", padding: "8px 14px" }}
            >←</button>
            <button
              onClick={() => goTo((current + 1) % SLIDES.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#00ff41] transition-colors font-black text-xl"
              style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)", padding: "8px 14px" }}
            >→</button>
          </>
        ) : (
          /* Placeholder shown until you add your images */
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <span className="text-white/10 text-8xl font-black tracking-wider">BPO</span>
            <span className="text-[10px] tracking-widest text-white/20">ADD SCREENSHOTS TO src/assets/ TO ACTIVATE SLIDESHOW</span>
          </div>
        )}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#0a0a0a] border-t border-white/[0.06] px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Experience */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-3 mb-10">
            <span className="bg-[#00ff41] text-black text-[9px] font-black px-2 py-1 tracking-widest">PROFESSIONAL PATH</span>
            <h2 className="font-black text-white text-3xl tracking-tight">EXPERIENCE</h2>
          </div>

          <div className="space-y-10">
            <div>
              <div className="text-[10px] tracking-widest text-white/30 mb-2">2022—PRESENT</div>
              <div className="font-black text-white text-lg tracking-tight">ADMINISTRATIVE SUPPORT</div>
              <div className="text-[10px] tracking-widest text-white/40 mb-3">SIXELEVEN GLOBAL SERVICES AND SOLUTIONS [WORKING STUDENT ROLE]</div>
              <p className="text-[12px] text-white/50 leading-relaxed italic">
                — Coordinate patient flow by scheduling and managing appointments within the Practice Fusion EHR platform.
              </p>
              <p className="text-[12px] text-white/50 leading-relaxed italic">
                — Facilitate clinical visits by preparing and auditing necessary medical documentation to ensure provider readiness and regulatory compliance.
              </p>
              <p className="text-[12px] text-white/50 leading-relaxed italic">
                — Authorize patient access to specialized treatments by generating official certifications and prior authorizations for approved medications.
              </p>
              <p className="text-[12px] text-white/50 leading-relaxed italic">
                — Streamline administrative operations by maintaining accurate electronic health records and managing sensitive patient data with high confidentiality.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-3 mb-10">
            <span className="border border-white/30 text-white/50 text-[9px] font-black px-2 py-1 tracking-widest">BEYOND CODE</span>
            <h2 className="font-black text-white text-3xl tracking-tight">ACHIEVEMENTS</h2>
          </div>

          <div className="space-y-1">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={a.num} className={`flex items-start gap-6 py-5 border-l-2 pl-5 ${i === 0 ? "border-[#00ff41]" : "border-white/10"}`}>
                <span className="text-white/20 font-black text-2xl w-8 shrink-0">{a.num}</span>
                <div>
                  <div className="font-black text-white text-sm tracking-wide">{a.title}</div>
                  <div className="text-[11px] text-white/30 mt-1">{a.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString("en-PH", { timeZone: "Asia/Manila", hour: "2-digit", minute: "2-digit" });
      setTime(now + " PHT");
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="contact" className="bg-[#00ff41] px-8 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16">
        {/* Left */}
        <div>
          <h2 className="font-black text-black leading-none" style={{ fontSize: "clamp(48px, 8vw, 110px)" }}>
            LET'S<br />CONNECT_
          </h2>
          <p className="text-black/70 font-bold text-sm tracking-widest mt-6 max-w-xs">
            OPEN FOR COLLABORATION ON AI INITIATIVES AND SOFTWARE DEVELOPMENT PROJECTS.
          </p>
        </div>

        {/* Right links */}
        <div className="space-y-0 w-full md:w-auto md:min-w-[300px]">
          {[
            { label: "GITHUB",   icon: <FaGithub size={18} />,   href: "https://github.com/popeizdope123" },
            { label: "LINKEDIN", icon: <FaLinkedin size={18} />,  href: "https://www.linkedin.com/in/john-paul-ali%C3%B1o-a2492a411" },
            { label: "EMAIL",    icon: <Mail size={18} />,         href: "mailto:johnpaul.alino@yahoo.com" },
            { label: "RESUME",   icon: <FileText size={18} />,     href: "/resume_alino.pdf" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between py-4 border-b border-black/20 group cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              <span className="font-black text-black text-xl tracking-tight group-hover:translate-x-1 transition-transform">
                {link.label}
              </span>
              <span className="text-black/60 border border-black/30 p-2">{link.icon}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer bar */}
      <div className="mt-16 pt-4 border-t border-black/20 flex flex-wrap justify-between items-center gap-4">
        <span className="text-[10px] font-bold tracking-widest text-black/50">BUILT WITH PASSION AND DEDICATION ©2026</span>
        <div className="flex gap-6">
          <span className="text-[10px] font-bold tracking-widest text-black/60">LOC: DAVAO / PH</span>
          <span className="text-[10px] font-bold tracking-widest text-black/60">TIME: {time}</span>
          <span className="text-[10px] font-bold tracking-widest text-black">READY_FOR_DEPLOYMENT</span>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-mono" style={{ fontFamily: "'Space Mono', 'Courier New', monospace" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #00ff41; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.8s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.8s 0.2s ease both; }
        .fade-up-3 { animation: fadeUp 0.8s 0.4s ease both; }
      `}</style>
      <Noise />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
