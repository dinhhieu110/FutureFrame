import React from "react";
import { Movie } from "@/lib/interfaces";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";
interface MoviesCarouselProps {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
}
const MoviesCarousel: React.FC<MoviesCarouselProps> = ({
  title,
  movies,
  isVertical,
}) => {
  return (
    <div className="z-30">
      <h2 className="font-bold text-xl ml-10">{title}</h2>
      <div
        className={cn(
          "flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide max-w-[1050px]"
        )}
      >
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesCarousel;
