import { getDiscovererMovies } from "@/lib/getMovies";
import React from "react";
import CarouselBanner from "./CarouselBanner";

interface CarouselBannerWrapperProps {
  id?: string;
  keywords?: string;
}

const CarouselBannerWrapper = async ({
  id,
  keywords,
}: CarouselBannerWrapperProps) => {
  const movies = await getDiscovererMovies(id, keywords);
  return <CarouselBanner movies={movies} />;
};

export default CarouselBannerWrapper;
