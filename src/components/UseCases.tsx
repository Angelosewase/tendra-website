import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import teroSalesFeatures from "@/data/tendra_sales_features.json";
import Lottie from "lottie-react";
import documentScannerAnimation from "../../public/assets/document scanner.json";
import fileAnimation from "../../public/assets/file.json";
import peopleAnimation from "../../public/assets/people.json";
import growthAnimation from "../../public/assets/growth.json";

// Keywords to highlight in titles
const KEYWORDS_TO_HIGHLIGHT = [
  "AI", "Procurement", "Financial", "Control", "Performance", "Analytics", 
  "Work", "Management", "Tenders", "Teams", "Subcontractors", "Documents", "Finances"
];

// Function to highlight keywords in text
const highlightKeywords = (text: string) => {
  let highlightedText = text;
  
  KEYWORDS_TO_HIGHLIGHT.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
    highlightedText = highlightedText.replace(
      regex, 
      `<span class="text-blue-800 font-semibold">${keyword}</span>`
    );
  });
  
  return highlightedText;
};

// Map the JSON data to include media objects for the existing UI structure
const featuresData = teroSalesFeatures.products.map((product, index) => ({
  id: product.id,
  title: product.title,
  subtitle: product.subtitle,
  description: product.description,
  media: {
    type: "lottie",
    content:
      [
        documentScannerAnimation,
        fileAnimation,
        growthAnimation,
        peopleAnimation,
      ][index] || documentScannerAnimation,
  },
}));

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
    <div ref={sectionRef} id="use-cases" className="relative">
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
                <h2 
                  className="text-3xl font-semibold mb-4 leading-tight"
                  dangerouslySetInnerHTML={{ __html: highlightKeywords(feature.title) }}
                />
                <p className="text-xl text-gray-700 mb-6 leading-relaxed font-medium">
                  {feature.subtitle}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Static Media Column - Takes less width */}
        <div className="w-[40%] relative">
          <div className="sticky top-0 h-screen flex items-center justify-center py-20">
            <Card className="w-full h-full border-0 rounded-none shadow-none flex items-center justify-center relative overflow-hidden bg-transparent">
              {featuresData.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                    activeIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* {feature.media.type === "icon" && (
                    <div className="text-9xl transform transition-transform duration-500 hover:scale-110">
                      {feature.media.content}
                    </div>
                  )} */}
                  {feature.media.type === "lottie" && (
                    <div className="w-full h-full flex items-center justify-center">
                      <Lottie
                        animationData={feature.media.content}
                        className="w-full h-full max-w-sm max-h-sm"
                        loop={true}
                        autoplay={true}
                      />
                    </div>
                  )}
                  {/* {feature.media.type === "image" && (
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
                  )} */}
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
