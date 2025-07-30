import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const reviewsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    title: "Exceptional Quality & Comfort",
    review: "I've been wearing Soumya shoes for over a year now, and they still look as good as new. The leather quality is outstanding, and they're incredibly comfortable for long days at the office. Definitely worth every penny!",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzUzODE1MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "January 2025",
    verified: true
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    title: "Perfect Fit & Style",
    review: "As someone with wide feet, finding the right shoes has always been a challenge. Soumya's wide-width options are a game-changer. The craftsmanship is impeccable, and the style is exactly what I was looking for.",
    avatar: "https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1MzgxNTE4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "December 2024",
    verified: true
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    title: "Stylish and Durable",
    review: "Love the design and quality of my new boots! They've held up beautifully through the winter weather. The only minor issue was the break-in period, but after a few wears, they became incredibly comfortable.",
    avatar: "https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1MzgxNTIyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "November 2024",
    verified: true
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 5,
    title: "Outstanding Customer Service",
    review: "Not only are the shoes amazing, but the customer service is top-notch. Had a sizing issue and they resolved it immediately with free exchanges. The attention to detail in both product and service is remarkable.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTM4MTUyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    date: "October 2024",
    verified: true
  },
  {
    id: 5,
    name: "Lisa Park",
    rating: 5,
    title: "Premium Quality Worth It",
    review: "These are hands down the best shoes I've ever purchased. The attention to detail in the craftsmanship is evident in every stitch. They've become my go-to shoes for both casual and formal occasions.",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1MzgxNTI4NXww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "September 2024",
    verified: true
  },
  {
    id: 6,
    name: "James Wilson",
    rating: 4,
    title: "Great Value for Money",
    review: "Solid construction and comfortable fit. I've been wearing them daily for months and they're holding up really well. The delivery was fast and packaging was excellent. Highly recommend!",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc1MzgxNTMwN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    date: "August 2024",
    verified: true
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating
              ? "fill-amber-400 text-amber-400"
              : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
};

export function Reviews() {
  const averageRating = reviewsData.reduce((acc, review) => acc + review.rating, 0) / reviewsData.length;
  const totalReviews = reviewsData.length;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <StarRating rating={Math.round(averageRating)} />
            <span className="text-2xl">{averageRating.toFixed(1)}</span>
            <span className="text-muted-foreground">
              Based on {totalReviews} reviews
            </span>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their Soumya experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviewsData.map((review) => (
            <Card key={review.id} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Header with avatar and rating */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <ImageWithFallback
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {review.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base">{review.name}</h4>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>

                {/* Review content */}
                <div className="flex-1">
                  <h5 className="mb-3 text-base">{review.title}</h5>
                  <p className="text-muted-foreground leading-relaxed">
                    {review.review}
                  </p>
                </div>

                {/* Verified badge */}
                {review.verified && (
                  <div className="mt-4 pt-4 border-t">
                    <span className="inline-flex items-center gap-2 text-sm text-green-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Verified Purchase
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4">Join Our Happy Customers</h3>
            <p className="text-muted-foreground mb-6">
              Experience the quality and comfort that thousands of customers love. Start your journey with Soumya today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                onClick={() => document.querySelector('#featured')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Shop Now
              </button>
              <button 
                className="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                onClick={() => window.open('mailto:reviews@soumya.com')}
              >
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}