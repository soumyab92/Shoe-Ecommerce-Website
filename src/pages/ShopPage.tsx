import { useState } from "react";
import { Search, Filter, Grid3X3, List, Star, Heart, ShoppingCart, X } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Slider } from "../components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useCart } from "../contexts/CartContext";

const products = [
  {
    id: 1,
    name: "Classic Oxford Dress Shoes",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1576792741377-eb0f4f6d1a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwZHJlc3MlMjBzaG9lcyUyMG1lbnxlbnwxfHx8fDE3NTM4OTI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "dress",
    brand: "Soumya",
    rating: 4.8,
    reviews: 124,
    colors: ["Black", "Brown", "Tan"],
    sizes: ["8", "9", "10", "11", "12"],
    isNew: false,
    isSale: true
  },
  {
    id: 2,
    name: "Elegant High Heel Pumps",
    price: 189,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1621996659490-3275b4d0d951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhpZ2glMjBoZWVscyUyMHNob2VzfGVufDF8fHx8MTc1Mzg5MjYxMHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "heels",
    brand: "Soumya",
    rating: 4.6,
    reviews: 89,
    colors: ["Black", "Red", "Nude"],
    sizes: ["6", "7", "8", "9", "10"],
    isNew: true,
    isSale: false
  },
  {
    id: 3,
    name: "Performance Running Sneakers",
    price: 149,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1621519765361-59e3295d0f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc25lYWtlcnMlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NTM4OTI2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "sneakers",
    brand: "Soumya",
    rating: 4.9,
    reviews: 256,
    colors: ["White", "Black", "Gray"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    isNew: false,
    isSale: false
  },
  {
    id: 4,
    name: "Casual Leather Loafers",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1571892808095-63e6b3e8a46a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwbG9hZmVyc3xlbnwxfHx8fDE3NTM4OTI2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "loafers",
    brand: "Soumya",
    rating: 4.5,
    reviews: 67,
    colors: ["Brown", "Black"],
    sizes: ["8", "9", "10", "11"],
    isNew: false,
    isSale: true
  },
  {
    id: 5,
    name: "Women's Ankle Boots",
    price: 229,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1535396931702-8d43bf3dd825?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGFua2xlJTIwYm9vdHN8ZW58MXx8fHwxNzUzODkyNjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "boots",
    brand: "Soumya",
    rating: 4.7,
    reviews: 143,
    colors: ["Black", "Brown", "Tan"],
    sizes: ["6", "7", "8", "9", "10"],
    isNew: true,
    isSale: false
  },
  {
    id: 6,
    name: "Canvas Casual Sneakers",
    price: 89,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW52YXMlMjBzbmVha2Vyc3xlbnwxfHx8fDE3NTM4OTI2NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "sneakers",
    brand: "Soumya",
    rating: 4.3,
    reviews: 198,
    colors: ["White", "Navy", "Gray"],
    sizes: ["7", "8", "9", "10", "11"],
    isNew: false,
    isSale: false
  },
  {
    id: 7,
    name: "Classic Ballet Flats",
    price: 129,
    originalPrice: 159,
    image: "https://images.unsplash.com/photo-1493733466775-6e9694832a9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJhbGxldCUyMGZsYXRzJTIwc2hvZXN8ZW58MXx8fHwxNzUzODkzMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "flats",
    brand: "Soumya",
    rating: 4.4,
    reviews: 312,
    colors: ["Black", "Nude", "Brown"],
    sizes: ["6", "7", "8", "9", "10"],
    isNew: false,
    isSale: true
  },
  {
    id: 8,
    name: "Hiking Boots Men's",
    price: 249,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1521144249776-5b519143d1e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBoaWtpbmclMjBib290cyUyMGxlYXRoZXJ8ZW58MXx8fHwxNzUzODkzMTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "boots",
    brand: "Soumya",
    rating: 4.8,
    reviews: 189,
    colors: ["Brown", "Black", "Tan"],
    sizes: ["8", "9", "10", "11", "12", "13"],
    isNew: true,
    isSale: false
  },
  {
    id: 9,
    name: "Fashion Sneakers Women's",
    price: 119,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1517583010307-3f789911b89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc25lYWtlcnMlMjB3b21lbiUyMHdoaXRlfGVufDF8fHx8MTc1Mzg5MzIwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "sneakers",
    brand: "Soumya",
    rating: 4.5,
    reviews: 267,
    colors: ["White", "Pink", "Gray"],
    sizes: ["6", "7", "8", "9", "10"],
    isNew: false,
    isSale: false
  },
  {
    id: 10,
    name: "Men's Brown Dress Shoes",
    price: 279,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1657034321685-1fba1b2751f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZHJlc3MlMjBzaG9lcyUyMGJyb3duJTIwbGVhdGhlcnxlbnwxfHx8fDE3NTM4OTMyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "dress",
    brand: "Soumya",
    rating: 4.7,
    reviews: 156,
    colors: ["Brown", "Black"],
    sizes: ["8", "9", "10", "11", "12"],
    isNew: false,
    isSale: true
  },
  {
    id: 11,
    name: "Strappy Summer Sandals",
    price: 89,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1651047532215-a9dfed5d2cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBzYW5kYWxzJTIwd29tZW4lMjBzdHJhcHB5fGVufDF8fHx8MTc1Mzg5MzIxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "sandals",
    brand: "Soumya",
    rating: 4.2,
    reviews: 203,
    colors: ["Tan", "Brown", "Black"],
    sizes: ["6", "7", "8", "9", "10"],
    isNew: true,
    isSale: false
  },
  {
    id: 12,
    name: "Casual Slip-On Shoes",
    price: 139,
    originalPrice: 169,
    image: "https://images.unsplash.com/photo-1564857728932-afe72e20f41e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwY2FzdWFsJTIwc2xpcCUyMG9uJTIwc2hvZXN8ZW58MXx8fHwxNzUzODkzMjE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "loafers",
    brand: "Soumya",
    rating: 4.3,
    reviews: 134,
    colors: ["Navy", "Brown", "Black"],
    sizes: ["8", "9", "10", "11", "12"],
    isNew: false,
    isSale: true
  }
];

const categories = [
  { id: "all", name: "All Shoes", count: products.length },
  { id: "sneakers", name: "Sneakers", count: products.filter(p => p.category === "sneakers").length },
  { id: "dress", name: "Dress Shoes", count: products.filter(p => p.category === "dress").length },
  { id: "boots", name: "Boots", count: products.filter(p => p.category === "boots").length },
  { id: "heels", name: "Heels", count: products.filter(p => p.category === "heels").length },
  { id: "loafers", name: "Loafers", count: products.filter(p => p.category === "loafers").length },
  { id: "sandals", name: "Sandals", count: products.filter(p => p.category === "sandals").length },
  { id: "flats", name: "Flats", count: products.filter(p => p.category === "flats").length }
];

export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    // Default selections for quick add to cart
    const defaultSize = product.sizes[0];
    const defaultColor = product.colors[0];
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: defaultSize,
      color: defaultColor,
      category: product.category,
      brand: product.brand,
      quantity: 1,
    });

    toast.success(`${product.name} added to cart!`, {
      description: `${product.price} • Size: ${defaultSize} • Color: ${defaultColor}`,
    });
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.isNew ? 1 : -1;
      default:
        return 0;
    }
  });

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <Link to={`/product/${product.id}`}>
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && <Badge className="bg-green-500">New</Badge>}
            {product.isSale && <Badge variant="destructive">Sale</Badge>}
          </div>
          <Button
            size="sm"
            variant="secondary"
            className="absolute top-3 right-3 w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-amber-400 text-amber-400"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
          </div>
          <Link to={`/product/${product.id}`}>
            <h3 className="mb-2 hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <div className="flex gap-2 mb-3">
            {product.colors.slice(0, 3).map((color) => (
              <div
                key={color}
                className="w-4 h-4 rounded-full border border-border"
                style={{
                  backgroundColor: color.toLowerCase() === "black" ? "#000" :
                                 color.toLowerCase() === "brown" ? "#8B4513" :
                                 color.toLowerCase() === "white" ? "#FFF" :
                                 color.toLowerCase() === "red" ? "#DC2626" :
                                 color.toLowerCase() === "navy" ? "#1E3A8A" :
                                 color.toLowerCase() === "gray" ? "#6B7280" :
                                 color.toLowerCase() === "nude" ? "#F3E8D8" :
                                 color.toLowerCase() === "tan" ? "#D2B48C" :
                                 color.toLowerCase() === "pink" ? "#EC4899" : "#9CA3AF"
                }}
              />
            ))}
          </div>
          <Button 
            className="w-full" 
            size="sm"
            onClick={() => handleAddToCart(product)}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Categories */}
      <div>
        <h3 className="mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`flex items-center justify-between p-2 rounded cursor-pointer hover:bg-muted transition-colors ${
                selectedCategory === category.id ? "bg-muted" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="text-sm">{category.name}</span>
              <span className="text-xs text-muted-foreground">{category.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={500}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div>
        <h3 className="mb-4">Brands</h3>
        <div className="space-y-2">
          {["Soumya", "Nike", "Adidas", "Puma"].map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox id={brand} />
              <label htmlFor={brand} className="text-sm cursor-pointer">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl mb-4">Shop All Shoes</h1>
        <p className="text-muted-foreground">
          Discover our complete collection of premium footwear
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:w-64">
          <FilterContent />
        </div>

        {/* Mobile Filter Sheet */}
        <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="lg:hidden mb-4 w-full">
              <Filter className="w-4 h-4 mr-2" />
              Filters & Categories
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {sortedProducts.length} products
              </span>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Best Rating</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No products found matching your criteria.</p>
              <Button onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setPriceRange([0, 500]);
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}