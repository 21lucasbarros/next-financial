import { Calendar, PieChart, Shield } from "lucide-react";

export default function Features() {
  return (
    <section id="produto" className="py-32 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-6xl font-extralight font-[family-name:var(--font-inter)] text-[#010101] mb-8 tracking-tight leading-none">
            Recursos essenciais
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <PieChart className="w-8 h-8 text-[#010101]" />
            </div>
            <h3 className="text-xl font-light text-[#010101] mb-4">
              Análise visual
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Gráficos intuitivos que mostram exatamente onde seu dinheiro está
              sendo gasto.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-[#010101]" />
            </div>
            <h3 className="text-xl font-light text-[#010101] mb-4">
              Histórico completo
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Acompanhe a evolução dos seus gastos mês a mês com clareza total.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[#010101]" />
            </div>
            <h3 className="text-xl font-light text-[#010101] mb-4">
              Segurança total
            </h3>
            <p className="text-gray-500 font-light leading-relaxed">
              Seus dados protegidos com a mais alta tecnologia de segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
