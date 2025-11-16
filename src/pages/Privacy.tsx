import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
          <p>
            At Beliyu ("we," "our," or "us"), we respect your privacy and are committed to
            protecting your personal data. This privacy policy explains how we collect, use,
            and safeguard your information when you visit our website beliyu.web.id and make
            purchases from our online store.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
          <p>We collect several types of information to provide and improve our services:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, email address, shipping address,
              billing address, and phone number when you create an account or place an order.
            </li>
            <li>
              <strong>Payment Information:</strong> Credit card details and billing information
              processed securely through our payment processors.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact with our website,
              including IP address, browser type, pages visited, and time spent on pages.
            </li>
            <li>
              <strong>Cookies:</strong> Small data files stored on your device to enhance your
              browsing experience and remember your preferences.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
          <p>We use the collected information for various purposes:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and account</li>
            <li>Improve our website and customer service</li>
            <li>Send promotional emails about new products and special offers (with your consent)</li>
            <li>Detect and prevent fraud</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect
            your personal data against unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the internet is 100% secure,
            and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Data Sharing</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>
              <strong>Service Providers:</strong> Third-party companies that help us operate our
              business (payment processors, shipping companies, email service providers)
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to protect our rights
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger, acquisition, or
              sale of assets
            </li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Cookies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website
            and store certain information. You can instruct your browser to refuse all cookies
            or to indicate when a cookie is being sent. However, if you do not accept cookies,
            you may not be able to use some portions of our website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Children's Privacy</h2>
          <p>
            Our website is not intended for children under 13 years of age. We do not knowingly
            collect personal information from children under 13. If you are a parent or guardian
            and believe your child has provided us with personal information, please contact us.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our privacy policy from time to time. We will notify you of any
            changes by posting the new privacy policy on this page and updating the "Last
            updated" date.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our data practices, please
            contact us at:
          </p>
          <ul>
            <li>Email: privacy@beliyu.web.id</li>
            <li>Phone: +1 (234) 567-890</li>
            <li>Address: 123 Shopping Street, New York, NY 10001</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
