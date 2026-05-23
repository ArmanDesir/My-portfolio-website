import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Code2,
  Rocket,
  Lightbulb,
  Users,
  Target,
  Award,
} from "lucide-react";
import { AnimatedSection } from "../components/ui/MagneticCursor";

export default function AboutPage() {
  const timeline = [
    {
      year: "2024",
      title: "Started Freelance Development",
      description:
        "Selected by stakeholders to build custom web ecosystems. Began delivering production-ready React.js applications.",
      icon: Rocket,
      color: "from-sky-500 to-blue-600",
    },
    {
      year: "2024-2025",
      title: "Full-Stack Proficiency",
      description:
        "Mastered Supabase, PostgreSQL, and Firebase. Built real-time database architectures with secure authentication.",
      icon: Database,
      color: "from-emerald-500 to-teal-600",
    },
    {
      year: "2025-2026",
      title: "Capstone Project Lead",
      description:
        "Architecting and leading a complete cross-platform mobile application as the final academic project.",
      icon: GraduationCap,
      color: "from-orange-500 to-amber-600",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent" />
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-semibold mb-8"
            >
              <Target size={16} />
              About Me
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              From Student to
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="block bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent"
              >
                Production Builder
              </motion.span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Highly proactive Full-Stack Developer graduating with a
              comprehensive technical background from Zamboanga Peninsula
              Polytechnic State University. Proven track record of independently
              architecting, building, and delivering production-ready web
              platforms since sophomore year.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                <MapPin size={16} className="text-sky-400" />
                Zamboanga City, Philippines
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                <Calendar size={16} className="text-sky-400" />
                Graduating June 2026
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black text-white mb-6">
                  What Sets Me Apart
                </h2>
                <p className="text-slate-400 leading-relaxed text-lg mb-8">
                  While most developers start building production systems years
                  into their careers, I began shipping real products during my
                  sophomore year. This early start has given me a unique
                  advantage: understanding not just how to code, but how to
                  architect complete solutions that scale.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Lightbulb,
                      text: "Business-driven development mindset",
                    },
                    {
                      icon: Code2,
                      text: "Algorithmic problem-solving foundation",
                    },
                    { icon: Users, text: "Stakeholder communication skills" },
                  ].map(({ icon: Icon, text }) => (
                    <motion.div
                      key={text}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center">
                        <Icon size={20} className="text-sky-400" />
                      </div>
                      <span className="text-white font-medium">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Projects Shipped",
                    number: "5+",
                    desc: "Production-ready",
                  },
                  { label: "Technologies", number: "15+", desc: "Mastered" },
                  { label: "Years Coding", number: "4+", desc: "Actively" },
                  {
                    label: "Clients Served",
                    number: "3+",
                    desc: "Independent",
                  },
                ].map(({ label, number, desc }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center"
                  >
                    <div className="text-4xl font-black text-white mb-2">
                      {number}
                    </div>
                    <div className="text-sm text-slate-400">{desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">My Journey</h2>
            <p className="text-slate-500 text-lg">
              From learning to building, here's how I got here.
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-sky-500/50 via-sky-500/20 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection key={item.year} delay={index * 0.1}>
                  <div
                    className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  >
                    <div
                      className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="inline-block p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                      >
                        <span className="text-sky-400 font-bold text-sm">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-2 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 text-sm max-w-md">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>

                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl`}
                      >
                        <item.icon size={24} className="text-white" />
                      </motion.div>
                    </div>

                    <div className="flex-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-sky-500/10 to-blue-600/10 border border-white/10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[100px]" />

              <div className="relative flex flex-col md:flex-row gap-8 items-start">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-xl flex-shrink-0">
                  <GraduationCap size={36} className="text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-semibold">
                      Graduating June 2026
                    </span>
                    <span className="px-3 py-1 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-400 text-sm font-semibold">
                      BS Computer Science / IT
                    </span>
                  </div>

                  <h3 className="text-3xl font-black text-white mb-2">
                    Zamboanga Peninsula Polytechnic State University
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-8">
                    Active multi-project builder alongside core academic
                    milestones from Year 2 to final year capstone delivery.
                    Demonstrated the ability to balance client work, independent
                    builds, and academic rigor simultaneously.
                  </p>

                  <div>
                    <p className="text-white font-semibold mb-4">
                      Core Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Advanced Web Architectures",
                        "Database Management Systems",
                        "Software Engineering",
                        "Design & Analysis of Algorithms",
                        "Object-Oriented Programming",
                      ].map((course) => (
                        <motion.span
                          key={course}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm hover:border-sky-500/40 transition-colors"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

function Database({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}
