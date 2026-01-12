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
    <section id="cta" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Let’s get your work moving .
          </h2>
          <p className="mt-4">
            Everything you need to organize, collaborate, and deliver on time.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto flex items-center justify-center  mt-10 max-w-sm lg:mt-12">
            <div className="flex flex-col sm:flex-row border-2 rounded-lg border-black justify-center items-center  mx-auto p-0 min-w-lg">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" sm:flex-1 px-6 py-6 text-lg border-0 rounded-r-none focus-visible:ring-0"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full sm:w-auto px-8 py-6 bg-black text-white font-semibold text-lg rounded-l-lg rounded-r-lg sm:rounded-l-none hover:bg-gray-800 disabled:opacity-50"
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
