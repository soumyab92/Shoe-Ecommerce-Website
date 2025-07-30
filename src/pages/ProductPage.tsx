import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Heart, Share2, Minus, Plus, ShoppingCart, Truck, RotateCcw, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { toast } from "sonner";
import { useCart } from "../contexts/CartContext";

// Expanded product data to match ShopPage products
const productData = {
  1: {
    id: 1,
    name: "Classic Oxford Dress Shoes",
    price: 299,
    originalPrice: 399,
    images: [
      "https://images.unsplash.com/photo-1576792741377-eb0f4f6d1a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwZHJlc3MlMjBzaG9lcyUyMG1lbnxlbnwxfHx8fDE3NTM4OTI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmVzcyUyMHNob2VzJTIwZGV0YWlsfGVufDF8fHx8MTc1Mzg5MjY4OHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1552066344-2464c1135c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwc2hvZSUyMGRldGFpbHxlbnwxfHx8fDE3NTM4OTI2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    category: "dress",
    brand: "Soumya",
    rating: 4.8,
    reviews: 124,
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Brown", hex: "#8B4513" },
      { name: "Tan", hex: "#D2B48C" }
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    isNew: false,
    isSale: true,
    inStock: true,
    sku: "SOY-OXF-001",
    description: "Elevate your formal wardrobe with our Classic Oxford Dress Shoes. Crafted from premium full-grain leather, these shoes feature traditional Oxford styling with modern comfort technology. Perfect for business meetings, formal events, or any occasion that calls for sophisticated footwear.",
    features: [
      "Premium full-grain leather upper",
      "Cushioned insole for all-day comfort",
      "Leather sole with rubber heel",
      "Traditional Oxford construction",
      "Hand-finished details",
      "Available in multiple widths"
    ],
    careInstructions: "Clean with a damp cloth and leather conditioner. Store with shoe trees to maintain shape. Avoid excessive moisture.",
    shipping: "Free shipping on orders over $75. Standard delivery 3-7 business days.",
    returns: "30-day return policy. Items must be in original condition."
  },
  2: {
    id: 2,
    name: "Elegant High Heel Pumps",
    price: 189,
    originalPrice: null,
    images: [
      "https://images.unsplash.com/photo-1621996659490-3275b4d0d951?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhpZ2glMjBoZWVscyUyMHNob2VzfGVufDF8fHx8MTc1Mzg5MjYxMHww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    category: "heels",
    brand: "Soumya",
    rating: 4.6,
    reviews: 89,
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Red", hex: "#DC2626" },
      { name: "Nude", hex: "#F3E8D8" }
    ],
    sizes: ["6", "7", "8", "9", "10"],
    isNew: true,
    isSale: false,
    inStock: true,
    sku: "SOY-HEL-002",
    description: "Step into elegance with our Elegant High Heel Pumps. These sophisticated heels combine timeless style with modern comfort, perfect for professional settings or special occasions.",
    features: [
      "Premium leather upper",
      "3.5-inch stiletto heel",
      "Padded footbed",
      "Non-slip sole",
      "Classic pointed toe",
      "Available in multiple colors"
    ],
    careInstructions: "Wipe clean with a soft cloth. Store in dust bag when not in use.",
    shipping: "Free shipping on orders over $75. Standard delivery 3-7 business days.",
    returns: "30-day return policy. Items must be in original condition."
  },
  3: {
    id: 3,
    name: "Performance Running Sneakers",
    price: 149,
    originalPrice: null,
    images: [
      "https://images.unsplash.com/photo-1621519765361-59e3295d0f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc25lYWtlcnMlMjBhdGhsZXRpY3xlbnwxfHx8fDE3NTM4OTI2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    category: "sneakers",
    brand: "Soumya",
    rating: 4.9,
    reviews: 256,
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
      { name: "Gray", hex: "#6B7280" }
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    isNew: false,
    isSale: false,
    inStock: true,
    sku: "SOY-RUN-003",
    description: "Achieve your fitness goals with our Performance Running Sneakers. Engineered for comfort and performance, these shoes feature advanced cushioning and breathable materials.",
    features: [
      "Breathable mesh upper",
      "Advanced cushioning system",
      "Lightweight construction",
      "Durable rubber outsole",
      "Reflective details",
      "Moisture-wicking lining"
    ],
    careInstructions: "Machine washable on gentle cycle. Air dry only.",
    shipping: "Free shipping on orders over $75. Standard delivery 3-7 business days.",
    returns: "30-day return policy. Items must be in original condition."
  }
  // Add more product data as needed for other IDs
};

export function ProductPage() {
  const { id } = useParams();
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  const product = productData[Number(id) as keyof typeof productData];
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart");
      return;
    }
    if (selectedColor === null || selectedColor === undefined) {
      toast.error("Please select a color before adding to cart");
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: product.colors[selectedColor].name,
      category: product.category,
      brand: product.brand,
      quantity: quantity,
    });
    
    toast.success(`${product.name} added to cart!`, {
      description: `${product.price} • Size: ${selectedSize} • Color: ${product.colors[selectedColor].name} • Qty: ${quantity}`,
    });
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-primary">Shop</Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-lg">
            <ImageWithFallback
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-cover"
            />
            {product.isSale && (
              <Badge variant="destructive" className="absolute top-4 left-4">
                Sale
              </Badge>
            )}
            {product.isNew && (
              <Badge className="absolute top-4 right-4 bg-green-500">
                New
              </Badge>
            )}
          </div>
          
          {/* Thumbnail Images */}
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-border"
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <StarRating rating={product.rating} />
              <span className="text-sm text-muted-foreground">
                ({product.reviews} reviews)
              </span>
            </div>
            <h1 className="text-3xl mb-2">{product.name}</h1>
            <p className="text-muted-foreground">SKU: {product.sku}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-3xl">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
            {product.isSale && (
              <Badge variant="destructive">
                Save ${product.originalPrice! - product.price}
              </Badge>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          {/* Color Selection */}
          <div>
            <h3 className="mb-3">Color</h3>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-8 h-8 rounded-full border-2 transition-colors ${
                    selectedColor === index ? "border-primary" : "border-border"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Selected: {product.colors[selectedColor].name}
            </p>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="mb-3">Size</h3>
            <div className="grid grid-cols-6 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`p-2 border rounded text-center transition-colors ${
                    selectedSize === size
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="mb-3">Quantity</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <span className="text-sm text-muted-foreground">
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              className="w-full" 
              size="lg"
              disabled={!selectedSize || !product.inStock}
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1">
                <Heart className="w-4 h-4 mr-2" />
                Add to Wishlist
              </Button>
              <Button variant="outline" className="flex-1">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm">30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm">2-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="care">Care</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4">Product Details</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="features" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="care" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4">Care Instructions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.careInstructions}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4">Shipping & Returns</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2">Shipping</h4>
                    <p className="text-muted-foreground">{product.shipping}</p>
                  </div>
                  <div>
                    <h4 className="mb-2">Returns</h4>
                    <p className="text-muted-foreground">{product.returns}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}