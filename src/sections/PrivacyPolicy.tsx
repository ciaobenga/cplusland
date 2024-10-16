import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur border-none shadow-lg rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy for Circle+</h1>
          <p className="text-sm text-gray-400 mb-4">Effective Date: 1st Jan 2024</p>

          <p className="text-gray-300 mb-6">
            At Circle+, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or use our services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">We collect various types of information in connection with the services we provide, including:</p>

            <h3 className="text-xl font-semibold text-white mb-2">1.1 Personal Information</h3>
            <p className="text-gray-300 mb-2">We may collect personal information that you provide directly to us, such as:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Job title</li>
              <li>Payment and billing information</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2">1.2 Automatically Collected Information</h3>
            <p className="text-gray-300 mb-2">When you visit our website or use our services, we may automatically collect information such as:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages you visit and interactions on our website</li>
              <li>Date and time of your visit</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-2">1.3 Cookies and Tracking Technologies</h3>
            <p className="text-gray-300">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help us understand how you interact with our site and allow us to improve its functionality. You may choose to disable cookies through your browser settings, though some features of our website may not function properly as a result.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-2">We use the personal information we collect for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>To provide, operate, and improve our products and services</li>
              <li>To personalize your experience on our website</li>
              <li>To communicate with you, including responding to inquiries or providing customer support</li>
              <li>To send promotional materials or updates about new features or services (with your consent)</li>
              <li>To analyze website usage and user interactions for improvements and development</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Share Your Information</h2>
            <p className="text-gray-300 mb-4">We do not sell, rent, or trade your personal information. However, we may share your information in the following circumstances:</p>
            <ul className="list-disc list-inside text-gray-300">
              <li><strong className="text-white">Service Providers:</strong> We may share your information with third-party service providers that assist us in operating our website and providing our services (e.g., payment processors, hosting providers).</li>
              <li><strong className="text-white">Legal Requirements:</strong> We may disclose your personal information if required by law, or if we believe such disclosure is necessary to protect our rights, comply with legal processes, or respond to government requests.</li>
              <li><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our business, your personal information may be transferred as part of the transaction.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. How We Protect Your Information</h2>
            <p className="text-gray-300">
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and access controls. However, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights and Choices</h2>
            <p className="text-gray-300">
              You have the right to access, correct, update, or delete your personal information. You may also choose to opt out of receiving marketing communications from us by following the unsubscribe link in our emails or contacting us directly at info@circleplus.xyz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Data Retention</h2>
            <p className="text-gray-300">
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected or as required by law. Once your information is no longer needed, we will take reasonable steps to delete or anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Third-Party Links</h2>
            <p className="text-gray-300">
              Our website may contain links to third-party websites or services. Please note that we are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party services you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:
            </p>
            <p className="text-gray-300">
              Circle+<br />
              Email: <Link href="mailto:info@circleplus.xyz" className="text-[#5328f3] font-bold hover:underline">info@circleplus.xyz</Link>
            </p>
          </section>

          <div className="mt-8 flex justify-center">
            <Button asChild variant="outline" className="bg-[#5328f3] text-white hover:text-white hover:bg-[#6942f6] border-none">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}