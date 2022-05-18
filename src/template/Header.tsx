import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, BookOpenIcon } from "@heroicons/react/outline";
import { BookOpenIcon as Logo, ChevronDownIcon } from "@heroicons/react/solid";

const resources = [
  {
    name: "KJA",
    description: "King James Revista e Atualizada",
    href: "KJA",
  },
  {
    name: "NTLH",
    description: "Nova Tradução na Linguagem de Hoje",
    href: "NTLH",
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function Header() {
  return (
    <Popover className="relative bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center py-6 justify-between md:justify-start md:space-x-5">
          <div className="flex">
            <a href="#">
              <span className="sr-only">Bíblia</span>
              <Logo className="h-8 w-auto sm:h-10 text-violet-600"></Logo>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-zinc-800 rounded-md p-2 inline-flex items-center justify-center text-zinc-200 hover:text-zinc-100 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-4">
            <a
              href="version/AM"
              className="text-base font-medium text-zinc-300 hover:text-zinc-100 px-2 py-2"
            >
              A Mensagem
            </a>
            <a
              href="#"
              className="text-base font-medium text-zinc-300 hover:text-zinc-100 px-2 py-2"
            >
              NVI
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-zinc-200" : "text-zinc-300",
                      "group pl-2 pr-1 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-violet-500"
                    )}
                  >
                    <span>Mais Versões</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-zinc-100" : "text-zinc-200",
                        "h-5 w-5 group-hover:text-zinc-100"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-zinc-800 px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-zinc-900"
                            >
                              <BookOpenIcon
                                className="flex-shrink-0 h-6 w-6 text-violet-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-sm text-zinc-300">
                                  <span className="text-base font-medium text-zinc-300">
                                    {item.name}
                                  </span>
                                  {" - "}
                                  {item.description}
                                </p>
                                <p className="mt-1 "></p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-zinc-900 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-zinc-300 uppercase">
                              Novos Artigos
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className="text-base truncate text-zinc-400 hover:text-zinc-700"
                                >
                                  <a href={post.href} className="font-medium">
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a
                              href="#"
                              className="font-medium text-violet-600 hover:text-violet-500"
                            >
                              Veja todos os artigos{" "}
                              <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="#"
              className="font-medium text-violet-500 hover:text-violet-400 px-2 py-2"
            >
              Login
            </a>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-zinc-800 divide-y-2 divide-zinc-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex justify-between items-center">
                <div>
                  <Logo className="h-8 w-auto text-violet-600" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-zinc-800 rounded-md p-2 inline-flex items-center justify-center text-zinc-200 hover:text-zinc-100 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid gap-y-2 gap-x-8">
                <a
                  href="#"
                  className="px-2 py-2 inline-flex text-base font-medium text-zinc-300 hover:text-zinc-400"
                >
                  <BookOpenIcon className="h-6 w-6 mr-2" />A Mensagem
                </a>

                <a
                  href="#"
                  className="px-2 py-2 inline-flex text-base font-medium text-zinc-300 hover:text-zinc-400"
                >
                  <BookOpenIcon className="h-6 w-6 mr-2" />
                  NVI
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-2 py-2 inline-flex text-base font-medium text-zinc-300 hover:text-zinc-400"
                  >
                    <BookOpenIcon className="h-6 w-6 mr-2" />
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-violet-600 hover:bg-violet-700"
                >
                  Registre-se
                </a>
                <p className="mt-6 text-center text-base font-medium text-zinc-300">
                  Já é cadastrado?{" "}
                  <a href="#" className="text-violet-600 hover:text-violet-500">
                    Faça login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
