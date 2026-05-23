import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Download,
  Sparkles,
  Code2,
  Smartphone,
  Database,
  Zap,
  ChevronDown,
} from "lucide-react";
import {
  AnimatedSection,
  TextReveal,
  FloatingElement,
} from "../components/ui/MagneticCursor";

export default function HomePage() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#080c10]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Animated Orbs */}
        <FloatingElement
          delay={0}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[150px]"
        />
        <FloatingElement
          delay={1}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"
        />
        <FloatingElement
          delay={2}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px]"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left md:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-semibold tracking-wide mb-10 backdrop-blur-md"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles size={16} />
                </motion.div>
                Available for opportunities
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-6xl font-black tracking-tight leading-none mb-6"
              >
                <TextReveal className="block text-white">Jerico</TextReveal>
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block bg-gradient-to-r from-sky-400 via-blue-400 to-sky-300 bg-clip-text text-transparent"
                >
                  Divino
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl md:text-2xl text-slate-300 font-light mb-4 tracking-wide"
              >
                Full-Stack Web & Mobile Developer
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-2 text-slate-500 mb-8"
              >
                <MapPin size={16} />
                <span>Zamboanga City, Philippines</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-slate-400 text-lg leading-relaxed mb-10"
              >
                Architecting and shipping production-ready platforms since
                sophomore year. Specialized in React.js, Flutter, and Supabase
                ecosystems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="flex flex-col gap-3 mb-10"
              >
                <Link to="/projects">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 40px rgba(14, 165, 233, 0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl shadow-sky-500/30 transition-shadow"
                  >
                    Explore My Work
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={20} />
                    </motion.span>
                  </motion.button>
                </Link>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  download="Jerico_Divino_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/20 hover:border-sky-500/50 bg-white/5 text-white font-bold rounded-2xl transition-colors"
                >
                  <Download size={20} />
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right - Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden md:block relative"
            >
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/20 to-blue-600/20" />

                {/* Photo */}
                <img
                  src="/131566.jpeg"
                  alt="Jerico Divino"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating accent */}
              <FloatingElement
                delay={0.5}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl"
              />
              <FloatingElement
                delay={1.5}
                className="absolute -top-4 -right-4 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"
              />
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16"
          >
            {[
              { icon: Code2, label: "Years", number: "2+", desc: "Building" },
              {
                icon: Smartphone,
                label: "Mobile",
                number: "Flutter",
                desc: "Expert",
              },
              {
                icon: Database,
                label: "Backend",
                number: "Supabase",
                desc: "Pro",
              },
              { icon: Zap, label: "Degree", number: "BS CS", desc: "2026" },
            ].map(({ icon: Icon, label, number, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:border-sky-500/40 transition-colors"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <Icon className="text-sky-400 mb-2" size={20} />
                  <div className="text-2xl font-black text-white mb-1">
                    {number}
                  </div>
                  <div className="text-slate-500 text-xs">{desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            onClick={scrollToNext}
            className="text-slate-500 hover:text-sky-400 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.button>
        </div>
      </section>

      {/* Quick About Preview */}
      <section className="relative py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sky-400 text-sm font-bold tracking-widest uppercase mb-4">
              Why Me?
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Building <span className="text-slate-500">real products,</span>
              <br />
              not just assignments.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Architecture-First",
                  desc: "Every project starts with careful system design, ensuring scalability and maintainability from day one.",
                  color: "from-sky-500 to-blue-600",
                },
                {
                  title: "Production-Ready",
                  desc: "Shipped multiple platforms to real users. From authentication to database optimization — fully functional.",
                  color: "from-emerald-500 to-teal-600",
                },
                {
                  title: "Independent Builder",
                  desc: "Solo-developed complete ecosystems. No hand-holding, just results delivered on time.",
                  color: "from-orange-500 to-amber-600",
                },
              ].map(({ title, desc, color }, i) => (
                <motion.div
                  key={title}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${color} opacity-50 group-hover:opacity-100 transition-opacity`}
                  />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mt-16 text-center">
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-sky-500/50 rounded-xl text-white font-semibold transition-colors"
              >
                Learn More About Me
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Tech Stack Quick View */}
      <section className="relative py-32 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-sky-400 text-sm font-bold tracking-widest uppercase mb-4">
              Tech Stack
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-white">
              My Arsenal
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                "React.js",
                "TypeScript",
                "Flutter",
                "Dart",
                "Supabase",
                "PostgreSQL",
                "Firebase",
                "Node.js",
                "Tailwind CSS",
                "Git",
              ].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-white font-bold text-lg backdrop-blur-sm cursor-pointer hover:border-sky-500/40 transition-colors"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4} className="mt-16 text-center">
            <Link to="/skills">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-sky-500/50 rounded-xl text-white font-semibold transition-colors"
              >
                View Full Skills
                <ArrowRight size={18} />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
