import { getImagePath } from "@/lib/getImagePath";
import { Movie } from "@/lib/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="relative mb-8">
      <div className="h-86 w-60">
        <Image
          className="w-full h-full object-cover object-center aspect-poster shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
          src={getImagePath(movie.backdrop_path || movie.poster_path)}
          alt={movie.title}
          width={260}
          height={385}
          quality={100}
        />
        <div className="text-center">
          <Link
            className="block font-bold truncate overflow-hidden text-ellipsis whitespace-nowrap"
            href={""}
          >
            {movie.title}
          </Link>
          <p>
            110 Minutes | <span className="text-red-600">C13</span>
          </p>
          <p>Publish Date {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
