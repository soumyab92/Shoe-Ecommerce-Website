import { HeroBanner } from "../components/HeroBanner";
import { Categories } from "../components/Categories";
import { About } from "../components/About";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { Reviews } from "../components/Reviews";
import { FAQ } from "../components/FAQ";

export function HomePage() {
  return (
    <>
      <HeroBanner />
      <Categories />
      <About />
      <FeaturedProducts />
      <Reviews />
      <FAQ />
    </>
  );
}