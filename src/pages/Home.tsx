import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { ArrowRight, Smartphone, Shirt, Home as HomeIcon, Dumbbell, Book, Gamepad2, Sparkles, Car } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const iconMap: Record<string, any> = {
  Smartphone,
  Shirt,
  Home: HomeIcon,
  Dumbbell,
  Book,
  Gamepad2,
  Sparkles,
  Car,
};

const Home = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src={heroBanner}
          alt="Shop quality products at Beliyu"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Quality Products at Great Prices
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Shop electronics, fashion, home goods, and more. Free shipping on orders over $50.
            </p>
            <Link to="/products">
              <Button size="lg" className="group">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <Link key={category.id} to={`/products?category=${category.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/products">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-success/10">
                <svg className="h-8 w-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-muted-foreground">
              All products are carefully selected and quality tested
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-primary/10">
                <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
            <p className="text-muted-foreground">
              Free delivery on all orders over $50
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="p-4 rounded-full bg-accent/10">
                <svg className="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-muted-foreground">
              Your payment information is safe and encrypted
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
