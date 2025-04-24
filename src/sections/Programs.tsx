import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Rocket, ArrowRight, CheckCircle, Zap, Clock } from "lucide-react"
import { IconJetpack, IconSparkles } from '@tabler/icons-react';
import Link from "next/link"

export default function AlternativeOffersSection() {
  return (
    <section className="w-full pt-8 pb-16 text-white">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Badge variant="default" className="mb-6 bg-[linear-gradient(120deg,#b400ff,#49f9ff)] border-none text-black px-3 py-1">
            <IconSparkles className="h-3.5 w-3.5 mr-1" />
            Special Programs
          </Badge>
          <p className="text-zinc-300 text-lg">
            We're offering exclusive benefits to support the next generation of innovators and entrepreneurs.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Accelerator Offer */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[rgb(190,8,255)] rounded-2xl blur opacity-15 transition duration-300"></div>
            <div className="relative bg-black backdrop-blur rounded-2xl overflow-hidden">
              <div className="h-3 bg-[rgb(190,8,255)]"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(190,8,255,0.15)] flex items-center justify-center mr-4">
                    <IconJetpack className="h-6 w-6 text-[rgb(190,8,255)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">For Techstars</h3>
                    <p className="text-[rgb(200,100,255)] font-medium">3 Months Free</p>
                  </div>
                </div>

                <p className="text-zinc-300 mb-6">
                  Graduated from the Techstars accelerator program? Get 3 months free as a Techstars alum.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Full access to all premium features",
                    "Dedicated onboarding support",
                    "Priority customer service",
                    "No credit card required to start",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[rgb(190,8,255)] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-200">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full group bg-[rgb(190,8,255)] hover:bg-[rgba(190,8,255,0.8)] text-white border-0"
                  size="lg"
                  asChild
                >
                  <Link href="https://app.circleplus.io/programs?category=ACCELERATOR">
                    Verify Techstars Status
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Student Offer */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[rgb(4,249,255)] rounded-2xl blur opacity-15 transition duration-300"></div>
            <div className="relative bg-black rounded-2xl overflow-hidden">
              <div className="h-3 bg-[rgb(4,249,255)]"></div>
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(4,249,255,0.15)] flex items-center justify-center mr-4">
                    <GraduationCap className="h-6 w-6 text-[rgb(4,249,255)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">For Princeton</h3>
                    <p className="text-[rgb(100,240,255)] font-medium">1 Month Free</p>
                  </div>
                </div>

                <p className="text-zinc-300 mb-6">
                  Currently enrolled in Princeton University? Kickstart your startup with 1 month free access.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Access to all standard features",
                    "Learning resources and tutorials",
                    "Student community access",
                    "Verify with your .edu email",
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[rgb(4,249,255)] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-200">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full group bg-zinc-700 text-zinc-300 border-0 cursor-not-allowed"
                  size="lg"
                  disabled
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Coming Soon
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Program FAQs</h3>
          <p className="text-zinc-400 mb-8">Everything you need to know about our special programs</p>

          <div className="grid gap-4 text-left">
            {[
              {
                question: "How do you verify my Techstars status?",
                answer:
                  "We verify Techstars alumni through your company email associated with your Techstars program. Verification typically takes between 2 - 24hrs.",
              },
              {
                question: "What happens after my free period?",
                answer:
                  "After your free period ends, you can choose to continue with one of our regular plans. We'll send you a reminder before your free period expires. No automatic charges.",
              },
              {
                question: "When will the Princeton program be available?",
                answer:
                  "We're currently finalizing our partnership with Princeton University. The program will be available to Princeton University students starting May 1st, 2025.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-zinc-800/50 rounded-xl p-6">
                <h4 className="font-bold text-white mb-2">{faq.question}</h4>
                <p className="text-zinc-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}