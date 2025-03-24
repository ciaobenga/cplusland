import Link from "next/link"
import { BarChart2, ArrowLeft, Users, Mail, RefreshCw, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import DocHeader from "@/components/support/doc-header"
import DocSidebar from "@/components/support/doc-sidebar"
import { SiHubspot } from "react-icons/si"
import { Header } from "@/sections/Header"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot Support - Circle+",
};

export default function HubspotDocumentation() {
  const hubspotColor = "#FF7A59"

  const sidebarItems = [
    {
      title: "Getting Started",
      links: [
        { title: "Overview", href: "#overview" },
        { title: "Prerequisites", href: "#prerequisites" },
        { title: "Installation", href: "#installation" },
      ],
    },
    {
      title: "Configuration",
      links: [
        { title: "Authentication", href: "#authentication" },
        { title: "Data Mapping", href: "#data-mapping" },
        { title: "Sync Settings", href: "#sync-settings" },
      ],
    },
    {
      title: "Features",
      links: [
        { title: "Contact Management", href: "#contact-management" },
        { title: "Deal Tracking", href: "#deal-tracking" },
        { title: "Marketing Automation", href: "#marketing-automation" },
      ],
    },
    {
      title: "Troubleshooting",
      links: [
        { title: "Common Issues", href: "#common-issues" },
        { title: "Error Messages", href: "#error-messages" },
        { title: "Support", href: "#support" },
      ],
    },
  ]

  const faqItems = [
    {
      question: "How do I sync my existing contacts with HubSpot?",
      answer:
        "After connecting your HubSpot account, go to the Connection settings and select 'Import Contacts'. You can choose to import all contacts or filter by specific criteria. The initial sync may take some time depending on the number of contacts.",
    },
    {
      question: "Can I customize which contact properties are synced?",
      answer:
        "Yes, in your Connection settings under 'Data Mapping', you can select which contact properties to sync between HubSpot and Circle+ Plug & Play. You can map standard fields and custom properties to ensure the right data is synchronized.",
    },
    {
      question: "How often does the Connection sync with HubSpot?",
      answer:
        "By default, the Connection syncs with HubSpot every 30 minutes. You can adjust the sync frequency in your Connection settings, with options ranging from 5 minutes to daily syncs. For critical data, we recommend setting a more frequent sync interval.",
    },
    {
      question: "What happens if I delete a contact in HubSpot?",
      answer:
        "When you delete a contact in HubSpot, the Connection will detect the change during the next sync. By default, the contact will be marked as deleted in Circle+ Plug & Play but not permanently removed. You can change this behavior in your Connection settings.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <DocHeader title="HubSpot" color={hubspotColor} icon={<SiHubspot className="h-6 w-6" />} />

      <div className="flex-1 container mx-auto px-4 flex flex-col md:flex-row gap-8 py-8">
        <DocSidebar items={sidebarItems} color={hubspotColor} className="md:w-64 shrink-0" />

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
                style={{ backgroundColor: `${hubspotColor}20` }}
              >
                <div className="p-3 rounded-md" style={{ backgroundColor: hubspotColor }}>
                  <SiHubspot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">HubSpot</h3>
                  <p className="text-sm text-muted-foreground">CRM, marketing, and sales automation</p>
                </div>
              </div>

              <p className="text-base mb-4">
                Our HubSpot Connection connects your CRM, marketing, and sales data between HubSpot and Circle+ Plug & Play
                for a unified workflow.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="border rounded-lg p-4">
                  <Users className="h-6 w-6 mb-2 text-primary" />
                  <h3 className="font-medium mb-1">Contact Sync</h3>
                  <p className="text-sm text-muted-foreground">Bidirectional contact and company synchronization</p>
                </div>
                <div className="border rounded-lg p-4">
                  <Mail className="h-6 w-6 mb-2 text-primary" />
                  <h3 className="font-medium mb-1">Marketing Tools</h3>
                  <p className="text-sm text-muted-foreground">Email campaigns, forms, and lead nurturing</p>
                </div>
                <div className="border rounded-lg p-4">
                  <RefreshCw className="h-6 w-6 mb-2 text-primary" />
                  <h3 className="font-medium mb-1">Real-time Sync</h3>
                  <p className="text-sm text-muted-foreground">Automatic synchronization of CRM data</p>
                </div>
              </div>
            </section>

            <section id="prerequisites">
              <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
              <p className="mb-4">Before you begin integrating HubSpot, make sure you have:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  A HubSpot account (sign up at{" "}
                  <a
                    href="https://hubspot.com"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    hubspot.com
                  </a>{" "}
                  if you don't have one)
                </li>
                <li>Admin access to your Circle+ account</li>
                <li>Super admin or admin access to your HubSpot account</li>
              </ul>
            </section>

            <section id="installation">
              <h2 className="text-2xl font-bold mb-4">Installation</h2>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Step 1: Connect your HubSpot account</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    From your Circle+ account, navigate to Plug & Play &gt; HubSpot and click "Connect with
                    HubSpot".
                  </p>
                  <Button style={{ backgroundColor: hubspotColor }}>Connect with HubSpot</Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Step 2: Authorize access</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll be redirected to HubSpot to authorize the connection. Review the permissions and click
                    "Connect app".
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Step 3: Configure data mapping</h3>
                  <p className="text-sm text-muted-foreground">
                    After connecting, you'll be returned to Plug & Play where you can configure which data to sync and
                    how it should be mapped between platforms.
                  </p>
                </div>
              </div>
            </section>

            <section id="authentication">
              <h2 className="text-2xl font-bold mb-4">Authentication</h2>
              <p className="mb-4">
                The HubSpot Connection uses OAuth 2.0 for secure authentication. This allows Circle+ to access
                your HubSpot data without storing your password.
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">OAuth Scopes</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    The Connection requests the following permissions:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Contacts: Read and write access to contacts and companies</li>
                    <li>CRM: Access to deals, tickets, and pipelines</li>
                    <li>Marketing: Access to email campaigns, forms, and lists</li>
                    <li>Content: Access to website pages and blog content</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Token Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Your OAuth tokens are securely stored and automatically refreshed when needed. You can revoke access
                    at any time by disconnecting the Connection in the Plug & Play page or by removing the app
                    from your HubSpot account settings.
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 border rounded-lg bg-amber-50 text-amber-800 border-amber-200">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <p className="text-sm">
                  If you suspect unauthorized access, immediately disconnect the Connection and contact our support
                  team.
                </p>
              </div>
            </section>

            <section id="data-mapping">
              <h2 className="text-2xl font-bold mb-4">Data Mapping</h2>
              <p className="mb-4">Configure how data is mapped between HubSpot and Circle+.</p>

              <div className="space-y-4 mb-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Contact properties</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Map standard and custom contact properties between platforms:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Standard fields (name, email, phone, etc.)</li>
                    <li>Custom properties</li>
                    <li>Lifecycle stages</li>
                    <li>Lead scoring</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Company properties</h3>
                  <p className="text-sm text-muted-foreground mb-2">Map company data between platforms:</p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Company name and details</li>
                    <li>Industry and size</li>
                    <li>Custom company properties</li>
                    <li>Parent/child relationships</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Deal properties</h3>
                  <p className="text-sm text-muted-foreground mb-2">Map deal and opportunity data:</p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Deal stages and pipelines</li>
                    <li>Deal amounts and currencies</li>
                    <li>Close dates and probabilities</li>
                    <li>Custom deal properties</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="sync-settings">
              <h2 className="text-2xl font-bold mb-4">Sync Settings</h2>
              <p className="mb-4">Configure how and when data is synchronized between HubSpot and Circle+.</p>

              <div className="space-y-4 mb-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Sync frequency</h3>
                  <p className="text-sm text-muted-foreground mb-2">Configure how often your data syncs:</p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Real-time (via webhooks)</li>
                    <li>Every 5 minutes</li>
                    <li>Every 30 minutes (default)</li>
                    <li>Hourly</li>
                    <li>Daily</li>
                    <li>Manual sync only</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Sync direction</h3>
                  <p className="text-sm text-muted-foreground mb-2">Choose how changes are synchronized:</p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Bidirectional (changes in either platform sync to the other)</li>
                    <li>HubSpot to Circle+ only</li>
                    <li>Circle+ to HubSpot only</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Initial sync</h3>
                  <p className="text-sm text-muted-foreground">
                    When you first connect HubSpot, you can choose to import existing data or start with a clean slate.
                    If you import existing data, you can specify filters to limit which records are imported.
                  </p>
                </div>
              </div>
            </section>

            <section id="contact-management">
              <h2 className="text-2xl font-bold mb-4">Contact Management</h2>
              <p className="mb-4">Synchronize contacts and companies between HubSpot and Circle+ Plug & Play.</p>

              <Tabs defaultValue="contacts">
                <TabsList className="mb-4">
                  <TabsTrigger value="contacts">Contacts</TabsTrigger>
                  <TabsTrigger value="companies">Companies</TabsTrigger>
                  <TabsTrigger value="lists">Lists</TabsTrigger>
                </TabsList>

                <TabsContent value="contacts" className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Manage contact records across platforms with bidirectional synchronization.
                  </p>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Contact synchronization features</h3>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Create, update, and delete contacts in either platform</li>
                      <li>Sync standard and custom contact properties</li>
                      <li>Track contact activity and engagement</li>
                      <li>Manage contact lifecycle stages</li>
                      <li>Sync contact owner assignments</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="companies" className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Synchronize company records and their relationships with contacts.
                  </p>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Company synchronization features</h3>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Create, update, and delete companies in either platform</li>
                      <li>Sync standard and custom company properties</li>
                      <li>Maintain contact-to-company associations</li>
                      <li>Sync parent/child company relationships</li>
                      <li>Track company engagement and activity</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="lists" className="space-y-4">
                  <p className="text-sm text-muted-foreground">Manage HubSpot lists and segments in Circle+ Plug & Play.</p>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">List management features</h3>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Sync static and dynamic lists from HubSpot</li>
                      <li>Create and manage lists in Plug & Play</li>
                      <li>Use lists for targeted marketing campaigns</li>
                      <li>Track list membership changes</li>
                      <li>Apply list-based automation rules</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </section>

            <section id="deal-tracking">
              <h2 className="text-2xl font-bold mb-4">Deal Tracking</h2>
              <p className="mb-4">
                Synchronize deals, pipelines, and sales activities between HubSpot and Circle+ Plug & Play.
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Deal synchronization</h3>
                  <p className="text-sm text-muted-foreground mb-2">Key deal features that are synchronized:</p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Deal creation and updates</li>
                    <li>Deal stages and pipeline progression</li>
                    <li>Deal amounts and currencies</li>
                    <li>Close dates and probabilities</li>
                    <li>Deal associations (contacts, companies)</li>
                    <li>Custom deal properties</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Pipeline management</h3>
                  <p className="text-sm text-muted-foreground">
                    View and manage HubSpot pipelines in Plug & Play, including custom pipelines and stages. Changes to
                    pipeline structure in HubSpot will be reflected in Plug & Play during the next sync.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Sales activities</h3>
                  <p className="text-sm text-muted-foreground mb-2">Track and manage sales activities:</p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Calls, emails, and meetings</li>
                    <li>Task creation and completion</li>
                    <li>Notes and attachments</li>
                    <li>Activity timelines</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="marketing-automation">
              <h2 className="text-2xl font-bold mb-4">Marketing Automation</h2>
              <p className="mb-4">Integrate HubSpot's marketing tools with Plug & Play.</p>

              <div className="space-y-4 mb-6">

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Forms and landing pages</h3>
                  <p className="text-sm text-muted-foreground mb-2">Integrate HubSpot forms and landing pages:</p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Embed HubSpot forms in Plug & Play pages</li>
                    <li>Sync form submissions to both platforms</li>
                    <li>Track conversion rates and performance</li>
                    <li>Create and manage forms in either platform</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Workflows and automation</h3>
                  <p className="text-sm text-muted-foreground mb-2">Leverage HubSpot's automation capabilities:</p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Trigger HubSpot workflows from Plug & Play</li>
                    <li>Create automated sequences based on user behavior</li>
                    <li>Set up lead nurturing campaigns</li>
                    <li>Automate task creation and assignment</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="common-issues">
              <h2 className="text-2xl font-bold mb-4">Common Issues</h2>

              <div className="space-y-4 mb-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Sync delays</h3>
                  <p className="text-sm text-muted-foreground">
                    If changes aren't syncing as expected, check your sync frequency settings and verify that the
                    connection has the necessary permissions. For large data sets, initial syncs may take longer to
                    complete.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Authentication errors</h3>
                  <p className="text-sm text-muted-foreground">
                    If you're experiencing authentication errors, try disconnecting and reconnecting the connection.
                    This will refresh your OAuth tokens and ensure that the connection has the necessary permissions.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Data mapping conflicts</h3>
                  <p className="text-sm text-muted-foreground">
                    If you encounter data mapping conflicts, review your field mappings in the connection settings.
                    Ensure that field types are compatible and that required fields are properly mapped between
                    platforms.
                  </p>
                </div>
              </div>
            </section>

            <section id="error-messages">
              <h2 className="text-2xl font-bold mb-4">Error Messages</h2>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4">Error Message</th>
                      <th className="text-left py-2 px-4">Description</th>
                      <th className="text-left py-2 px-4">Resolution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">Authentication failed</td>
                      <td className="py-2 px-4">The OAuth token is invalid or expired</td>
                      <td className="py-2 px-4">Disconnect and reconnect the connection</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">Property not found</td>
                      <td className="py-2 px-4">A mapped property no longer exists in HubSpot</td>
                      <td className="py-2 px-4">Update your data mapping in the connection settings</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">Rate limit exceeded</td>
                      <td className="py-2 px-4">Too many API requests in a short period</td>
                      <td className="py-2 px-4">Reduce sync frequency or optimize API usage</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-mono">Duplicate record</td>
                      <td className="py-2 px-4">Attempting to create a record that already exists</td>
                      <td className="py-2 px-4">Configure duplicate handling in the connection settings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="support" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Support</h2>

              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Plug & Play Support</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    For issues related to the HubSpot connection with Plug & Play, contact our support team:
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
                  <h3 className="font-medium mb-2">HubSpot Support</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    For issues related to your HubSpot account or the HubSpot API, contact HubSpot support:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>
                      HubSpot Help:{" "}
                      <a
                        href="https://help.hubspot.com"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        help.hubspot.com
                      </a>
                    </li>
                    <li>
                      HubSpot Developer Documentation:{" "}
                      <a
                        href="https://developers.hubspot.com"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        developers.hubspot.com
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