import { Button } from "@/components/ui/button";
import MoviesCarousel from "@/components/ui/MoviesCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* CarouselBannerWrapper */}
      <div className="flex flex-col space-y-2">
        <MoviesCarousel movies={[]} title="Upcoming" />
        {/* <MoviesCarousel movies={} title="" /> */}
        {/* <MoviesCarousel movies={} title="" /> */}
      </div>
    </main>
  );
}
