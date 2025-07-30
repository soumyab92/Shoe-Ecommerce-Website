import { Users, Award, Globe, Heart } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function AboutPage() {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Quality First",
      description: "We use only the finest materials and time-tested craftsmanship techniques to create shoes that last for generations."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Customer Focused",
      description: "Every decision we make is guided by our commitment to providing exceptional service and value to our customers."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Sustainable",
      description: "We're committed to responsible manufacturing practices and supporting local communities around the world."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Passionate",
      description: "Our love for footwear drives us to constantly innovate and perfect our craft, one shoe at a time."
    }
  ];

  const timeline = [
    {
      year: "1985",
      title: "The Beginning",
      description: "Founded by master craftsman Rajesh Soumya in a small workshop with a vision to create the perfect shoe."
    },
    {
      year: "1995",
      title: "First Expansion",
      description: "Opened our first retail store and began serving customers beyond our local community."
    },
    {
      year: "2005",
      title: "Going Digital",
      description: "Launched our online presence, bringing Soumya craftsmanship to customers worldwide."
    },
    {
      year: "2015",
      title: "Sustainable Focus",
      description: "Committed to 100% sustainable materials and ethical manufacturing practices."
    },
    {
      year: "2025",
      title: "Today",
      description: "Serving over 100,000 satisfied customers globally while maintaining our commitment to quality and craftsmanship."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl mb-6">
                Crafting Excellence Since 1985
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Soumya, we believe that great shoes are more than just footwear – they're a statement of quality, 
                craftsmanship, and personal style. For nearly four decades, we've been dedicated to creating shoes 
                that not only look exceptional but feel incredible with every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop">
                  <Button size="lg">Shop Our Collection</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">Get in Touch</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1649960861740-c8c8c8022b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwd29ya3Nob3AlMjBhcnRpc2FufGVufDF8fHx8MTc1Mzg5MjcyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Soumya leather workshop"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Our Story</h2>
              <p className="text-muted-foreground text-lg">
                A journey of passion, dedication, and unwavering commitment to excellence
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                The Soumya story began in 1985 when master craftsman Rajesh Soumya opened a small workshop 
                with nothing but a vision: to create the perfect shoe. Armed with traditional techniques 
                passed down through generations and an unwavering commitment to quality, he began crafting 
                shoes that would stand the test of time.
              </p>
              <p>
                What started as a local business serving the immediate community has grown into a globally 
                recognized brand, yet we've never forgotten our roots. Today, every pair of Soumya shoes 
                is still crafted with the same attention to detail and passion for excellence that Rajesh 
                instilled from day one.
              </p>
              <p>
                Our workshop may have evolved, our techniques may have modernized, but our core values 
                remain unchanged: quality materials, exceptional craftsmanship, and shoes that make 
                every step a comfortable one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These core principles guide everything we do, from design to delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">
              Milestones that shaped the Soumya story
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      <span className="text-sm">{item.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl mb-2">40+</div>
              <div className="text-primary-foreground/80">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl mb-2">100K+</div>
              <div className="text-primary-foreground/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl mb-2">50+</div>
              <div className="text-primary-foreground/80">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl mb-2">500+</div>
              <div className="text-primary-foreground/80">Unique Designs</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-4">
              Ready to Experience Soumya Quality?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of satisfied customers who have made Soumya their trusted choice for premium footwear.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <Button size="lg">Shop Now</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}