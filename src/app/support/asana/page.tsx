import Link from "next/link"
import { Trello, ArrowLeft, CheckSquare, Users, RefreshCw, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import DocSidebar from "@/components/support/doc-sidebar"
import DocHeader from "@/components/support/doc-header"
import { Header } from "@/sections/Header"
import { SiAsana } from "react-icons/si"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asana Support - Circle+",
};

export default function AsanaDocumentation() {
  const asanaColor = "#F06A6A"

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
        { title: "Workspace Selection", href: "#workspace-selection" },
        { title: "Project Mapping", href: "#project-mapping" },
      ],
    },
    {
      title: "Features",
      links: [
        { title: "Task Management", href: "#task-management" },
        { title: "Project Sync", href: "#project-sync" },
        { title: "Team Collaboration", href: "#team-collaboration" },
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
      question: "How do I connect multiple Asana workspaces?",
      answer:
        "You can connect multiple Asana workspaces by going to your Circle+ desk, navigating to Plug & Play > Asana, and clicking 'Add Workspace'. You'll need to authorize each workspace separately. Once connected, you can switch between workspaces in the connection settings.",
    },
    {
      question: "Can I sync tasks from multiple projects?",
      answer:
        "Yes, you can sync tasks from multiple Asana projects. In your connection settings, you can select which projects to sync with Circle+. You can choose to sync all projects in a workspace or select specific ones.",
    },
    {
      question: "How often does the connection sync with Asana?",
      answer:
        "By default, the connection syncs with Asana every 15 minutes. You can adjust the sync frequency in your connection settings, with options ranging from real-time to daily syncs. Real-time syncing is recommended for active projects that require immediate updates.",
    },
    {
      question: "Can I create Asana tasks from Circle+?",
      answer:
        "Yes, you can create Asana tasks directly from Circle+. Use the 'Create Task' button in your desk or use our API to programmatically create tasks. All tasks created through Circle+ will automatically sync with your Asana workspace.",
    },
    {
      question: "What happens if I delete a task in Asana?",
      answer:
        "When you delete a task in Asana, the connection will detect the change during the next sync and mark the task as deleted in Circle+. Depending on your settings, you can choose to permanently delete the task in Circle+ or keep a record of it marked as deleted.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <DocHeader title="Asana" color={asanaColor} icon={<SiAsana className="h-6 w-6" />} />

      <div className="flex-1 container mx-auto px-4 flex flex-col md:flex-row gap-8 py-8">
        <DocSidebar items={sidebarItems} color={asanaColor} className="md:w-64 shrink-0" />

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
                style={{ backgroundColor: `${asanaColor}20` }}
              >
                <div className="p-3 rounded-md" style={{ backgroundColor: asanaColor }}>
                  <SiAsana className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">Asana</h3>
                  <p className="text-sm text-muted-foreground">Project management and team collaboration</p>
                </div>
              </div>

              <p className="text-lg mb-4">
                Our Asana connection allows you to synchronize projects, tasks, and team collaboration between Asana
                and Circle+.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="border rounded-lg p-4">
                  <CheckSquare className="h-6 w-6 mb-2" style={{ color: asanaColor }} />
                  <h3 className="font-medium mb-1">Task Management</h3>
                  <p className="text-sm text-muted-foreground">Sync and manage tasks across platforms</p>
                </div>
                <div className="border rounded-lg p-4">
                  <Users className="h-6 w-6 mb-2" style={{ color: asanaColor }} />
                  <h3 className="font-medium mb-1">Team Collaboration</h3>
                  <p className="text-sm text-muted-foreground">Keep your team in sync with bidirectional updates</p>
                </div>
                <div className="border rounded-lg p-4">
                  <RefreshCw className="h-6 w-6 mb-2" style={{ color: asanaColor }} />
                  <h3 className="font-medium mb-1">Real-time Sync</h3>
                  <p className="text-sm text-muted-foreground">Automatic synchronization of project data</p>
                </div>
              </div>
            </section>

            <section id="prerequisites">
              <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
              <p className="mb-4">Before you begin integrating Asana, make sure you have:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  An Asana account (sign up at{" "}
                  <a
                    href="https://asana.com"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    asana.com
                  </a>{" "}
                  if you don't have one)
                </li>
                <li>Admin access to your Circle+ account</li>
                <li>Access to the Asana workspace you want to connect</li>
              </ul>
            </section>

            <section id="installation">
              <h2 className="text-2xl font-bold mb-4">Installation</h2>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Step 1: Connect your Asana account</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    From your Circle+ desk, navigate to Plug & Play &gt; Asana and click "Connect with Asana".
                  </p>
                  <Button style={{ backgroundColor: asanaColor }}>Connect with Asana</Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Step 2: Authorize access</h3>
                  <p className="text-sm text-muted-foreground">
                    You'll be redirected to Asana to authorize the connection. Review the permissions and click "Allow".
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Step 3: Select workspace and projects</h3>
                  <p className="text-sm text-muted-foreground">
                    After connecting, you'll be returned to Circle+ where you can select which Asana workspace and
                    projects to sync.
                  </p>
                </div>
              </div>
            </section>

            <section id="authentication">
              <h2 className="text-2xl font-bold mb-4">Authentication</h2>
              <p className="mb-4">
                The Asana connection uses OAuth 2.0 for secure authentication. This allows Circle+ to access your
                Asana data without storing your password.
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">OAuth Scopes</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    The connection requests the following permissions:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Read and write access to tasks and projects</li>
                    <li>Read access to teams and workspaces</li>
                    <li>Read access to user information</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Token Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Your OAuth tokens are securely stored and automatically refreshed when needed. You can revoke access
                    at any time by disconnecting the connection in your Circle+ desk or by removing the app
                    from your Asana account settings.
                  </p>
                </div>
              </div>

              <div className="flex items-center p-4 border rounded-lg bg-amber-50 text-amber-800 border-amber-200">
                <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <p className="text-sm">
                  If you suspect unauthorized access, immediately disconnect the connection and contact our support
                  team.
                </p>
              </div>
            </section>

            <section id="workspace-selection">
              <h2 className="text-2xl font-bold mb-4">Workspace Selection</h2>
              <p className="mb-4">
                After connecting your Asana account, you'll need to select which workspace to use with Circle+.
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Selecting a workspace</h3>
                  <p className="text-sm text-muted-foreground">
                    In your connection settings, you'll see a list of all workspaces you have access to. Select the
                    workspace you want to use with Circle+.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Multiple workspaces</h3>
                  <p className="text-sm text-muted-foreground">
                    If you need to connect multiple workspaces, you can add additional connections in your connection
                    settings. Each workspace connection can have its own configuration.
                  </p>
                </div>
              </div>
            </section>

            <section id="project-mapping">
              <h2 className="text-2xl font-bold mb-4">Project Mapping</h2>
              <p className="mb-4">Map Asana projects to Circle+ projects for seamless task synchronization.</p>

              <div className="space-y-4 mb-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Selecting projects to sync</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    After selecting a workspace, you can choose which projects to sync:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Sync all projects in the workspace</li>
                    <li>Select specific projects to sync</li>
                    <li>Exclude certain projects from syncing</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Project mapping options</h3>
                  <p className="text-sm text-muted-foreground mb-2">For each project, you can configure:</p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Sync direction (one-way or bidirectional)</li>
                    <li>Task status mapping</li>
                    <li>Assignee mapping</li>
                    <li>Custom field mapping</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="task-management">
              <h2 className="text-2xl font-bold mb-4">Task Management</h2>
              <p className="mb-4">Synchronize tasks between Asana and Circle+.</p>

              <Tabs defaultValue="create">
                <TabsList className="mb-4">
                  <TabsTrigger value="create">Creating Tasks</TabsTrigger>
                  <TabsTrigger value="update">Updating Tasks</TabsTrigger>
                  <TabsTrigger value="delete">Deleting Tasks</TabsTrigger>
                </TabsList>

                <TabsContent value="create" className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Create tasks in either Asana or Circle+ and have them automatically sync to the other platform.
                  </p>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Creating a task in Circle+</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      1. Navigate to the project in your Circle+ desk
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      2. Click "Add Task" and fill in the task details
                    </p>
                    <p className="text-sm text-muted-foreground">
                      3. The task will automatically sync to Asana during the next sync cycle
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="update" className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Update task details in either platform and have the changes sync automatically.
                  </p>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Supported task updates</h3>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Task name and description</li>
                      <li>Due dates and times</li>
                      <li>Assignees</li>
                      <li>Status and completion</li>
                      <li>Tags and custom fields</li>
                      <li>Subtasks</li>
                      <li>Comments and attachments</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="delete" className="space-y-4">
                  <p className="text-sm text-muted-foreground">Handle task deletion across platforms.</p>

                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Deletion behavior</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      You can configure how task deletions are handled in your connection settings:
                    </p>
                    <ul className="list-disc pl-6 text-sm text-muted-foreground">
                      <li>Delete in both platforms</li>
                      <li>Mark as deleted but keep the record</li>
                      <li>Archive instead of delete</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </section>

            <section id="project-sync">
              <h2 className="text-2xl font-bold mb-4">Project Sync</h2>
              <p className="mb-4">Keep your Asana projects in sync with Circle+.</p>

              <div className="space-y-4 mb-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Sync frequency</h3>
                  <p className="text-sm text-muted-foreground mb-2">Configure how often your projects sync:</p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>Real-time (via webhooks)</li>
                    <li>Every 15 minutes (default)</li>
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
                    <li>Asana to Circle+ only</li>
                    <li>Circle+ to Asana only</li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Initial sync</h3>
                  <p className="text-sm text-muted-foreground">
                    When you first connect a project, you can choose to import existing tasks from Asana or start with a
                    clean slate. If you import existing tasks, you can specify a date range to limit which tasks are
                    imported.
                  </p>
                </div>
              </div>
            </section>

            <section id="team-collaboration">
              <h2 className="text-2xl font-bold mb-4">Team Collaboration</h2>
              <p className="mb-4">
                Enhance team collaboration with synchronized comments, attachments, and assignments.
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Comments and discussions</h3>
                  <p className="text-sm text-muted-foreground">
                    Comments added to tasks in either platform can be synchronized, allowing team members to collaborate
                    regardless of which platform they're using.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Attachments</h3>
                  <p className="text-sm text-muted-foreground">
                    Files attached to tasks in Asana can be accessed in Circle+ and vice versa. Supported file
                    types include images, documents, spreadsheets, and PDFs.
                  </p>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">User mapping</h3>
                  <p className="text-sm text-muted-foreground">
                    Map Asana users to Circle+ users to ensure that task assignments and mentions are correctly
                    synchronized between platforms.
                  </p>
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
                    connection has the necessary permissions. You can also try triggering a manual sync from your
                    connection settings.
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
                  <h3 className="font-medium mb-2">Missing tasks or projects</h3>
                  <p className="text-sm text-muted-foreground">
                    If tasks or projects are missing, check your project mapping settings to ensure that the correct
                    projects are selected for syncing. Also verify that any filters or date ranges aren't excluding the
                    missing items.
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
                      <td className="py-2 px-4 font-mono">Project not found</td>
                      <td className="py-2 px-4">The Asana project no longer exists or is inaccessible</td>
                      <td className="py-2 px-4">Check project permissions or select a different project</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono">Rate limit exceeded</td>
                      <td className="py-2 px-4">Too many API requests in a short period</td>
                      <td className="py-2 px-4">Reduce sync frequency or optimize API usage</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-mono">Sync conflict</td>
                      <td className="py-2 px-4">Changes made to the same task in both platforms</td>
                      <td className="py-2 px-4">Resolve the conflict manually in the connection settings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="support" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Support</h2>

              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Circle+ Support</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    For issues related to the Asana connection with Circle+, contact our support team:
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
                  <h3 className="font-medium mb-2">Asana Support</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    For issues related to your Asana account or the Asana API, contact Asana support:
                  </p>
                  <ul className="list-disc pl-6 text-sm text-muted-foreground">
                    <li>
                      Asana Help:{" "}
                      <a
                        href="https://asana.com/guide"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        asana.com/guide
                      </a>
                    </li>
                    <li>
                      Asana Developer Documentation:{" "}
                      <a
                        href="https://developers.asana.com/docs"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        developers.asana.com/docs
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