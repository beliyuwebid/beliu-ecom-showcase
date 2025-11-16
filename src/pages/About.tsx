import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Package, Award, Users } from "lucide-react";

const About = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Beliyu</h1>
          
          <div className="prose prose-lg mb-12">
            <p className="text-lg text-muted-foreground mb-4">
              Welcome to Beliyu, your trusted online shopping destination for quality products at great prices. Since our establishment, we've been committed to providing customers with an exceptional shopping experience and a carefully curated selection of products across multiple categories.
            </p>
            
            <p className="text-lg text-muted-foreground mb-4">
              At Beliyu, we believe that online shopping should be simple, secure, and enjoyable. That's why we've built a platform that combines the latest technology with outstanding customer service to bring you the best possible shopping experience.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Our mission is to make quality products accessible to everyone. We carefully select each item in our catalog to ensure it meets our high standards for quality, value, and customer satisfaction. Whether you're shopping for electronics, fashion, home goods, or sports equipment, you can trust that every product has been vetted by our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
                <p className="text-muted-foreground">
                  Every product is carefully selected and quality tested to ensure your satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
                <p className="text-muted-foreground">
                  Free shipping on orders over $50 with reliable delivery to your doorstep.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
                <p className="text-muted-foreground">
                  Competitive pricing on all products with regular sales and special offers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                <p className="text-muted-foreground">
                  Dedicated support team ready to assist you with any questions or concerns.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg">
            <h2 className="text-2xl font-bold mb-4">Why Choose Beliyu?</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>Wide selection of products across multiple categories</li>
              <li>Secure payment processing and data protection</li>
              <li>Easy returns and refund policy</li>
              <li>Regular promotions and special deals</li>
              <li>Customer reviews to help you make informed decisions</li>
              <li>Mobile-friendly shopping experience</li>
              <li>Fast and reliable customer support</li>
            </ul>

            <p className="text-lg text-muted-foreground mt-6">
              Thank you for choosing Beliyu for your online shopping needs. We're committed to continuously improving our service and product selection to better serve you.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
