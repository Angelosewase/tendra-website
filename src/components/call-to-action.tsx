import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CallToAction() {
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
      toast.success("Successfully joined ! talk soon");
      setEmail("");
    } catch (error) {
      if (error instanceof Error && error.message.includes("already registered")) {
        toast.error("This email is already on the waitlist");
      } else {
        toast.error("Failed to join waitlist. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="cta" className="py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Let's get your work moving.
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Everything you need to organize, collaborate, and deliver on time.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 sm:mt-10 md:mt-12 max-w-md lg:max-w-lg">
            <div className="flex flex-col sm:flex-row border-2 rounded-lg border-black overflow-hidden">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 md:py-6 text-base sm:text-lg border-0 rounded-t-lg sm:rounded-t-none sm:rounded-l-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 md:py-6 bg-black text-white font-semibold text-base sm:text-lg rounded-b-lg sm:rounded-b-none sm:rounded-r-lg hover:bg-gray-800 disabled:opacity-50 transition-colors"
              >
                {isLoading ? "Joining..." : "Get Early Access"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
