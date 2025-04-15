import Link from "next/link"
import { SiAsana, SiHubspot, SiStripe } from "react-icons/si"
import { Button } from "@/components/ui/button"
import FaqSection from "@/components/support/faq-section"
import SearchSection from "@/components/support/search-section"

export default function SupportPage() {

  return (
    <div className="min-h-screen">

      <main>
        {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-zinc-200 mb-4">Support Hub</h1>
          <p className="text-sm md:text-base text-zinc-400 mb-8 max-w-2xl mx-auto">
            Find help with our integrations, troubleshoot issues, and get in touch with our support team.
          </p>
          <SearchSection />
        </div>
      </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-zinc-200 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
              <FaqSection />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/support/asana" className="block group">
              <div className="border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md h-full flex flex-col" style={{ borderColor: "#F06A6A60" }}>
                <div className="p-6 flex items-center gap-4" style={{ backgroundColor: "#F06A6A30" }}>
                  <div className="p-3 rounded-md" style={{ backgroundColor: "#F06A6A" }}>
                    <SiAsana className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-xl text-white font-bold">Asana</h2>
                </div>
                <div className="p-6 flex-1">
                  <p className="text-muted-foreground mb-4">Manage projects, tasks, and team collaboration with our Asana integration.</p>
                  <Button className="w-full group-hover:bg-primary/90 transition-colors" style={{ backgroundColor: "#F06A6A" }}>
                    View Documentation
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/support/stripe" className="block group">
              <div className="border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md h-full flex flex-col" style={{ borderColor: "#635BFF60" }}>
                <div className="p-6 flex items-center gap-4" style={{ backgroundColor: "#635BFF30" }}>
                  <div className="p-3 rounded-md" style={{ backgroundColor: "#635BFF" }}>
                    <SiStripe className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-xl text-white font-bold">Stripe</h2>
                </div>
                <div className="p-6 flex-1">
                  <p className="text-muted-foreground mb-4">Process payments, manage subscriptions, and handle financial transactions securely.</p>
                  <Button className="w-full group-hover:bg-primary/90 transition-colors" style={{ backgroundColor: "#635BFF" }}>
                    View Documentation
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/support/hubspot" className="block group">
              <div className="border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md h-full flex flex-col" style={{ borderColor: "#FF7A5960" }}>
                <div className="p-6 flex items-center gap-4" style={{ backgroundColor: "#FF7A5930" }}>
                  <div className="p-3 rounded-md" style={{ backgroundColor: "#FF7A59" }}>
                    <SiHubspot className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-xl text-white font-bold">Hubspot</h2>
                </div>
                <div className="p-6 flex-1">
                  <p className="text-muted-foreground mb-4">Connect your CRM, marketing, and sales tools with our Hubspot integration.</p>
                  <Button className="w-full group-hover:bg-primary/90 transition-colors" style={{ backgroundColor: "#FF7A59" }}>
                    View Documentation
                  </Button>
                </div>
              </div>
            </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}