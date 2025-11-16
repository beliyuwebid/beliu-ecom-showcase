import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Agreement to Terms</h2>
          <p>
            By accessing and using beliyu.web.id ("Website"), you agree to be bound by these
            Terms of Service ("Terms"). If you do not agree to these Terms, please do not use
            our Website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Use of Website</h2>
          <p>You agree to use our Website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
          <ul>
            <li>Use the Website in any way that violates applicable laws or regulations</li>
            <li>Impersonate or attempt to impersonate Beliyu or any other person or entity</li>
            <li>Engage in any conduct that restricts or inhibits anyone's use of the Website</li>
            <li>Use any robot, spider, or other automatic device to access the Website</li>
            <li>Introduce any viruses, trojans, or other harmful material</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">User Accounts</h2>
          <p>
            To make a purchase on our Website, you may be required to create an account. You
            are responsible for:
          </p>
          <ul>
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use of your account</li>
            <li>Providing accurate, current, and complete information</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Product Information</h2>
          <p>
            We strive to provide accurate product descriptions, images, and pricing.
            However, we do not warrant that product descriptions or other content is accurate,
            complete, reliable, current, or error-free. We reserve the right to:
          </p>
          <ul>
            <li>Limit quantities of products available for purchase</li>
            <li>Refuse or cancel any order</li>
            <li>Correct errors, inaccuracies, or omissions at any time</li>
            <li>Change or update product information without prior notice</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Pricing and Payment</h2>
          <p>
            All prices are in USD and are subject to change without notice. We accept various
            payment methods as indicated at checkout. You agree to:
          </p>
          <ul>
            <li>Provide current, complete, and accurate purchase information</li>
            <li>Pay all charges at the prices in effect when incurred</li>
            <li>Pay applicable taxes</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Shipping and Delivery</h2>
          <p>
            We ship to addresses within the countries we serve. Shipping times and costs
            vary by location and shipping method selected. We are not responsible for delays
            caused by customs or other factors beyond our control.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Returns and Refunds</h2>
          <p>
            We accept returns within 30 days of delivery for most items in original
            condition with tags attached. Some items may not be eligible for return due to
            hygiene or safety reasons. Refunds will be processed to the original payment
            method within 5-10 business days of receiving the returned item.
          </p>
          <p>To be eligible for a return:</p>
          <ul>
            <li>Item must be unused and in original condition</li>
            <li>Item must be in original packaging</li>
            <li>Proof of purchase is required</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
          <p>
            The Website and its entire contents, features, and functionality are owned by
            Beliyu and are protected by copyright, trademark, and other intellectual property
            laws. You may not reproduce, distribute, modify, or create derivative works
            without our express written permission.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Beliyu shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, or any loss of
            profits or revenues, whether incurred directly or indirectly, or any loss of
            data, use, goodwill, or other intangible losses.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Indemnification</h2>
          <p>
            You agree to indemnify and hold Beliyu harmless from any claims, damages, losses,
            liabilities, and expenses arising from your use of the Website or violation of
            these Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the
            jurisdiction in which Beliyu operates, without regard to conflict of law
            principles.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of
            any material changes by posting the updated Terms on the Website. Your continued
            use of the Website after such changes constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <ul>
            <li>Email: legal@beliyu.web.id</li>
            <li>Phone: +1 (234) 567-890</li>
            <li>Address: 123 Shopping Street, New York, NY 10001</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
