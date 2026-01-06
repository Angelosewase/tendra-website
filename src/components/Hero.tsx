import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="w-full min-h-[90vh] relative flex pt-40 justify-center bg-white rounded-t-3xl z-20">
      {/* Hexagonal SVG Illustrations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left */}
        <motion.div 
          className="absolute top-5 left-5 md:top-4 md:left-32 w-48 h-48 md:w-64 md:h-64 opacity-100 hidden md:hidden lg:block"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <img
            src="/assets/automation.svg"
            alt="Automation"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Top Right */}
        <motion.div 
          className="absolute top-5 right-5 md:top-10 md:right-15 w-48 h-48 md:w-64 md:h-64 opacity-100 hidden md:hidden lg:block"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <img
            src="/assets/graph.svg"
            alt="Graph"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Middle Left */}
        <motion.div 
          className="absolute top-1/2 left-0 md:left-5 transform -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 opacity-100 hidden md:block"
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <img
            src="/assets/folder.svg"
            alt="Folder"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Middle Right */}
        <motion.div 
          className="absolute top-1/2 right-0 md:right-5 transform -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 opacity-100 hidden md:block"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <img
            src="/assets/storage.svg"
            alt="Storage"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Bottom Left */}
        <motion.div 
          className="absolute bottom-10 left-10 md:bottom-5 md:left-44 w-48 h-48 md:w-64 md:h-64 opacity-100"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <img
            src="/assets/time.svg"
            alt="Time"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Bottom Right */}
        <motion.div 
          className="absolute bottom-10 right-10 md:bottom-10 md:right-44 w-48 h-48 md:w-64 md:h-64 opacity-100"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          <img
            src="/assets/Task List.svg"
            alt="Task List"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      <motion.div 
        className="text-center max-w-5xl px-6 relative z-30"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-gray-900  leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Turn Effort Into
          {/* <br /> */}
          <span className="text-blue-900"> Results.</span>
        </motion.h1>
        <motion.h2 
          className="text-lg md:text-xl font-semibold text-gray-700 mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Work Faster, Easier, More Efficient
        </motion.h2>
        <motion.p 
          className=" text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          Complete projects in record time. Automate tasks, collaborate
          seamlessly, deliver results faster.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row border-2 rounded-lg border-black justify-center items-center max-w-lg mx-auto p-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-6 py-6 text-lg border-0 rounded-r-none focus-visible:ring-0"
            onFocus={(e) => e.preventDefault()}
          />
          <Button
            size="lg"
            className="w-full sm:w-auto px-8 py-6 bg-black text-white font-semibold text-lg rounded-l-lg rounded-r-lg sm:rounded-l-none hover:bg-gray-800"
          >
            Get Early Access
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
