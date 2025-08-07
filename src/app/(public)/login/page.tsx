import { Lock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen">
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="w-full max-w-md space-y-8 bg-zinc-900 p-8 rounded-lg">
          <div className="text-center space-y-4">
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-5">
              <Image
                src="/next-logo-white.svg"
                alt="Logo Next"
                width={35}
                height={35}
                draggable={false}
              />
              <h1 className="font-[family-name:var(--font-inter)] text-xl sm:text-2xl font-bold text-white">
                Next Financial
              </h1>
            </div>
            <p className="text-[#f7f7f7] italic text-base sm:text-lg font-extralight">
              Conecte-se com confiança. Gerencie seu futuro financeiro com
              estilo.
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-lg font-medium text-[#f7f7f7]"
              >
                E-mail:
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  placeholder="seu@email.com"
                  className="pl-10 py-2 border-gray-200 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-lg font-medium text-[#f7f7f7]"
              >
                Senha:
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 py-2 border-gray-200 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
            </div>
          </form>
        </div>

        <p className="mt-8 text-center text-m text-[#f7f7f7]">
          Não possui uma conta?{" "}
          <Link
            href="/register"
            className="font-semibold text-indigo-500 hover:text-indigo-400 hover:underline transition-colors"
          >
            Cadastre-se gratuitamente
          </Link>
        </p>
      </div>
    </main>
  );
}
