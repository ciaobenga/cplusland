import Link from "next/link"
import { CreditCard, Trello, BarChart2 } from "lucide-react"
import { SiAsana, SiHubspot, SiStripe } from "react-icons/si"
import { Button } from "@/components/ui/button"
import FaqSection from "@/components/support/faq-section"
import SearchSection from "@/components/support/search-section"

export default function SupportPage() {
  const featuredIntegrations = [
    {
      id: "asana",
      name: "Asana",
      icon: SiAsana,
      color: "#F06A6A",
      description: "Manage projects, tasks, and team collaboration with our Asana integration.",
      path: "/support/asana",
    },
    {
      id: "stripe",
      name: "Stripe",
      icon: SiStripe,
      color: "#635BFF",
      description: "Process payments, manage subscriptions, and handle financial transactions securely.",
      path: "/support/stripe",
    },
    {
      id: "hubspot",
      name: "Hubspot",
      icon: SiHubspot,
      color: "#FF7A59",
      description: "Connect your CRM, marketing, and sales tools with our Hubspot integration.",
      path: "/support/hubspot",
    },
  ]

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
              {featuredIntegrations.map((integration) => (
                <Link href={integration.path} key={integration.id} className="block group">
                  <div className="border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md h-full flex flex-col" style={{ borderColor: `${integration.color}60` }}>
                    <div className="p-6 flex items-center gap-4" style={{ backgroundColor: `${integration.color}30` }}>
                      <div className="p-3 rounded-md" style={{ backgroundColor: integration.color }}>
                        <integration.icon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-xl text-white font-bold">{integration.name}</h2>
                    </div>
                    <div className="p-6 flex-1">
                      <p className="text-muted-foreground mb-4">{integration.description}</p>
                      <Button
                        className="w-full group-hover:bg-primary/90 transition-colors"
                        style={{ backgroundColor: integration.color }}
                      >
                        View Documentation
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}