import { useState } from 'react'
import Card from './components/Card'
import Ramalama from './pages/Ramalama'
import Granitecode from './pages/Granitecode'
import Instructlab from './pages/Instructlab'
import ClaudeCode from './pages/ClaudeCode'
import Gemini from './pages/Gemini'

import ramalamaLogo from './assets/ramalama.png'
import graniteLogo from './assets/granitecode.png'
import instructlabLogo from './assets/instructlab.png'
import claudeCodeLogo from './assets/claudecode.svg'
import geminiLogo from './assets/gemini.svg'

import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 via-pink-50 to-cyan-50 -z-10"
        animate={{
          background: [
            "linear-gradient(135deg, #eef2ff 0%, #f3e8ff 25%, #fce7f3 50%, #ecfeff 100%)",
            "linear-gradient(225deg, #eef2ff 0%, #f3e8ff 25%, #fce7f3 50%, #ecfeff 100%)",
            "linear-gradient(315deg, #eef2ff 0%, #f3e8ff 25%, #fce7f3 50%, #ecfeff 100%)",
            "linear-gradient(45deg, #eef2ff 0%, #f3e8ff 25%, #fce7f3 50%, #ecfeff 100%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating orbs for depth */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: i % 2 === 0 
                ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                : "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, 100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
            initial={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <header className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight relative"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                AI Tools Explained Simply
              </span>
            </motion.h1>
            
            {/* Decorative elements */}
            <motion.div
              className="flex justify-center gap-2 mb-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-gray-700 mt-4 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover powerful AI tools explained in simple terms. Learn how to use Ramalama, Granite.Code, InstructLab, Claude Code, and Gemini API for your projects.
          </motion.p>
        </header>

        <AnimatePresence mode="wait">
          {!selected && (
            <motion.div
              key="cards"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 place-items-center mb-16"
            >
              <Card
                title="RamaLama"
                description="Run and serve AI models using Podman/Docker containers with GPU auto-detection. Simplify LLM deployment with container-based solutions."
                image={ramalamaLogo}
                onClick={() => setSelected('ramalama')}
                index={0}
              />
              <Card
                title="Granite.Code"
                description="Open-source LLMs trained for secure, production-grade software development. Privacy-preserving coding assistance for VS Code."
                image={graniteLogo}
                onClick={() => setSelected('granite')}
                index={1}
              />
              <Card
                title="InstructLab"
                description="Fine-tune LLMs for domain-specific Q&A, especially useful in law and public service. Customize AI models for your specific needs."
                image={instructlabLogo}
                onClick={() => setSelected('instructlab')}
                index={2}
              />
              <Card
                title="Claude Code"
                description="Advanced AI command-line interface assistant for code generation, problem-solving, and technical communications. CLI-based AI assistance."
                image={claudeCodeLogo}
                onClick={() => setSelected('claude')}
                index={3}
              />
              <Card
                title="Gemini API"
                description="Connect Google AI models directly into your IDE. Use with Continue.dev, Aider, and other open-source tools for enhanced productivity."
                image={geminiLogo}
                onClick={() => setSelected('gemini')}
                index={4}
              />
            </motion.div>
          )}

          {selected && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            >
              <motion.button
                onClick={() => setSelected(null)}
                className="mb-8 px-6 py-3 bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 font-semibold flex items-center gap-2 border border-gray-200/50 backdrop-blur-sm relative overflow-hidden group"
                whileHover={{ x: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  animate={{ x: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ←
                </motion.span>
                <span>Back to Tools</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              <motion.div
                className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-white/20 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                
                {selected === 'ramalama' && <Ramalama />}
                {selected === 'granite' && <Granitecode />}
                {selected === 'instructlab' && <Instructlab />}
                {selected === 'claude' && <ClaudeCode />}
                {selected === 'gemini' && <Gemini />}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.footer 
          className="mt-16 text-center text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-medium">
            © 2025 <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">Sudip Shil</span> | AI Tools Blog
          </p>
        </motion.footer>
      </div>
    </div>
  )
}

export default App