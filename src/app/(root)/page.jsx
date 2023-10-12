import { redirect } from "next/navigation";
import { connectToDB } from "@/lib/mongoose";
import { fetchMovies } from "@/lib/actions/movie";
import Link from "next/link";

export default async function Page() {


  const movies = await fetchMovies()



  return (
    <>
      <div className="mt-20 mb-10 text-2xl flex items-center justify-center font-bold h-[50px]">
        Recently Uploaded
      </div>
      <div className="h-auto w-full p-3 grid grid-flow-row sm:grid-cols-1 md:grid-cols-2 gap-5 px-5">
        {movies.map((movie) => {

          const year = movie.releaseDate.split('/')[2]

          return (
            <Link key={movie.id} href={`/movie/${movie.slug}`} className="h-auto overflow-hidden w-[230px]">
              <div>
                <img
                  src={movie.poster}
                  alt=""
                  className="h-80 rounded-md w-full duration-300 shadow-xl border-4 hover:border-blue-900 hover:cursor-pointer"
                />
                <div>
                  <p>{movie.title}</p>
                  <p className="text-gray-400 text-sm">{year}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export const revalidate = 0
