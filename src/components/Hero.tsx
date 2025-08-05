import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-32">
      <div className="max-w-6xl mx-auto px-2 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left max-w-4xl mx-auto md:mx-0">
          <h1 className="text-6xl md:text-8xl font-extralight font-[family-name:var(--font-inter)] text-[#f7f7f7] mb-8 tracking-tight leading-none">
            Eleve suas
            <br />
            <span className="font-light">finanças</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#f7f7f7] mb-12 font-light leading-relaxed max-w-2xl mx-auto md:mx-0">
            Uma nova forma de entender e controlar seu dinheiro. Simples,
            elegante e poderoso.
          </p>
          <Button variant="hero" href="/register">
            Começar{" "}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
          <Image
            src="/credit-card.png"
            alt="Credit Card Image"
            width={820}
            height={820}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
