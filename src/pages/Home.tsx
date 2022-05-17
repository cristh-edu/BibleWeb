import bg from "../assets/img/bg.jpg";
import { Header } from "../template/Header";

export function Home() {
  return (
    <>
      <div className="relative bg-zinc-800 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-zinc-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-zinc-800 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Header />

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-zinc-300 sm:text-5xl md:text-6xl">
                  <span className="inline">A</span>{" "}
                  <span className="text-violet-600 inline">Verdade</span>{" "}
                  <span className="inline">na tela de qualquer aparelho.</span>
                </h1>
                <p className="mt-3 text-base text-zinc-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Ler as Escrituras não é uma atividade distinta de viver o
                  evangelho; na verdade, é parte integral dessa vivência. É
                  permitir que outro tenha algo a dizer a respeito de tudo que
                  falamos e fazemos. Simples assim. Difícil assim.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 md:py-4 md:text-lg md:px-10"
                    >
                      Escolha uma versão
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-violet-700 bg-violet-100 hover:bg-violet-200 md:py-4 md:text-lg md:px-10"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={bg}
            alt=""
          />
          <a>Pessoas na igreja foto criado por jcomp - br.freepik.com</a>
        </div>
      </div>
    </>
  );
}
