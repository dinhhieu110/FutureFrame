import MovieCard from "@/components/MovieCard";
import { getDiscovererMovies } from "@/lib/getMovies";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenrePage = async ({
  params: { id },
  searchParams: { genre },
}: Props) => {
  const movies = await getDiscovererMovies(id);
  return (
    <div>
      <h1 className="mt-32 ml-12 font-bold text-3xl">
        Results for <span className="text-red-600">{genre}</span>
      </h1>
      <div className="py-6 ml-12 flex flex-wrap space-x-4 ">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
