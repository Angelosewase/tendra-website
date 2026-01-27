import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const addToWaitlist = useMutation(api.waitlist.addToWaitlist);
  
  // Refs for in-view detection
  const imagesRef = useRef(null);
  const isInView = useInView(imagesRef, { once: false, amount: 0.3 });
  
  // State for mobile image cycling
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Image data
  const images = [
    { src: "/assets/automation.svg", alt: "Automation" },
    { src: "/assets/graph.svg", alt: "Graph" },
    { src: "/assets/folder.svg", alt: "Folder" },
    { src: "/assets/storage.svg", alt: "Storage" },
    { src: "/assets/time.svg", alt: "Time" },
    { src: "/assets/Task List.svg", alt: "Task List" }
  ];
  
  // Cycle through images on mobile
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000); // Change image every 3 seconds
      
      return () => clearInterval(interval);
    }
  }, [isInView, images.length]);

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
    <div id="hero" className="w-full min-h-[90vh] relative flex pt-10 md:pt-16 lg:pt-20 justify-center bg-white rounded-t-3xl z-20 px-4 items-start">
      {/* Horizontal Images at Bottom */}
      <div ref={imagesRef} className="absolute bottom-8 left-0 right-0 flex justify-center items-center px-4 pointer-events-none">
        {/* Desktop: Show all images */}
        <div className="hidden md:flex">
          {/* Automation */}
          <motion.div 
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-56 relative z-10 pointer-events-auto cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { 
              y: [0, -15, 0],
              opacity: 1
            } : {}}
            style={{
              opacity: isInView ? 1 : bottomLeftOpacity
            }}
            transition={{ 
              y: { duration: 2, repeat: isInView ? Infinity : 0, repeatDelay: 1, ease: "easeInOut" },
              opacity: { duration: 0.8, delay: 0.6, ease: "easeOut" }
            }}
          >
            <img
              src="/assets/automation.svg"
              alt="Automation"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Graph */}
          <motion.div 
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 relative z-20 pointer-events-auto cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { 
              y: [0, -15, 0],
              opacity: 1
            } : {}}
            style={{
              opacity: isInView ? 1 : topRightOpacity
            }}
            transition={{ 
              y: { duration: 2.5, repeat: isInView ? Infinity : 0, repeatDelay: 1.2, ease: "easeInOut" },
              opacity: { duration: 0.8, delay: 0.3, ease: "easeOut" }
            }}
          >
            <img
              src="/assets/graph.svg"
              alt="Graph"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Folder */}
          <motion.div 
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 relative z-30 pointer-events-auto cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { 
              y: [0, -15, 0],
              opacity: 1
            } : {}}
            style={{
              opacity: isInView ? 1 : middleLeftOpacity
            }}
            transition={{ 
              y: { duration: 2.2, repeat: isInView ? Infinity : 0, repeatDelay: 0.8, ease: "easeInOut" },
              opacity: { duration: 0.8, delay: 0.4, ease: "easeOut" }
            }}
          >
            <img
              src="/assets/folder.svg"
              alt="Folder"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Storage */}
          <motion.div 
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 relative z-40 pointer-events-auto cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { 
              y: [0, -15, 0],
              opacity: 1
            } : {}}
            style={{
              opacity: isInView ? 1 : middleRightOpacity
            }}
            transition={{ 
              y: { duration: 2.8, repeat: isInView ? Infinity : 0, repeatDelay: 1.5, ease: "easeInOut" },
              opacity: { duration: 0.8, delay: 0.5, ease: "easeOut" }
            }}
          >
            <img
              src="/assets/storage.svg"
              alt="Storage"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Time */}
          <motion.div 
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 relative z-50 pointer-events-auto cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { 
              y: [0, -15, 0],
              opacity: 1
            } : {}}
            style={{
              opacity: isInView ? 1 : bottomLeftOpacity
            }}
            transition={{ 
              y: { duration: 2.3, repeat: isInView ? Infinity : 0, repeatDelay: 1.1, ease: "easeInOut" },
              opacity: { duration: 0.8, delay: 0.6, ease: "easeOut" }
            }}
          >
            <img
              src="/assets/time.svg"
              alt="Time"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Task List */}
          <motion.div 
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 relative z-60 pointer-events-auto cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { 
              y: [0, -15, 0],
              opacity: 1
            } : {}}
            style={{
              opacity: isInView ? 1 : bottomRightOpacity
            }}
            transition={{ 
              y: { duration: 2.6, repeat: isInView ? Infinity : 0, repeatDelay: 1.3, ease: "easeInOut" },
              opacity: { duration: 0.8, delay: 0.7, ease: "easeOut" }
            }}
          >
            <img
              src="/assets/Task List.svg"
              alt="Task List"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>

        {/* Mobile: Show single cycling image */}
        <div className="md:hidden">
          <motion.div 
            className="w-40 h-40 sm:w-48 sm:h-48 lg:w-48 lg:h-48 relative z-10 pointer-events-auto cursor-pointer"
            key={currentImageIndex}
            initial={{ y: 50, opacity: 0, scale: 0.8 }}
            animate={{ 
              y: [0, -15, 0],
              opacity: 1,
              scale: 1
            }}
            exit={{ y: -50, opacity: 0, scale: 0.8 }}
            transition={{ 
              y: { duration: 2, repeat: isInView ? Infinity : 0, repeatDelay: 1, ease: "easeInOut" },
              opacity: { duration: 0.5, ease: "easeOut" },
              scale: { duration: 0.5, ease: "easeOut" }
            }}
          >
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="text-center max-w-4xl lg:max-w-5xl px-4 sm:px-6 relative z-30 mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Turn Effort Into
          {/* <br /> */}
          <span className="text-blue-900"> Results.</span>
        </motion.h1>
        <motion.h2 
          className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-3 sm:mb-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          Work Faster, Easier, More Efficient
        </motion.h2>
        <motion.p 
          className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 max-w-md sm:max-w-lg mx-auto leading-relaxed"
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
