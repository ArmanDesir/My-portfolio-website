import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Database,
  Cpu,
  GitBranch,
  Layers,
  Code2,
  Zap,
  Award,
  TrendingUp,
} from "lucide-react";
import { AnimatedSection } from "../components/ui/MagneticCursor";

const SKILL_CATEGORIES = [
  {
    title: "Front-End Development",
    icon: Globe,
    color: "from-sky-500 to-blue-600",
    description: "Building modern, responsive, and performant user interfaces.",
    skills: [
      {
        name: "React.js",
        level: 95,
        desc: "Component architecture, hooks, context, custom hooks",
      },
      {
        name: "TypeScript",
        level: 90,
        desc: "Type-safe development, interfaces, generics",
      },
      {
        name: "JavaScript ES6+",
        level: 95,
        desc: "Modern syntax, async/await, destructuring",
      },
      { name: "HTML5", level: 98, desc: "Semantic markup, accessibility, SEO" },
      {
        name: "CSS3 / Tailwind",
        level: 95,
        desc: "Flexbox, Grid, animations, utilities",
      },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "from-emerald-500 to-teal-600",
    description: "Cross-platform mobile apps with native performance.",
    skills: [
      {
        name: "Flutter",
        level: 90,
        desc: "Widget architecture, state management, animations",
      },
      {
        name: "Dart",
        level: 88,
        desc: "Async programming, streams, null safety",
      },
    ],
  },
  {
    title: "Back-End & Databases",
    icon: Database,
    color: "from-orange-500 to-amber-600",
    description: "Scalable backend systems and optimized data architectures.",
    skills: [
      {
        name: "Supabase",
        level: 92,
        desc: "Auth, RLS policies, real-time, storage",
      },
      {
        name: "PostgreSQL",
        level: 88,
        desc: "Schema design, queries, migrations, indexing",
      },
      {
        name: "Firebase",
        level: 90,
        desc: "Firestore, Auth, Cloud Functions, Hosting",
      },
      {
        name: "REST APIs",
        level: 95,
        desc: "Design, documentation, authentication",
      },
    ],
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    color: "from-rose-500 to-red-600",
    description:
      "Foundational knowledge that enables problem-solving at scale.",
    skills: [
      {
        name: "Data Structures",
        level: 88,
        desc: "Arrays, trees, graphs, hash tables",
      },
      {
        name: "Algorithms",
        level: 85,
        desc: "Sorting, searching, dynamic programming",
      },
      {
        name: "Git / Version Control",
        level: 95,
        desc: "Branching, merging, collaboration",
      },
      {
        name: "State Management",
        level: 90,
        desc: "Redux, Context, Bloc, Riverpod",
      },
    ],
  },
];

export default function SkillsPage() {
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
              <TrendingUp size={16} />
              Skills
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              My Technical
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="block bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent"
              >
                Arsenal
              </motion.span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed">
              Technologies and concepts I've mastered through building real
              products. Each skill has been tested in production environments.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-20">
            {SKILL_CATEGORIES.map((category, categoryIndex) => (
              <AnimatedSection key={category.title} delay={categoryIndex * 0.1}>
                <div className="relative">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-xl`}
                    >
                      <category.icon size={28} className="text-white" />
                    </motion.div>
                    <div>
                      <h2 className="text-3xl font-black text-white">
                        {category.title}
                      </h2>
                      <p className="text-slate-500">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-white">
                              {skill.name}
                            </h3>
                            <p className="text-slate-500 text-sm">
                              {skill.desc}
                            </p>
                          </div>
                          <span className="text-2xl font-black text-sky-400">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: skillIndex * 0.1,
                              ease: "easeOut",
                            }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Development Approach
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              My methodology for delivering quality code and maintainable
              systems.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Layers,
                title: "Plan First",
                desc: "Architecture before implementation. Clear data flow and component structure.",
                color: "from-sky-500 to-blue-600",
              },
              {
                icon: Code2,
                title: "Clean Code",
                desc: "Readable, documented, and testable. Following best practices and patterns.",
                color: "from-emerald-500 to-teal-600",
              },
              {
                icon: Zap,
                title: "Iterate Fast",
                desc: "Rapid prototyping with continuous feedback. Ship early, improve often.",
                color: "from-orange-500 to-amber-600",
              },
              {
                icon: Award,
                title: "Quality Focus",
                desc: "Testing, optimization, and security. Production-ready from day one.",
                color: "from-rose-500 to-red-600",
              },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-center"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-500 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Tools & Platforms
            </h2>
            <p className="text-slate-500 text-lg">
              The ecosystem I work with daily.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "VS Code",
                "Git",
                "GitHub",
                "Figma",
                "Vercel",
                "Netlify",
                "Postman",
                "Supabase Dashboard",
                "Firebase Console",
                "Android Studio",
                "Chrome DevTools",
                "Tailwind Play",
              ].map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-medium hover:border-sky-500/40 hover:text-white transition-colors cursor-default"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
