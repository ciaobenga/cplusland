"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiAsana, SiBasecamp, SiCalendly, SiGoogle, SiGoogleanalytics, SiGooglesheets, SiHubspot, SiNotion, SiQuickbooks, SiSalesforce, SiSlack, SiStripe, SiXero, SiZoho } from "react-icons/si"
import { MondayLogoBlack } from "@/components/monday-logo-black"

// Add shimmer effect styles
const shimmerStyles = `
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .shimmer-container {
    position: relative;
    overflow: hidden;
  }

  .shimmer {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    width: 200%;
    height: 100%;
    animation: shimmer 2s infinite;
    transition: opacity 0.3s ease;
  }
`

// Add the styles to the document
if (typeof document !== "undefined") {
  const style = document.createElement("style")
  style.textContent = shimmerStyles
  document.head.appendChild(style)
}

interface Integration {
  id: string
  name: string
  description: string
  icon: React.ElementType
  color: string
  secondaryColor: string
}

const integrations: Integration[] = [
  {
    id: "google-sheets",
    name: "Google Sheets",
    description: "Connect and sync data with Google Sheets to create powerful spreadsheets and reports.",
    icon: SiGooglesheets,
    color: "#0F9D58",
    secondaryColor: "#13C770",
  },
  {
    id: "quickbooks",
    name: "QuickBooks",
    description: "Integrate with QuickBooks for seamless accounting and financial management.",
    icon: SiQuickbooks,
    color: "#2CA01C",
    secondaryColor: "#38CA23",
  },
  {
    id: "asana",
    name: "Asana",
    description: "Connect with Asana to manage projects and tasks more efficiently.",
    icon: SiAsana,
    color: "#F06A6A",
    secondaryColor: "#F78A87",
  },
  {
    id: "xero",
    name: "Xero",
    description: "Integrate with Xero for comprehensive accounting and financial solutions.",
    icon: SiXero,
    color: "#13B5EA",
    secondaryColor: "#0077C5",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    description: "Connect with HubSpot for advanced CRM and marketing automation.",
    icon: SiHubspot,
    color: "#FF7A59",
    secondaryColor: "#FFA500",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    description: "Integrate with Salesforce for powerful CRM and customer management.",
    icon: SiSalesforce,
    color: "#00A1E0",
    secondaryColor: "#58B5E7",
  },
  {
    id: "google-analytics",
    name: "Google Analytics",
    description: "Connect with Google Analytics to track and analyze website traffic and user behavior.",
    icon: SiGoogleanalytics,
    color: "#E37400",
    secondaryColor: "#EFA06A",
  },
  {
    id: "stripe",
    name: "Stripe",
    description: "Integrate with Stripe for secure and flexible payment processing.",
    icon: SiStripe,
    color: "#008CDD",
    secondaryColor: "#8800DD",
  },
  {
    id: "notion",
    name: "Notion",
    description: "Connect with Notion for collaborative workspace and knowledge management.",
    icon: SiNotion,
    color: "#FFFFFF",
    secondaryColor: "#555555",
  },
  {
    id: "slack",
    name: "Slack",
    description: "Integrate with Slack for real-time messaging and team collaboration.",
    icon: SiSlack,
    color: "#7F587E",
    secondaryColor: "#4A154B",
  },
  {
    id: "basecamp",
    name: "Basecamp",
    description: "Connect with Basecamp for project management and team communication.",
    icon: SiBasecamp,
    color: "#FFFFFF",
    secondaryColor: "#59666c",
  },
  {
    id: "zoho",
    name: "Zoho",
    description: "Integrate with Zoho for business applications and productivity tools.",
    icon: SiZoho,
    color: "#E42527",
    secondaryColor: "#b91e20",
  },
  {
    id: "calendly",
    name: "Calendly",
    description: "Connect with Calendly for automated scheduling and appointment management.",
    icon: SiCalendly,
    color: "#619cc0",
    secondaryColor: "#2137a8",
  },
  {
    id: "mondaydotcom",
    name: "Monday",
    description: "Integrate with Monday for visual work management and team collaboration.",
    icon: MondayLogoBlack,
    color: "#FFFFFF",
    secondaryColor: "#555000",
  },
]

export function IntegrationCards() {
  return (
    <div className="container mx-auto px-4 py-20 relative bg-transparent">

      <div className="relative mb-20">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-muted-foreground/20"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <span className="px-8 text-5xl font-bold tracking-tight text-white">
            Seamless{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#BE08FF] to-[#04F9FF]">
              Connections
            </span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {integrations.map((integration) => (
          <IntegrationCard key={integration.id} integration={integration} />
        ))}
      </div>
    </div>
  )
}

function IntegrationCard({ integration }: { integration: Integration }) {
  const Icon = integration.icon

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg bg-white/5 backdrop-blur-sm border-none hover:scale-[1.02]">
      <div
        className="h-2"
        style={{ background: `linear-gradient(to right, ${integration.color}, ${integration.secondaryColor})` }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(120,120,120,0.1),transparent)]"></div>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div
            className="relative flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundColor: `${integration.color}15`,
              boxShadow: `0 0 20px ${integration.color}20`,
            }}
          >
            <div className="shimmer-container">
              <Icon className="h-6 w-6 relative z-10" style={{ color: integration.color }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100"></div>
            </div>
          </div>
          <CardTitle className="text-xl text-white font-semibold tracking-tight">{integration.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed text-muted-foreground line-clamp-3 h-[4.5rem] overflow-hidden">
          {integration.description}
        </CardDescription>
        <div className="mt-4">
          <a href="https://app.circleplus.io/plug-&-play">
               <button
                    className="shimmer-container relative overflow-hidden group-hover:bg-opacity-10 transition-colors duration-300 text-xs font-medium rounded-md border px-3 py-1.5 flex items-center"
                    style={{
                         borderColor: integration.color,
                         color: integration.color,
                    }}
               >
                    <span className="relative z-10 flex items-center">
                         Connect
                         <svg className="ml-1.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                         </svg>
                    </span>
                    <div className="shimmer absolute inset-0 opacity-0 group-hover:opacity-100"></div>
               </button>
          </a>
        </div>
      </CardContent>
    </Card>
  )
}