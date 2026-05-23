import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Minimize2,
  Maximize2,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTIONS = [
  "Tell me about Jerico's skills",
  "What projects has he built?",
  "How can I contact him?",
  "Download his resume",
];

const RESPONSES: Record<string, string> = {
  skills:
    "Jerico is proficient in React.js, TypeScript, Flutter, Dart, Supabase, PostgreSQL, Firebase, and REST APIs. He has strong foundations in data structures, algorithms, and modern state management patterns.",
  projects:
    "Jerico has built several production-grade projects including a cross-platform mobile app using Flutter and Supabase, full-stack web ecosystems with React.js and Firebase, and DiscoverZamboanga - a WordPress-based tourism platform. Each project demonstrates his ability to independently architect and deliver complete solutions.",
  contact:
    "You can reach Jerico via email at froschcrow@gmail.com, by phone at +63 909 372 7245, or through his GitHub at github.com/armandesir. He's open to full-time roles, freelance projects, and collaborations.",
  resume:
    "You can download Jerico's resume directly from the navigation bar - just click the 'Download CV' button. The resume includes his full technical background, project experience, and education details.",
  default:
    "Thanks for your message! I'm Jerico's AI assistant. Feel free to ask about his skills, projects, experience, or how to get in touch. I'm here to help you learn more about what he can bring to your team.",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (
    lower.includes("skill") ||
    lower.includes("tech") ||
    lower.includes("stack") ||
    lower.includes("what can he")
  ) {
    return RESPONSES.skills;
  }
  if (
    lower.includes("project") ||
    lower.includes("built") ||
    lower.includes("work") ||
    lower.includes("portfolio")
  ) {
    return RESPONSES.projects;
  }
  if (
    lower.includes("contact") ||
    lower.includes("email") ||
    lower.includes("phone") ||
    lower.includes("hire") ||
    lower.includes("reach")
  ) {
    return RESPONSES.contact;
  }
  if (
    lower.includes("resume") ||
    lower.includes("cv") ||
    lower.includes("download")
  ) {
    return RESPONSES.resume;
  }
  if (
    lower.includes("hello") ||
    lower.includes("hi") ||
    lower.includes("hey")
  ) {
    return "Hello! I'm here to help you learn about Jerico's experience and skills. What would you like to know?";
  }
  if (lower.includes("thank")) {
    return "You're welcome! If you have any more questions, feel free to ask. Have a great day!";
  }
  return RESPONSES.default;
}

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hi there! I'm Jerico's AI assistant. I can help you learn about his skills, projects, and how to get in touch. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 800 + Math.random() * 400),
    );

    const response = getResponse(input);
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className={`fixed z-50 ${isMinimized ? "bottom-24 right-6" : "bottom-6 right-6"}`}
        >
          <motion.div
            layout
            className={`relative bg-[#0d1117] rounded-3xl shadow-2xl shadow-black/50 border border-white/10 overflow-hidden ${
              isMinimized ? "w-auto" : "w-[380px] max-w-[calc(100vw-48px)]"
            }`}
          >
            <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-sky-500/10 to-blue-600/10 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                    <Bot size={18} className="text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#0d1117]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    AI Assistant
                  </p>
                  <p className="text-emerald-400 text-xs">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  {isMinimized ? (
                    <Maximize2 size={16} />
                  ) : (
                    <Minimize2 size={16} />
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                  {messages.map((msg, index) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center ${
                          msg.role === "user"
                            ? "bg-sky-500/20 border border-sky-500/30"
                            : "bg-gradient-to-br from-sky-500 to-blue-600"
                        }`}
                      >
                        {msg.role === "user" ? (
                          <User size={14} className="text-sky-400" />
                        ) : (
                          <Sparkles size={14} className="text-white" />
                        )}
                      </div>
                      <div
                        className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm ${
                          msg.role === "user"
                            ? "bg-sky-500/20 border border-sky-500/30 text-white"
                            : "bg-white/5 border border-white/10 text-slate-300"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center">
                        <Sparkles size={14} className="text-white" />
                      </div>
                      <div className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
                        <div className="flex gap-1">
                          <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: 0,
                            }}
                            className="w-2 h-2 rounded-full bg-sky-400"
                          />
                          <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: 0.2,
                            }}
                            className="w-2 h-2 rounded-full bg-sky-400"
                          />
                          <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: 0.4,
                            }}
                            className="w-2 h-2 rounded-full bg-sky-400"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                <div className="p-4 border-t border-white/5 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.slice(0, 2).map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-3 py-1.5 text-xs rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:border-sky-500/40 hover:text-sky-400 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Ask me anything..."
                      className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-500/50 transition-colors"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="px-4 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={18} />
                    </motion.button>
                  </div>
                </div>
              </>
            )}

            {isMinimized && (
              <button
                onClick={() => setIsMinimized(false)}
                className="px-6 py-4 text-sm text-slate-300 hover:text-white transition-colors"
              >
                Click to expand chat...
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
