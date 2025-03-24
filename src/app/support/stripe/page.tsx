import Link from "next/link"
import {
  ArrowLeft,
  ShieldCheck,
  Zap,
  RefreshCw,
  AlertCircle,
  CheckIcon,
  Clock,
  Calendar,
  HandIcon,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import DocHeader from "@/components/support/doc-header"
import DocSidebar from "@/components/support/doc-sidebar"
import { SiStripe } from "react-icons/si"
import { Metadata } from "next";
import { Header } from "@/sections/Header"

export const metadata: Metadata = {
  title: "Stripe Support - Circle+",
};

export default function StripeDocumentation() {
  const stripeColor = "#635BFF"

  const sidebarItems = [
    {
      title: "Getting Started",
      links: [
        { title: "Overview", href: "#overview" },
        { title: "Prerequisites", href: "#prerequisites" },
        { title: "Connection Process", href: "#installation" },
      ],
    },
    {
      title: "Features",
      links: [
        { title: "Data Synchronization", href: "#data-sync" },
        { title: "Analytics & Reporting", href: "#analytics" },
      ],
    },
    {
      title: "Troubleshooting",
      links: [
        { title: "Common Issues", href: "#common-issues" },
        { title: "Error Codes", href: "#error-codes" },
        { title: "Support", href: "#support" },
      ],
    },
  ]

  const faqItems = [
    {
      question: "How do I invite a startup to connect their Stripe account?",
      answer:
        "From your dashboard, go to Connections > Stripe and click 'Invite Startup'. Enter the startup's email address and customize the invitation message if needed. The startup will receive an email with instructions to connect their Stripe account.",
    },
    {
      question: "What permissions do we request from the startup's Stripe account?",
      answer:
        "By default, we request read-only access to transactions, customers, subscriptions, products, and invoices. We do not request write access to the startup's Stripe account, meaning we cannot make changes to their Stripe data. Startups can customize these permissions during the connection process.",
    },
    {
      question: "How is the startup's Stripe data secured?",
      answer:
        "All Stripe data is encrypted both in transit and at rest using industry-standard encryption. We never store sensitive payment details like full card numbers. Access to the data is restricted based on user permissions in your organization. We comply with SOC 2 Type II and GDPR requirements for data security and privacy.",
    },
    {
      question: "Can startups disconnect their Stripe account?",
      answer:
        "Yes, startups can disconnect their Stripe account at any time from their dashboard. When disconnected, we stop syncing new data, but previously synced data remains in your platform unless explicitly deleted. You can configure data retention policies in your settings.",
    },
    {
      question: "How far back does the historical data sync go?",
      answer:
        "By default, we sync up to 24 months of historical Stripe data. For startups with longer history, you can request an extended historical sync by contacting our support team. Note that very large data volumes may take longer to complete the initial sync.",
    },
    {
      question: "How do I find my Stripe API keys?",
      answer:
        "You can find your API keys in the Stripe Dashboard under Developers > API keys. Make sure to use your test keys for development and testing, and only use your live keys in production environments.",
    },
    {
      question: "What's the difference between test mode and live mode?",
      answer:
        "Test mode allows you to simulate transactions without processing real payments. It's ideal for development and testing. Live mode processes actual payments and should only be used in production environments. Each mode has its own set of API keys.",
    },
    {
      question: "How do I set up webhooks?",
      answer:
        "In your Stripe Dashboard, go to Developers > Webhooks and click 'Add endpoint'. Enter your endpoint URL and select the events you want to receive. For local development, you can use tools like Stripe CLI or ngrok to forward webhook events to your local environment.",
    },
    {
      question: "Why are my test payments failing?",
      answer:
        "Test payments can fail for several reasons: using incorrect test card numbers, using live keys in test mode, or not handling the payment flow correctly. Make sure you're using Stripe's test card numbers (e.g., 4242 4242 4242 4242 for successful payments) and following the correct connection steps.",
    },
    {
      question: "How do I handle failed payments for subscriptions?",
      answer:
        "Stripe provides several tools for handling failed payments: automatic retries, dunning management, and webhook events for payment failures. You can configure these in your Stripe Dashboard under Billing > Customer Portal. You should also listen for 'invoice.payment_failed' webhook events to handle failures programmatically.",
    },
    {
      question: "What happens if I delete a contact in HubSpot?",
      answer:
        "When you delete a contact in HubSpot, the connection will detect the change during the next sync. By default, the contact will be marked as deleted in Circle+ but not permanently removed. You can change this behavior in your connection settings.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <DocHeader title="Stripe" color={stripeColor} icon={<SiStripe className="h-6 w-6" />} />

      <div className="flex-1 container mx-auto px-4 flex flex-col md:flex-row gap-8 py-8">
        <DocSidebar items={sidebarItems} color={stripeColor} className="md:w-64 shrink-0" />

        <main className="flex-1 min-w-0 text-white">
          <div className="mb-6">
               <Link
                    href="/support"
                    className="text-sm text-muted-foreground hover:text-[#5328f3] flex items-center gap-1"
               >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Support Hub
               </Link>
          </div>

          <div className="space-y-10">
            <section id="overview">
              <div
                className="p-4 rounded-lg mb-6 flex items-center gap-4"
                style={{ backgroundColor: `${stripeColor}20` }}
              >
                <div className="p-3 rounded-md" style={{ backgroundColor: stripeColor }}>
                  <SiStripe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Stripe</h3>
                  <p className="text-sm text-muted-foreground">
                    Payment processing, subscriptions, and financial management
                  </p>
                </div>
              </div>

              <p className="text-base mb-4">
                Our Stripe connection allows you to connect with your Startups' Stripe accounts and automatically sync their
                financial data with your platform. This enables real-time visibility into transaction data, subscription
                metrics, and revenue analytics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="border rounded-lg p-4">
                  <ShieldCheck className="h-6 w-6 mb-2" style={{ color: stripeColor }} />
                  <h3 className="font-medium mb-1">Secure Payments</h3>
                  <p className="text-sm text-muted-foreground">
                    PCI-compliant payment processing with strong encryption
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <Zap className="h-6 w-6 mb-2" style={{ color: stripeColor }} />
                  <h3 className="font-medium mb-1">Quick Setup</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect your Stripe account in minutes with our guided setup
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <RefreshCw className="h-6 w-6 mb-2" style={{ color: stripeColor }} />
                  <h3 className="font-medium mb-1">Real-time Sync</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatic synchronization of payment data and customer information
                  </p>
                </div>
              </div>
            </section>

            <section id="data-sync" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Data Synchronization</h2>
              <p className="mb-4">
                Once a startup connects their Stripe account, our platform automatically begins syncing their financial
                data. This provides you with real-time insights into their business metrics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-3">What Data We Sync</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckIcon className="h-3 w-3 text-green-600" />
                      </div>
                      <span>
                        <strong>Transactions:</strong> All payments, refunds, and disputes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckIcon className="h-3 w-3 text-green-600" />
                      </div>
                      <span>
                        <strong>Customers:</strong> Customer profiles and payment methods
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckIcon className="h-3 w-3 text-green-600" />
                      </div>
                      <span>
                        <strong>Subscriptions:</strong> Active subscriptions, plans, and billing cycles
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckIcon className="h-3 w-3 text-green-600" />
                      </div>
                      <span>
                        <strong>Products:</strong> Product catalog and pricing information
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckIcon className="h-3 w-3 text-green-600" />
                      </div>
                      <span>
                        <strong>Invoices:</strong> Invoice history and payment status
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-3">Sync Frequency</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Choose how often data is synchronized between Stripe and our platform:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <Zap className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>
                        <strong>Real-time (default):</strong> Data syncs immediately via webhooks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <Clock className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>
                        <strong>Hourly:</strong> Scheduled sync every hour
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <Calendar className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>
                        <strong>Daily:</strong> Scheduled sync once per day
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-0.5 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                        <HandIcon className="h-3 w-3 text-blue-600" />
                      </div>
                      <span>
                        <strong>Manual:</strong> Sync only when manually triggered
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#635BFF]/30 p-5 rounded-lg mb-6">
                <h3 className="font-medium text-lg mb-3">Data Flow Architecture</h3>
                <p className="text-sm text-white mb-4">
                  Our connection uses a combination of webhooks and API polling to ensure data consistency:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-sm text-zinc-200">
                  <li>
                    <strong>Initial Sync:</strong> When a startup connects their Stripe account, we perform a full
                    historical data import
                  </li>
                  <li>
                    <strong>Real-time Updates:</strong> Webhooks notify our platform of new events (payments,
                    subscriptions, etc.)
                  </li>
                  <li>
                    <strong>Verification:</strong> Scheduled API polling verifies data consistency and fills any gaps
                  </li>
                  <li>
                    <strong>Transformation:</strong> Raw Stripe data is transformed into actionable metrics and KPIs
                  </li>
                  <li>
                    <strong>Storage:</strong> Data is securely stored and made available through our analytics dashboard
                  </li>
                </ol>
              </div>

              <div className="border rounded-lg p-5">
                <h3 className="font-medium text-lg mb-3">Data Access Controls</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Startups maintain full control over what data is shared with your platform:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#635BFF]/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Granular Permissions</h4>
                    <p className="text-xs text-muted-foreground">
                      During the connection process, startups can select which data types to share (transactions,
                      customers, etc.)
                    </p>
                  </div>
                  <div className="bg-[#635BFF]/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Data Filtering</h4>
                    <p className="text-xs text-muted-foreground">
                      Startups can apply filters to limit data sharing by date range, product type, or customer segment
                    </p>
                  </div>
                  <div className="bg-[#635BFF]/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Revoke Access</h4>
                    <p className="text-xs text-muted-foreground">
                      Startups can disconnect their Stripe account at any time through their dashboard
                    </p>
                  </div>
                  <div className="bg-[#635BFF]/20 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Audit Logs</h4>
                    <p className="text-xs text-muted-foreground">
                      Comprehensive logs track all data access and sync activities for transparency
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="analytics" className="mb-10">
              <h2 className="text-2xl font-bold mb-4">Analytics & Reporting</h2>
              <p className="mb-4">
                Once a startup's Stripe data is synced with your platform, you can access powerful analytics and
                reporting tools.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="border rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-3">Revenue Metrics</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Monthly Recurring Revenue (MRR)</li>
                    <li>Annual Recurring Revenue (ARR)</li>
                    <li>Revenue growth rates</li>
                    <li>Average Revenue Per User (ARPU)</li>
                    <li>Revenue by product/plan</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-3">Customer Insights</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Customer Lifetime Value (LTV)</li>
                    <li>Customer acquisition cohorts</li>
                    <li>Churn rate and retention</li>
                    <li>Upgrade/downgrade patterns</li>
                    <li>Geographic distribution</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-5">
                  <h3 className="font-medium text-lg mb-3">Financial Health</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Cash flow projections</li>
                    <li>Failed payment recovery</li>
                    <li>Refund rates and reasons</li>
                    <li>Transaction fee analysis</li>
                    <li>Currency exchange impact</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#635BFF]/20 p-5 rounded-lg">
                <h3 className="font-medium text-lg mb-3">Custom Reports</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Create custom reports based on the startup's Stripe data:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#635BFF]/30 p-4 rounded-lg border">
                    <h4 className="font-medium mb-2">Investor-Ready Metrics</h4>
                    <p className="text-xs text-muted-foreground">
                      Generate reports with key metrics that startups can share with potential investors, including MRR
                      growth, CAC, LTV, and burn rate.
                    </p>
                  </div>
                  <div className="bg-[#635BFF]/30 p-4 rounded-lg border">
                    <h4 className="font-medium mb-2">Benchmark Comparisons</h4>
                    <p className="text-xs text-muted-foreground">
                      Compare a startup's performance against industry benchmarks and similar companies in your
                      portfolio (anonymized).
                    </p>
                  </div>
                  <div className="bg-[#635BFF]/30 p-4 rounded-lg border">
                    <h4 className="font-medium mb-2">Growth Forecasting</h4>
                    <p className="text-xs text-muted-foreground">
                      Use historical Stripe data to create revenue forecasts and growth projections for different
                      scenarios.
                    </p>
                  </div>
                  <div className="bg-[#635BFF]/30 p-4 rounded-lg border">
                    <h4 className="font-medium mb-2">Churn Analysis</h4>
                    <p className="text-xs text-muted-foreground">
                      Detailed analysis of customer churn patterns, including predictive indicators and retention
                      opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="prerequisites">
              <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
              <p className="mb-4">Before you begin integrating Stripe, make sure you have:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  A Stripe account (sign up at{" "}
                  <a
                    href="https://stripe.com"
                    className="text-[#635BFF] font-bold hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    stripe.com
                  </a>{" "}
                  if you don't have one)
                </li>
                <li>Admin access to your Circle+ account</li>
                <li>Basic understanding of payment processing concepts</li>
              </ul>
            </section>

            <section id="common-issues">
              <h2 className="text-2xl font-bold mb-4">Common Issues</h2>

              <div className="space-y-4 mb-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Payment failures</h3>
                  <p className="text-sm text-muted-foreground">
                    If payments are failing, check that you're using the correct API keys for your environment (test or
                    live) and that your payment form is correctly implemented.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Webhook errors</h3>
                  <p className="text-sm text-muted-foreground">
                    If webhooks aren't being received, verify that your endpoint is publicly accessible and that you've
                    configured the correct events in your Stripe Dashboard.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">3D Secure authentication</h3>
                  <p className="text-sm text-muted-foreground">
                    If you're having issues with 3D Secure authentication, make sure you're handling the additional
                    authentication step in your payment flow.
                  </p>
                </div>
              </div>
            </section>

            <section id="error-codes">
              <h2 className="text-2xl font-bold mb-4">Error Codes</h2>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Error Code</th>
                      <th className="text-left py-2 px-4">Description</th>
                      <th className="text-left py-2 px-4">Resolution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">card_declined</td>
                      <td className="py-2 px-4">The card was declined for an unknown reason</td>
                      <td className="py-2 px-4">Ask the customer to use a different card or contact their bank</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">insufficient_funds</td>
                      <td className="py-2 px-4">The card has insufficient funds to complete the purchase</td>
                      <td className="py-2 px-4">
                        Ask the customer to use a different card or add funds to their account
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">expired_card</td>
                      <td className="py-2 px-4">The card has expired</td>
                      <td className="py-2 px-4">
                        Ask the customer to use a different card or update their card information
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-mono">authentication_required</td>
                      <td className="py-2 px-4">The card requires authentication</td>
                      <td className="py-2 px-4">Implement 3D Secure authentication in your payment flow</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                For a complete list of error codes, refer to the{" "}
                <a
                  href="https://stripe.com/docs/error-codes"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stripe API documentation
                </a>
                .
              </p>
            </section>

            <section id="support" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Support</h2>

              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Circle+ Support</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    For issues related to the Stripe connection with Circle+, contact our support team:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Email: support@circleplus.io</li>
                    <li>
                      Support Portal:{" "}
                      <a href="#" className="text-primary hover:underline">
                        help.circleplus.io
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Stripe Support</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    For issues related to your Stripe account or the Stripe API, contact Stripe support:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>
                      Stripe Dashboard:{" "}
                      <a
                        href="https://dashboard.stripe.com/support"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        dashboard.stripe.com/support
                      </a>
                    </li>
                    <li>
                      Stripe Documentation:{" "}
                      <a
                        href="https://stripe.com/docs"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        stripe.com/docs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}