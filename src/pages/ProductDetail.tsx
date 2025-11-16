import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { Star, ShoppingCart, ArrowLeft, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Link to="/products">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-square relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                  {discount > 0 && (
                    <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                      Save {discount}%
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-accent text-accent"
                        : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-2xl text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {product.inStock ? (
              <Badge className="bg-success text-success-foreground mb-6">
                In Stock ({product.stock} available)
              </Badge>
            ) : (
              <Badge variant="secondary" className="mb-6">
                Out of Stock
              </Badge>
            )}

            <div className="prose prose-sm mb-8">
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Key Features</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Button
              size="lg"
              className="w-full md:w-auto"
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
