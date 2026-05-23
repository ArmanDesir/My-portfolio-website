import { motion } from "framer-motion";
import { Terminal, Globe, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Terminal, href: "https://github.com/armandesir", label: "GitHub" }, // Terminal looks great for GitHub
    { icon: Mail, href: "mailto:froschcrow@gmail.com", label: "Email" },
    { icon: Globe, href: "https://linkedin.com", label: "LinkedIn" }, // Globe works well for professional links
  ];

  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">JD</span>
            </div>
            <span className="text-slate-400 text-sm">© 2026 Jerico Divino</span>
          </div>

          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/40 transition-colors"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </div>

          <p className="text-slate-600 text-sm text-right">
            Built with <span className="text-sky-500">React</span> +{" "}
            <span className="text-sky-500">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
