import Link from "next/link"
import { CreditCard, Trello, MessageSquare, BarChart, Users, Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import type { JSX } from "react";

interface IntegrationCardProps {
  name: string
  description: string
  icon: string
  docsUrl: string
}

export default function IntegrationCard({ name, description, icon, docsUrl }: IntegrationCardProps) {
  const getIcon = (): JSX.Element => {
    const iconProps = { className: "h-10 w-10 mb-4 text-primary" }

    switch (icon) {
      case "credit-card":
        return <CreditCard {...iconProps} />
      case "trello":
        return <Trello {...iconProps} />
      case "message-square":
        return <MessageSquare {...iconProps} />
      case "bar-chart":
        return <BarChart {...iconProps} />
      case "users":
        return <Users {...iconProps} />
      case "github":
        return <Github {...iconProps} />
      default:
        return <CreditCard {...iconProps} />
    }
  }

  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-1">
        {getIcon()}
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button variant="outline" asChild>
          <Link href={`/support/troubleshooting${docsUrl}`}>Troubleshooting</Link>
        </Button>
        <Button asChild>
          <Link href={docsUrl} className="flex items-center gap-1">
            Documentation <ExternalLink className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}