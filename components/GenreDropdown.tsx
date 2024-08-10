"use client";

import React, { useState } from "react";
import { Genres } from "../lib/interfaces";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { listGenres as listTypes } from "@/app/constants";
const GenreDropdown = () => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const [listGenres, setListGenres] = useState<Genres>(listTypes);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex justify-center items-center">
        Genres <ChevronDown className="ml-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        {listGenres?.genres?.map((genre) => (
          <DropdownMenuItem key={genre.id} className="text-white">
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropdown;
