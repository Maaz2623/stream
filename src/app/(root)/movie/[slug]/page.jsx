import { getMovie } from "@/lib/actions/movie";
import { useParams } from "next/navigation";

export default async function Page({ params }) {
  const movie = await getMovie(params.slug);

  return (
    <div className="h-auto w-full mt-20 ">
      <div className="flex px-5 justify-center items-center">
        <h1 className="text-3xl font-semibold">{movie.title}</h1>
      </div>
      <div className="h-[100vh] p-2 flex justify-center items-center">
        <iframe
          className="h-[90%] w-[80%] rounded-md shadow-xl"
          src={movie.embedUrl}
          title="Abhishek Upmanyu - Jealous of Sabziwala (FULL SPECIAL)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-10 bg-slate-900">
        <p className="text-xl mb-2">Title : {movie.title}</p>
        <p className="text-xl mb-2">Rating : {movie.rating}</p>
        <p className="text-xl mb-2">Release Date : {movie.releaseDate}</p>
        <p className="text-xl mb-2">Quality : {movie.quality}</p>
      </div>
    </div>
  );
}
