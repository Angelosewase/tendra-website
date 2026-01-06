import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import Product from "@/components/product";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main>
      <Hero />
      <Product />
    </main>
  );
}
