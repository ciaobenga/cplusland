import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur border-none rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-3xl font-bold text-white mb-6">Terms of Service for Circle+</h1>
          <p className="text-sm text-gray-400 mb-4">Effective Date: 1st Jan 2024</p>

          <p className="text-gray-300 mb-6">
            Welcome to Circle+! These Terms of Service ("Terms") govern your use of our website and services ("Services"). By accessing or using Circle+ ("we," "our," or "us") and its associated Services, you agree to comply with these Terms. If you do not agree to these Terms, please do not use our Services.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing our website, registering an account, or using our Services, you agree to abide by these Terms and all applicable laws and regulations. You also acknowledge that these Terms may be updated from time to time, and it is your responsibility to review the most current version. Continued use of our Services after modifications constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Eligibility</h2>
            <p className="text-gray-300">
              You must be at least 18 years old or the age of majority in your jurisdiction to use our Services. By registering for an account, you represent and warrant that you have the right, authority, and capacity to enter into these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Account Registration and Responsibilities</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">3.1 Account Creation</h3>
            <p className="text-gray-300 mb-4">
              To access certain features of our Services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and keep your account information updated.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">3.2 Account Security</h3>
            <p className="text-gray-300">
              You are responsible for safeguarding your account credentials and are solely responsible for all activities that occur under your account. You must notify Circle+ immediately if you suspect any unauthorized access to your account. Circle+ is not liable for any loss or damage arising from your failure to protect your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Use of Services</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">4.1 Permitted Use</h3>
            <p className="text-gray-300 mb-4">
              You may use our Services only in accordance with these Terms and all applicable laws and regulations. You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>Engage in any fraudulent, abusive, or harmful conduct while using our Services.</li>
              <li>Use the Services to violate the rights of others or to engage in any unlawful activity.</li>
              <li>Interfere with or disrupt the integrity or performance of the Services.</li>
            </ul>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">4.2 Restrictions</h3>
            <p className="text-gray-300 mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Reverse-engineer, decompile, disassemble, or attempt to derive the source code of the software used in our Services.</li>
              <li>Attempt to gain unauthorized access to our systems, servers, or networks.</li>
              <li>Use automated systems (e.g., bots or crawlers) to scrape, access, or interact with the Services, except as allowed by our API.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Payments and Fees</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">5.1 Pricing</h3>
            <p className="text-gray-300 mb-4">
              Certain features of the Services may require payment of fees. Pricing for these services will be provided at the time of purchase or subscription, and all payments are due in advance unless otherwise specified. All fees are non-refundable unless otherwise stated in these Terms or agreed to by Circle+.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">5.2 Payment Processing</h3>
            <p className="text-gray-300 mb-4">
              We use third-party payment processors to facilitate transactions. By providing payment information, you authorize us and our payment processors to charge the applicable fees to your payment method. Circle+ is not responsible for any errors or issues with the payment processing system.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">5.3 Taxes</h3>
            <p className="text-gray-300">
              You are responsible for any taxes that apply to your purchase of our Services, other than taxes based on our income.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">6.1 Circle+ Ownership</h3>
            <p className="text-gray-300 mb-4">
              All content, software, and materials available on our website and Services, including trademarks, logos, text, graphics, and other intellectual property, are the property of Circle+ or its licensors and are protected by intellectual property laws. You agree not to copy, reproduce, modify, distribute, or create derivative works of any part of our Services without our prior written consent.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">6.2 User-Generated Content</h3>
            <p className="text-gray-300">
              If you submit any content (e.g., feedback, ideas, suggestions) to Circle+, you grant us a non-exclusive, perpetual, irrevocable, royalty-free, worldwide license to use, modify, reproduce, and distribute that content for any purpose. You represent and warrant that you own the rights to such content and that it does not infringe on the rights of others.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Data Privacy</h2>
            <p className="text-gray-300">
              Your use of our Services is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal data. By using our Services, you consent to the collection and use of your information as outlined in our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Service Availability and Modifications</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">8.1 Availability</h3>
            <p className="text-gray-300 mb-4">
              We strive to maintain the availability of our Services, but we cannot guarantee that the Services will be available at all times. There may be periods of downtime for maintenance, updates, or technical issues.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">8.2 Modifications</h3>
            <p className="text-gray-300">
              We reserve the right to modify or discontinue, temporarily or permanently, any aspect of our Services at any time without notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Termination</h2>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">9.1 Termination by You</h3>
            <p className="text-gray-300 mb-4">
              You may terminate your account at any time by contacting us at <Link href="mailto:info@circleplus.xyz" className="text-blue-400 hover:underline">info@circleplus.xyz</Link>. Upon termination, you must cease all use of our Services.
            </p>
            <h3 className="text-xl font-semibold text-white mt-4 mb-2">9.2 Termination by Circle+</h3>
            <p className="text-gray-300">
              We may terminate or suspend your account and access to our Services, with or without notice, for any reason, including breach of these Terms. Upon termination, your rights to use our Services will immediately cease.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-300">
              To the fullest extent permitted by law, Circle+ shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of your use of our Services. Circle+'s total liability for any claims arising from your use of our Services is limited to the amount you paid for the Services in the 12 months preceding the incident.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">11. Disclaimer of Warranties</h2>
            <p className="text-gray-300">
              Circle+ provides the Services "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the Services will be uninterrupted, error-free, or secure, or that any defects will be corrected.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">12. Indemnification</h2>
            <p className="text-gray-300">
              You agree to indemnify, defend, and hold harmless Circle+, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, and expenses (including reasonable legal fees) arising from:
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Your use of the Services;</li>
              <li>Your breach of these Terms; or</li>
              <li>Your violation of any rights of a third party.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">13. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law provisions. Any disputes arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of [Insert Jurisdiction].
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">14. Changes to These Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. If we make material changes, we will provide notice through our website or by other means. Your continued use of the Services after changes to the Terms constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">15. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions or concerns regarding these Terms or our Services, please contact us at:
            </p>
            <p className="text-gray-300">
              Circle+<br />
              Email: <Link href="mailto:info@circleplus.xyz" className="text-blue-400 hover:underline">info@circleplus.xyz</Link>
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