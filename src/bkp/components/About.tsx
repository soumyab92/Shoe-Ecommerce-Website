import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660796334912-8ce8e9c2cff0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9lJTIwY3JhZnRzbWFuJTIwd29ya3Nob3B8ZW58MXx8fHwxNzUzODE0NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Shoe craftsmanship and quality"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4">
                Crafted with Passion, Designed for Life
              </h2>
              <h3 className="text-lg md:text-xl text-muted-foreground mb-6">
                Where tradition meets innovation in every step
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                At Soumya, we believe that every step tells a story. Since our founding, 
                we've been dedicated to creating footwear that doesn't just look good, 
                but feels exceptional and lasts for years to come.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Our master craftsmen combine time-honored techniques with modern 
                innovation to create shoes that are both stylish and sustainable. 
                From premium leather selection to meticulous hand-finishing, 
                every pair reflects our commitment to quality.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                We source the finest materials from around the world and work 
                with skilled artisans who take pride in their craft. Each shoe 
                is a testament to our dedication to excellence and our passion 
                for creating footwear that enhances your journey.
              </p>
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="px-8"
                onClick={() => document.querySelector('#featured')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}