import { motion } from "framer-motion";
import { useState } from "react";

function Card({ title, description, image, onClick, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);

  // Different gradient colors for each card
  const gradients = [
    "from-blue-500 via-cyan-500 to-teal-500",
    "from-purple-500 via-pink-500 to-rose-500",
    "from-indigo-500 via-purple-500 to-violet-500",
    "from-orange-500 via-amber-500 to-yellow-500",
    "from-emerald-500 via-teal-500 to-cyan-500",
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="max-w-sm relative overflow-hidden rounded-2xl cursor-pointer group"
      whileHover={{ 
        y: -12, 
        scale: 1.03,
        rotateY: 5,
      }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 30, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      style={{ perspective: 1000 }}
    >
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        animate={{
          backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%",
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
        transition={{ duration: 0.8 }}
      />

      {/* Card content */}
      <div className="relative bg-white/95 backdrop-blur-sm h-full">
        {/* Image container with animated gradient border */}
        <motion.div 
          className={`w-full h-48 bg-gradient-to-br ${gradient} p-1 flex items-center justify-center relative overflow-hidden`}
          animate={isHovered ? {
            background: [
              `linear-gradient(135deg, var(--tw-gradient-stops))`,
              `linear-gradient(225deg, var(--tw-gradient-stops))`,
              `linear-gradient(135deg, var(--tw-gradient-stops))`,
            ]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-full h-full bg-white rounded-t-xl flex items-center justify-center p-4">
            {image ? (
              <motion.img
                src={image}
                alt={`${title} logo`}
                className="max-h-full max-w-full object-contain"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ) : (
              <motion.div
                className={`w-24 h-24 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-2xl`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {title.charAt(0)}
              </motion.div>
            )}
          </div>
          
          {/* Floating particles effect */}
          {isHovered && (
            <>
              {[
                { x: 20, y: 30 },
                { x: 80, y: 20 },
                { x: 50, y: 70 },
                { x: 15, y: 60 },
                { x: 85, y: 50 },
                { x: 40, y: 15 },
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/60 rounded-full"
                  initial={{ 
                    x: "50%", 
                    y: "50%", 
                    scale: 0,
                    opacity: 1 
                  }}
                  animate={{
                    x: `${pos.x}%`,
                    y: `${pos.y}%`,
                    scale: [0, 1, 0],
                    opacity: [1, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </>
          )}
        </motion.div>

        <div className="p-6">
          <motion.h3 
            className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          >
            {title}
          </motion.h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
          
          <motion.div 
            className={`mt-4 font-semibold text-sm bg-gradient-to-r ${gradient} bg-clip-text text-transparent flex items-center gap-2`}
            animate={isHovered ? { x: 5 } : { x: 0 }}
          >
            <span>Learn more</span>
            <motion.span
              animate={isHovered ? { x: 5 } : { x: 0 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              →
            </motion.span>
          </motion.div>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 blur-xl -z-10`}
          animate={isHovered ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}

export default Card