import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Heart } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1597350584914-55bb62285896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzfGVufDF8fHx8MTc1MzgxNDM2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 124,
    isOnSale: true
  },
  {
    id: 2,
    name: "Premium Black Dress Shoes",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1618947085672-1dcb69696c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHNob2VzfGVufDF8fHx8MTc1MzgxNDM2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 87,
    isOnSale: false
  },
  {
    id: 3,
    name: "Bold Red Sports Sneakers",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBzbmVha2Vyc3xlbnwxfHx8fDE3NTM4MTQzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 156,
    isOnSale: true
  },
  {
    id: 4,
    name: "Comfortable Running Shoes",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1543652711-77eeb35ae548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzbmVha2VycyUyMHNob2VzfGVufDF8fHx8MTc1MzgxNDMxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 203,
    isOnSale: false
  }
];

export function FeaturedProducts() {
  return (
    <section id="featured" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular shoes, carefully selected for style, comfort, and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isOnSale && (
                    <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 rounded text-sm">
                      Sale
                    </span>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-4">
                  <h3 className="mb-2 line-clamp-2">{product.name}</h3>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button size="sm" variant="outline">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}