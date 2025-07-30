import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

const bannerSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1543652711-77eeb35ae548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc1MzgxNDMxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "New Summer Collection",
    subtitle: "Discover the latest trends in footwear",
    buttonText: "Shop Now",
    buttonLink: "#products"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1577208288347-b24488f3efa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9lJTIwY29sbGVjdGlvbnxlbnwxfHx8fDE3NTM4MTQzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Premium Quality",
    subtitle: "Handcrafted shoes for every occasion",
    buttonText: "Explore",
    buttonLink: "#featured"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1509035163299-8601e853bce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib290cyUyMGZvb3R3ZWFyfGVufDF8fHx8MTc1MzgxNDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Up to 50% Off",
    subtitle: "Limited time sale on selected items",
    buttonText: "Shop Sale",
    buttonLink: "#sale"
  }
];

export function HeroBanner() {
  return (
    <section className="relative w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {bannerSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
                <ImageWithFallback
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white max-w-2xl px-4">
                    <h2 className="text-4xl md:text-6xl mb-4">{slide.title}</h2>
                    <p className="text-lg md:text-xl mb-8 text-white/90">{slide.subtitle}</p>
                    <Button 
                      size="lg" 
                      className="bg-white text-black hover:bg-white/90"
                      onClick={() => document.querySelector(slide.buttonLink)?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
}