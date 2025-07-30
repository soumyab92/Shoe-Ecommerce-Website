import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Categories } from "./components/Categories";
import { About } from "./components/About";
import { Reviews } from "./components/Reviews";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import "./styles/globals.css";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <Categories />
        <About />
        <FeaturedProducts />
        <FAQ />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}