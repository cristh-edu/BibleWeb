import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../lib/api";
import { Header } from "../template/Header";
import { Version } from "../utils/Bible";
import { ListBook } from "../utils/ListBook";
import { NotFound } from "./NotFound";

export function Bible() {
  const { id } = useParams();
  const [version, setVersion] = React.useState<Version | null>(null);

  React.useEffect(() => {
    async function getVersion() {
      const response = await api.get(`/${id}`);
      setVersion(response.data);
    }
    getVersion();
  }, []);
  if (!version) return <NotFound></NotFound>;
  return (
    <>
      <Header />
      <section className="bg-white dark:bg-zinc-900">
        <div className="container px-6 py-1 mx-auto">
          <div className="mt-8 xl:mt-6 lg:flex lg:-mx-12">
            <div className="lg:mx-12 lg:mt-12 lg:pt-12">
              <h1 className="text-xl lg:mt-12 pt-1 font-semibold text-gray-800 dark:text-white">
                Livros
              </h1>

              <div className="mt-2 space-y-4 lg:mt-4">
                {Object.entries(ListBook).map(([key, name]) => (
                  <a
                    href={"#" + key}
                    className="block text-zinc-800 dark:text-zinc-300 hover:text-zinc-400"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
              <h1 className="text-2xl font-bold text-center text-gray-800 lg:text-5xl dark:text-white">
                {version.name}
              </h1>

              <h3 className="mt-2 mb-6 text-2xl font-normal text-center text-gray-800 lg:text-2xl dark:text-white">
                {version.description}
              </h3>
              {version.books.map((book) => (
                <div id={book.name}>
                  <h1 className="mx-4  text-3xl text-center text-gray-700 dark:text-violet-500">
                    {Object.entries(ListBook).map(([bookName, bookIndex]) => {
                      if (book.name === bookName) {
                        return bookIndex;
                      }
                    })}
                  </h1>
                  {book.chapter.map((chapter) => (
                    <div className="flex flex-col space-y-4">
                      <p className="max-w-4xl px-4 text-gray-500 dark:text-gray-300">
                        <span className="text-2xl font-semibold">
                          Capítulo {chapter.number}
                        </span>
                      </p>

                      {chapter.verses.map((verse) => (
                        <p className="max-w-6xl px-4 space-y-1 text-justify text-gray-500 dark:text-gray-300">
                          <span className="font-semibold">
                            {verse.verse}
                            {verse.verseEnd ? `-${verse.verseEnd}` : ""}
                          </span>{" "}
                          {verse.text}
                          <br />
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              ))}

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              <div>
                <button className="flex items-center focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-violet-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>

                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    Comment Close
                  </h1>
                </button>
              </div>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              <div>
                <button className="flex items-center focus:outline-none">
                  <svg
                    className="w-6 h-6 text-violet-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 12H4"
                    ></path>
                  </svg>

                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    Comment Open
                  </h1>
                </button>

                <div className="flex mt-8 md:mx-10">
                  <span className="border border-violet-500"></span>

                  <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, eum quae. Harum officiis reprehenderit ex quia
                    ducimus minima id provident molestias optio nam vel, quidem
                    iure voluptatem, repellat et ipsa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
