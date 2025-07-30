import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const categories = [
  {
    id: 1,
    name: "Sneakers",
    image: "https://images.unsplash.com/photo-1597350584914-55bb62285896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHNuZWFrZXJzfGVufDF8fHx8MTc1MzgxNDM2MXww&ixlib=rb-4.1.0&q=80&w=1080",
    count: "450+ styles"
  },
  {
    id: 2,
    name: "Dress Shoes",
    image: "https://images.unsplash.com/photo-1618947085672-1dcb69696c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHNob2VzfGVufDF8fHx8MTc1MzgxNDM2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    count: "120+ styles"
  },
  {
    id: 3,
    name: "Boots",
    image: "https://images.unsplash.com/photo-1509035163299-8601e853bce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib290cyUyMGZvb3R3ZWFyfGVufDF8fHx8MTc1MzgxNDMzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    count: "200+ styles"
  },
  {
    id: 4,
    name: "Athletic",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBzbmVha2Vyc3xlbnwxfHx8fDE3NTM4MTQzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    count: "300+ styles"
  }
];

export function Categories() {
  return (
    <section id="categories" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find the perfect pair for any occasion
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="group hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h3 className="text-lg md:text-xl font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-white/90">{category.count}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}