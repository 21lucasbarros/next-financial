import { TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl md:text-6xl font-extralight font-[family-name:var(--font-inter)] text-[#010101] mb-8 tracking-tight leading-none">
              Simplicidade
              <br />
              que funciona
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed mb-8">
              Acreditamos que o controle financeiro não precisa ser complicado.
              Por isso, criamos uma experiência limpa, intuitiva e poderosa.
            </p>
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              Cada detalhe foi pensado para tornar sua jornada financeira mais
              clara e eficiente.
            </p>
          </div>
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-light">Agosto 2025</span>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-black rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-light">Gastos</span>
                    <span className="text-black font-light">
                      75% do orçamento
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
