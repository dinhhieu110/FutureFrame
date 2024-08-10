import React from "react";
import { Movie } from "@/interfaces";
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
    <div className="z-50">
      <h2>{title}</h2>
    </div>
  );
};

export default MoviesCarousel;
