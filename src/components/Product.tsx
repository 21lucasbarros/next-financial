"use client";

import { Pie, PieChart } from "recharts";

export default function Product() {
  const data = [
    { name: "Alimentação", value: 1240 },
    { name: "Transporte", value: 680 },
    { name: "Lazer", value: 420 },
    { name: "Streaming", value: 150 },
  ];
  return (
    <section className="p-30 text-center">
      <div>
        <h2 className="text-6xl md:text-6xl font-extralight font-[family-name:var(--font-inter)] text-[#f7f7f7] mb-8 tracking-tight leading-none">
          Controle total
        </h2>
        <p className="text-xl md:text-2xl text-[#f7f7f7] mb-12 font-light leading-relaxed">
          Visualize seus gastos, entenda seus padrões e tome decisões mais
          inteligentes.
        </p>
      </div>
      <div className="bg-white rounded-3xl p-8 md:p-12 max-w-5xl mx-auto border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-2xl font-light text-black mb-2">
                Visão geral
              </h3>
              <p className="text-gray-500 font-light">Seus gastos este mês</p>
            </div>
            <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
              <PieChart width={730} height={250}>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={110}
                  fill="#17313e"
                  label
                />
              </PieChart>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-2xl p-6 text-white">
              <div className="text-sm font-light opacity-80 mb-2">
                Saldo atual
              </div>
              <div className="text-3xl font-light">R$ 12.547</div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-4 border-b border-gray-100">
                <span className="text-gray-600 font-light">Alimentação</span>
                <span className="text-black font-light">R$ 1.240</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-100">
                <span className="text-gray-600 font-light">Transporte</span>
                <span className="text-black font-light">R$ 680</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-100">
                <span className="text-gray-600 font-light">Lazer</span>
                <span className="text-black font-light">R$ 420</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-100">
                <span className="text-gray-600 font-light">Streaming</span>
                <span className="text-black font-light">R$ 150</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
