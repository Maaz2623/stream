// import { currentUser } from "@clerk/nextjs";
// import { redirect } from "next/navigation";
// import Movies from "@/components/shared/Movies";
// import { connectToDB } from "@/lib/mongoose";
// import { fetchMovies } from "@/lib/actions/movie.actions";
// import Link from "next/link";

// export default async function Page() {
//   const user = await currentUser();

//   if (!user) redirect("/sign-in");

//   fetchMovies();

//   const movies = [
//     { slug: "jumnaji-2019", title: "Jumanji" },
//     { slug: "avengers-2019", title: "Avengers" },
//   ];

//   return (
//     <>
//       <div className="mt-3 text-2xl flex items-center justify-center font-bold h-[50px]">
//         Recently Uploaded
//       </div>
//       <div className="h-auto w-full p-3 grid grid-flow-row sm:grid-cols-2  md:grid-cols-5 gap-5">
//         {movies.map((movie) => {
//           return (
//             <div className="h-auto overflow-hidden w-[230px]" key={movie.slug}>
//                 <Link href={`/${movie.slug}`}>
//                   <img
//                     src="/jumanji.jpg"
//                     alt=""
//                     className="h-80 rounded-md w-full hover:opacity-50 duration-300 hover:cursor-pointer"
//                   />
//                 </Link>
//                 <div className="">
//                   <p>{movie.title}</p>
//                   <p className="text-gray-400 text-sm">2023</p>
//                 </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Movies from "@/components/shared/Movies";
import { connectToDB } from "@/lib/mongoose";
import { fetchMovies } from "@/lib/actions/movie";
import Link from "next/link";

export default async function Page() {
  const user = await currentUser();

  if (!user) redirect("/sign-in");


  const movies = await fetchMovies()


  return (
    <>
      <div className="mt-20 mb-10 text-2xl flex items-center justify-center font-bold h-[50px]">
        Recently Uploaded
      </div>
      <div className="h-auto w-full p-3 grid grid-flow-row sm:grid-cols-2  md:grid-cols-5 gap-5 px-5">
        {movies.map((movie) => {
          return (
            <Link key={movie.id} href={`/movie/${movie.slug}`} className="h-auto overflow-hidden w-[230px]">
              <div>
                <img
                  src={movie.poster}
                  alt=""
                  className="h-80 rounded-md w-full hover:opacity-50 duration-300 shadow-xl border-4 hover:border-blue-900 hover:cursor-pointer"
                />
                <div>
                  <p>{movie.title}</p>
                  <p className="text-gray-400 text-sm">2023</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
