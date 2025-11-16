import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
          {discount > 0 && (
            <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
              -{discount}%
            </Badge>
          )}
          {!product.inStock && (
            <Badge className="absolute top-2 left-2 bg-muted text-muted-foreground">
              Out of Stock
            </Badge>
          )}
        </div>
      </Link>
      
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold line-clamp-2 mb-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating)
                  ? "fill-accent text-accent"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">
            ({product.reviews})
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
