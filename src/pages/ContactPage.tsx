import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  MessageCircle,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { AnimatedSection } from "../components/ui/MagneticCursor";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus("success");
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "froschcrow@gmail.com",
      href: "mailto:froschcrow@gmail.com",
      color: "from-sky-500 to-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 909 372 7245",
      href: "tel:+639093727245",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/armandesir",
      href: "https://github.com/armandesir",
      color: "from-slate-500 to-slate-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/jericodivino",
      href: "https://linkedin.com/in/jericodivino",
      color: "from-blue-600 to-blue-700",
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
              <MessageCircle size={16} />
              Contact
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              Let's Build
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="block bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent"
              >
                Something Remarkable
              </motion.span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed">
              Open to full-time opportunities, freelance projects, and
              meaningful collaborations. Based in Zamboanga City, Philippines —
              available worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={
                    method.icon === Github || method.icon === Linkedin
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    method.icon === Github || method.icon === Linkedin
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-center"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <method.icon size={24} className="text-white" />
                  </div>
                  <p className="text-sm text-slate-500 mb-1">{method.label}</p>
                  <p className="text-white font-semibold break-all">
                    {method.value}
                  </p>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-black text-white mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-sky-500/50 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-lg font-bold rounded-xl shadow-xl shadow-sky-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                    >
                      <CheckCircle size={20} />
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                </form>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-3xl font-black text-white mb-6">
                  Quick Info
                </h2>

                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin size={20} className="text-sky-400" />
                      <span className="text-white font-semibold">Location</span>
                    </div>
                    <p className="text-slate-400">
                      Zamboanga City, Philippines
                      <br />
                      <span className="text-slate-500 text-sm">
                        Available for remote work worldwide
                      </span>
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <ExternalLink size={20} className="text-sky-400" />
                      <span className="text-white font-semibold">
                        Response Time
                      </span>
                    </div>
                    <p className="text-slate-400">
                      Usually within 24 hours
                      <br />
                      <span className="text-slate-500 text-sm">
                        Faster for urgent inquiries
                      </span>
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-600/10 border border-sky-500/20">
                    <p className="text-slate-300 leading-relaxed">
                      Whether you have a project idea, job opportunity, or just
                      want to connect, I'd love to hear from you. Let's build
                      something great together.
                    </p>
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
