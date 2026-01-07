import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

const featuresData = [
  {
    id: 1,
    title: "Lightning Fast Performance",
    description:
      "Experience blazing fast load times and seamless interactions. Our optimized architecture ensures your users never wait.",
    media: {
      type: "icon",
      content: "⚡",
    },
  },
  {
    id: 2,
    title: "Intelligent Automation",
    description:
      "Automate repetitive tasks and workflows with AI-powered intelligence. Save hours of manual work every week.",
    media: {
      type: "icon",
      content: "🤖",
    },
  },
  {
    id: 3,
    title: "Real-time Collaboration",
    description:
      "Work together seamlessly with your team. See changes instantly and collaborate without friction.",
    media: {
      type: "icon",
      content: "👥",
    },
  },
  {
    id: 4,
    title: "Advanced Analytics",
    description:
      "Gain deep insights into your data with powerful analytics tools. Make data-driven decisions with confidence.",
    media: {
      type: "icon",
      content: "📊",
    },
  },
  {
    id: 5,
    title: "Enterprise Security",
    description:
      "Bank-level encryption and security measures protect your data. Compliant with industry standards and regulations.",
    media: {
      type: "icon",
      content: "🔒",
    },
  },
];

export default function ScrollingFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const itemTop = rect.top;
        const itemBottom = rect.bottom;

        // Check if item is in the center of viewport
        if (itemTop < windowHeight / 2 && itemBottom > windowHeight / 2) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      <div className="flex max-w-5xl mx-auto">
        {/* Scrolling Content Column - Takes more width */}
        <div className="w-[60%] pr-12">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`min-h-screen flex flex-col justify-center py-20 transition-opacity duration-300 ${
                activeIndex === index ? "opacity-100" : "opacity-30"
              }`}
            >
              <div className="max-w-2xl">
                <h2 className="text-5xl font-semibold mb-6 leading-tight">
                  {feature.title}
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Static Media Column - Takes less width */}
        <div className="w-[40%] relative">
          <div className="sticky top-0 h-screen flex items-center justify-center py-20">
            <Card className="w-full h-full border-0 border-l-2 border-black rounded-none shadow-none flex items-center justify-center relative overflow-hidden bg-transparent">
              {featuresData.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {feature.media.type === "icon" && (
                    <div className="text-9xl transform transition-transform duration-500 hover:scale-110">
                      {feature.media.content}
                    </div>
                  )}
                  {feature.media.type === "image" && (
                    <img
                      src={feature.media.content}
                      alt={feature.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                  {feature.media.type === "video" && (
                    <video
                      src={feature.media.content}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="max-w-full max-h-full object-contain"
                    />
                  )}
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
