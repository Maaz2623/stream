import { redirect } from "next/navigation";
import { connectToDB } from "@/lib/mongoose";
import { fetchMovies } from "@/lib/actions/movie";
import Link from "next/link";

export default async function Page() {
  
  const movies = await fetchMovies();

  return (
    <>
      <div className="mt-20 mb-10 text-2xl flex items-center justify-center font-bold h-[50px]">
        The website is under maintanance. A new version is being upload. Estimated time is 5 hours. Thank you for your patience.
      </div>
    </>
  );
}

export const revalidate = 0;
