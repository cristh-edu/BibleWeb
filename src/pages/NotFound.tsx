export function NotFound() {
  return (
    <div
      className="
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-violet-900
    to-violet-500
  "
    >
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-violet-600 text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-600">Oops!</span> Pagina não encontrada
          </h6>

          <p className="mb-8 text-center text-zinc-500 md:text-lg">
            A página que você está procurando não existe.
          </p>

          <a
            href="/"
            className="px-6 py-2 text-sm font-semibold text-violet-800 bg-violet-100"
          >
            Voltar para o início
          </a>
        </div>
      </div>
    </div>
  );
}
