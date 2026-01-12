import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const addToWaitlist = useMutation(api.waitlist.addToWaitlist);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      await addToWaitlist({ email });
      toast.success("Successfully joined , talk soon !");
      setEmail("");
    } catch (error) {
      if (error instanceof Error && error.message.includes("already registered")) {
        toast.error("This email already joined ");
      } else {
        toast.error("Failed to join. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Transform values for each icon based on scroll
  const topLeftX = useTransform(scrollYProgress, [0, 0.3], [0, -200]);
  const topLeftY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const topLeftOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const topRightX = useTransform(scrollYProgress, [0, 0.3], [0, 200]);
  const topRightY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const topRightOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const middleLeftX = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const middleLeftY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);
  const middleLeftOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const middleRightX = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const middleRightY = useTransform(scrollYProgress, [0, 0.3], [0, 50]);
  const middleRightOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const bottomLeftX = useTransform(scrollYProgress, [0, 0.3], [0, -250]);
  const bottomLeftY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const bottomLeftOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const bottomRightX = useTransform(scrollYProgress, [0, 0.3], [0, 250]);
  const bottomRightY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
  const bottomRightOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div id="hero" className="w-full min-h-[90vh] relative flex pt-20 md:pt-32 lg:pt-40 justify-center bg-white rounded-t-3xl z-20 px-4 items-center sm:items-start">
      {/* Hexagonal SVG Illustrations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left */}
        <motion.div 
          className="absolute top-5 left-5 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 lg:left-32"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          style={{
            x: topLeftX,
            y: topLeftY,
            opacity: topLeftOpacity
          }}
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
          className="absolute top-5 right-5 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 lg:right-32"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          style={{
            x: topRightX,
            y: topRightY,
            opacity: topRightOpacity
          }}
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
          className="absolute top-1/2 left-0 transform -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 md:left-5 hidden sm:block"
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          style={{
            x: middleLeftX,
            y: middleLeftY,
            opacity: middleLeftOpacity
          }}
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
          className="absolute top-1/2 right-0 transform -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 md:right-5 hidden sm:block"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          style={{
            x: middleRightX,
            y: middleRightY,
            opacity: middleRightOpacity
          }}
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
          className="absolute bottom-10 left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 lg:left-44"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          style={{
            x: bottomLeftX,
            y: bottomLeftY,
            opacity: bottomLeftOpacity
          }}
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
          className="absolute bottom-10 right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 lg:right-44"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          style={{
            x: bottomRightX,
            y: bottomRightY,
            opacity: bottomRightOpacity
          }}
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
        className="text-center max-w-4xl lg:max-w-5xl px-4 sm:px-6 relative z-30"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Turn Effort Into
          {/* <br /> */}
          <span className="text-blue-900"> Results.</span>
        </motion.h1>
        <motion.h2 
          className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Work Faster, Easier, More Efficient
        </motion.h2>
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-md sm:max-w-lg mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          Complete projects in record time. Automate tasks, collaborate
          seamlessly, deliver results faster.
        </motion.p>
        <form onSubmit={handleSubmit}>
          <motion.div 
            className="flex flex-col sm:flex-row border-2 rounded-lg border-black justify-center items-center max-w-md sm:max-w-lg mx-auto p-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-4 sm:px-6 py-3 sm:py-6 text-sm sm:text-base lg:text-lg border-0 rounded-r-none focus-visible:ring-0"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-6 bg-black text-white font-semibold text-sm sm:text-base lg:text-lg rounded-l-lg rounded-r-lg sm:rounded-l-none hover:bg-gray-800 disabled:opacity-50"
            >
              {isLoading ? "Joining..." : "Get Early Access"}
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
