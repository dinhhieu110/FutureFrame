import MovieCard from "@/components/MovieCard";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};
const SearchPage = async ({ params: { term } }: Props) => {
  if (!term) notFound();
  const termToUse = decodeURI(term);
  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();

  //   API call to get the searched movies
  //   API call to get the popular movies

  return (
    <div>
      <h1 className="mt-32 ml-12 font-bold text-3xl">
        Results for <span className="text-red-600">{termToUse}</span>
      </h1>
      <div className="py-6 ml-12 flex flex-wrap space-x-4 ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
