import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <Image
                src="/next-logo-white.svg"
                alt="Logo Next"
                width={35}
                height={35}
                draggable={false}
              />
            </div>
            <span className="text-xl font-light text-[#f7f7f7] tracking-tight">
              Next Financial
            </span>
          </div>
          <p className="text-[#f7f7f7] font-light text-sm">
            © 2025 Next Financial. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
