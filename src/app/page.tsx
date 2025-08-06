import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Product from "@/components/Product";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Product />
      <Features />
    </main>
  );
}
