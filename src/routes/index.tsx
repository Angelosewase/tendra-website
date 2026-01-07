import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import Product from "@/components/product";
import UseCases from "@/components/UseCases";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main>
      <Hero />
      <Product />
      <UseCases />
    </main>
  );
}
