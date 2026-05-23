import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ChatBot from "../../components/ChatBot";

import HomePage from "./../../pages/HomePage";
import AboutPage from "./../../pages/AboutPage";
import ProjectsPage from "./../../pages/ProjectsPage";
import SkillsPage from "./../../pages/SkillsPage";
import ContactPage from "./../../pages/ContactPage";

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#080c10] text-white">
      <Navbar onChatOpen={() => setChatOpen(true)} />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Chat Bot */}
      <ChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} />

      {/* Floating Chat Button */}
      <AnimatePresence>
        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 flex items-center justify-center hover:scale-110 transition-transform"
          >
            <MessageCircle size={24} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#080c10]" />
          </button>
        )}
      </AnimatePresence>

      {/* Background ambient effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}

export default App;
