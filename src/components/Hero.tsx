import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="w-full min-h-[90vh] relative flex pt-40 justify-center bg-white rounded-t-3xl">
      {/* Hexagonal SVG Illustrations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-5 left-5 md:top-4 md:left-32 w-48 h-48 md:w-64 md:h-64 opacity-100 hidden md:hidden lg:block">
          <img
            src="/assets/automation.svg"
            alt="Automation"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Top Right */}
        <div className="absolute top-5 right-5 md:top-10 md:right-15 w-48 h-48 md:w-64 md:h-64 opacity-100 hidden md:hidden lg:block">
          <img
            src="/assets/graph.svg"
            alt="Graph"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Middle Left */}
        <div className="absolute top-1/2 left-0 md:left-5 transform -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 opacity-100 hidden md:block">
          <img
            src="/assets/folder.svg"
            alt="Folder"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Middle Right */}
        <div className="absolute top-1/2 right-0 md:right-5 transform -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 opacity-100 hidden md:block">
          <img
            src="/assets/storage.svg"
            alt="Storage"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-10 left-10 md:bottom-5 md:left-44 w-48 h-48 md:w-64 md:h-64 opacity-100">
          <img
            src="/assets/time.svg"
            alt="Time"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-10 right-10 md:bottom-10 md:right-44 w-48 h-48 md:w-64 md:h-64 opacity-100">
          <img
            src="/assets/Task List.svg"
            alt="Task List"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="text-center max-w-5xl px-6 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900  leading-tight">
          Turn Effort Into
          {/* <br /> */}
          <span className="text-blue-900"> Results.</span>
        </h1>
        <h2 className="text-lg md:text-xl font-semibold text-gray-700 mb-6 leading-relaxed">
          Work Faster, Easier, More Efficient
        </h2>
        <p className=" text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed ">
          Complete projects in record time. Automate tasks, collaborate
          seamlessly, deliver results faster.
        </p>
        <div className="flex flex-col sm:flex-row border-2 rounded-lg border-black justify-center items-center max-w-lg mx-auto p-0">
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
        </div>
      </div>
    </div>
  );
}
