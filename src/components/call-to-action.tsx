import { Button } from "@/components/ui/button";
import { Mail, SendHorizonal } from "lucide-react";
import { Input } from "./ui/input";

export default function CallToAction() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Let’s get your work moving .
          </h2>
          <p className="mt-4">
            Everything you need to organize, collaborate, and deliver on time.
          </p>

          <form action="" className="mx-auto flex items-center justify-center  mt-10 max-w-sm lg:mt-12">
            <div className="flex flex-col sm:flex-row border-2 rounded-lg border-black justify-center items-center  mx-auto p-0 min-w-lg">
              <Input
                type="email"
                placeholder="Enter your email"
                className=" sm:flex-1 px-6 py-6 text-lg border-0 rounded-r-none focus-visible:ring-0"
                onFocus={(e) => e.preventDefault()}
              />
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-6 bg-black text-white font-semibold text-lg rounded-l-lg rounded-r-lg sm:rounded-l-none hover:bg-gray-800"
              >
                Get Early Access
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
