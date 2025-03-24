import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqs = [
    {
      question: "How do I connect my Stripe account?",
      answer:
        "To connect your Stripe account, go to Plug & Play > Stripe. Click 'Connect with Stripe' and follow the authentication process. Once completed, you'll be redirected back to your dashboard with Stripe successfully connected.",
    },
    {
      question: "Can I use multiple financial connections simultaneously?",
      answer:
        "Yes, you can connect and use multiple payment processors simultaneously. This allows you to offer various payment options to your customers or use different processors for different parts of your business.",
    },
    {
      question: "How do I sync my Asana projects?",
      answer:
        "After connecting your Asana account, go to the Asana connection settings and select which projects you want to sync. You can choose to sync all projects or select specific ones. Changes will automatically sync based on your update frequency settings.",
    },
    {
      question: "What should I do if an connection stops working?",
      answer:
        "If an connection stops working, first check our status page to see if there are any known issues. Then try disconnecting and reconnecting the connection. If the problem persists, check the specific connection's troubleshooting guide or contact our support team.",
    },
    {
      question: "Are there usage limits for connections?",
      answer:
        "Usage limits depend on your subscription plan. The Lite plan may have limits on API calls or synced records. The Elite plan typically has a higher or unlimited usage. You can view your current usage and limits in your account settings.",
    },
    {
      question: "How secure are the connections?",
      answer:
        "All integration connections use OAuth 2.0 for secure authentication without storing passwords. Data is encrypted in transit and at rest. We regularly audit our security practices and comply with industry standards like SOC 2 and GDPR.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem className="border-b border-[#5328f3]/40" key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-white font-semibold">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-white">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}