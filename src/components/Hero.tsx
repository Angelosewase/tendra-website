import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="w-full min-h-[90vh] border  flex pt-20 justify-center">
      <div className="text-center max-w-5xl px-6">
        <h1 className="text-4xl md:text-7xl font-bold text-gray-900  leading-tight">
          Turn Effort Into
          {/* <br /> */} 
          <span className="text-blue-600">  Results.</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 leading-relaxed">
          Work Faster, Easier, More Efficient
        </h2>
        <p className="text- md:text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Complete projects in record time. Automate tasks, collaborate seamlessly, deliver results faster.
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
