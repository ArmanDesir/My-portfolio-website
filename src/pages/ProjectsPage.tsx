import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  ExternalLink,
  Terminal, // 1. Swapped Github to Terminal here!
  ArrowRight,
  Calendar,
  Star,
  Zap,
  Shield,
  Database,
  Code2,
} from "lucide-react";
import AnimatedSection from "../components/UI/MagneticCursor";

const PROJECTS = [
  {
    id: 1,
    title: "DiscoverZamboanga",
    subtitle: "Tourism Platform",
    category: "WordPress",
    year: "2024 - Present",
    description:
      "A comprehensive tourism and local business directory platform for Zamboanga City. Built on WordPress with custom theme development, integrated booking systems, and optimized for local SEO to boost tourism visibility.",
    highlights: [
      "Custom WordPress theme from scratch",
      "Integrated booking and inquiry systems",
      "Local SEO optimization",
      "Mobile-responsive design",
      "Multi-language support ready",
      "Performance optimized (90+ PageSpeed)",
    ],
    tech: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3", "SEO"],
    color: "from-indigo-500 to-blue-600",
    icon: Globe,
    featured: true,
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Cross-Platform Mobile App",
    subtitle: "Academic Capstone Project",
    category: "Mobile Development",
    year: "2025 - 2026",
    description:
      "Engineered and deployed a complete cross-platform mobile application from scratch utilizing Flutter and Dart. Architected a real-time relational database layer leveraging Supabase and managed structured migrations via PostgreSQL.",
    highlights: [
      "Row Level Security (RLS) implementation",
      "Real-time data synchronization",
      "Secure authentication system",
      "Optimized API data pipelines",
      "Offline-first architecture",
      "Cross-platform (iOS + Android)",
    ],
    tech: ["Flutter", "Dart", "Supabase", "PostgreSQL", "REST APIs"],
    color: "from-emerald-500 to-teal-600",
    icon: Smartphone,
    featured: true,
    link: "#",
    github: "https://github.com/armandesir",
  },
  {
    id: 3,
    title: "Client Web Ecosystem",
    subtitle: "E-Commerce Platform",
    category: "Full-Stack Web",
    year: "2024",
    description:
      "Built a production-ready e-commerce platform for a local business. Transformed mockups into fully interactive, high-performance user interfaces with real-time inventory management and secure payment integration.",
    highlights: [
      "React.js frontend architecture",
      "Firebase NoSQL backend",
      "State management with Context API",
      "Real-time inventory updates",
      "Secure payment gateway integration",
      "Admin dashboard included",
    ],
    tech: ["React.js", "TypeScript", "Firebase", "Tailwind CSS", "Stripe API"],
    color: "from-sky-500 to-blue-600",
    icon: Code2,
    featured: false,
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Business Management System",
    subtitle: "Enterprise Solution",
    category: "Full-Stack Web",
    year: "2024 - 2025",
    description:
      "Developed a comprehensive business management system including inventory tracking, employee management, and reporting dashboards. Built with scalability in mind for growing businesses.",
    highlights: [
      "Complete CRUD operations",
      "Role-based access control",
      "Reporting and analytics dashboard",
      "PDF export functionality",
      "Email notification system",
      "Data backup automation",
    ],
    tech: ["React.js", "Node.js", "Supabase", "PostgreSQL", "Chart.js"],
    color: "from-orange-500 to-amber-600",
    icon: Database,
    featured: false,
    link: "#",
    github: "#",
  },
];

const CATEGORIES = ["All", "WordPress", "Mobile Development", "Full-Stack Web"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = PROJECTS.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory,
  );

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
              <Zap size={16} />
              Portfolio
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              Projects That
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="block bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent"
              >
                Speak Results
              </motion.span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed">
              From WordPress platforms to cross-platform mobile apps, each
              project demonstrates independent architecture and production-ready
              delivery.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25"
                    : "bg-white/5 border border-white/10 text-slate-400 hover:border-sky-500/40 hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="relative group"
                >
                  <div
                    className={`relative p-8 md:p-10 rounded-3xl border border-white/10 bg-white/2 backdrop-blur-sm overflow-hidden transition-all duration-500 ${
                      hoveredProject === project.id
                        ? "border-white/20 shadow-2xl shadow-black/20"
                        : ""
                    }`}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-6 right-6">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold"
                        >
                          <Star size={12} />
                          Featured
                        </motion.div>
                      </div>
                    )}

                    <div className="relative flex flex-col lg:flex-row gap-8 items-start">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-xl flex-shrink-0`}
                      >
                        <project.icon size={28} className="text-white" />
                      </motion.div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-xs font-bold text-slate-500 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                            {project.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <Calendar size={12} />
                            {project.year}
                          </span>
                        </div>

                        <h3 className="text-3xl font-black text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sky-400 font-semibold mb-4">
                          {project.subtitle}
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6 max-w-2xl">
                          {project.description}
                        </p>

                        {/* Highlights */}
                        <div className="grid sm:grid-cols-2 gap-2 mb-8">
                          {project.highlights.map((highlight) => (
                            <motion.div
                              key={highlight}
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-2 text-slate-400 text-sm"
                            >
                              <Shield
                                size={12}
                                className="text-sky-400 flex-shrink-0"
                              />
                              {highlight}
                            </motion.div>
                          ))}
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech.map((tech) => (
                            <motion.span
                              key={tech}
                              whileHover={{ scale: 1.1 }}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r ${project.color} text-white shadow-sm`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3">
                          {project.link !== "#" && (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-sky-500/25 hover:shadow-sky-400/30 transition-shadow"
                            >
                              <ExternalLink size={16} />
                              View Live
                            </motion.a>
                          )}
                          {project.github !== "#" && (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white text-sm font-semibold hover:border-sky-500/40 transition-colors"
                            >
                              <Terminal size={16} />{" "}
                              {/* 2. Changed this from Github to Terminal */}
                              Source Code
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-black text-white mb-6">
              Want to Build Something Similar?
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              I'm open to freelance projects and collaborations. Let's discuss
              your next big idea.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:froschcrow@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-lg font-bold rounded-xl shadow-xl shadow-sky-500/25"
            >
              Start a Conversation
              <ArrowRight size={20} />
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
