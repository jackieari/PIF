import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "What is PIF Token?",
    answer:
      "PIF Token is a decentralized philanthropy platform that empowers token holders to vote on and fund charitable campaigns. Our mission is to bring transparency and democracy to donations using blockchain technology.",
  },
  {
    question: "How does the voting process work?",
    answer:
      "Every two weeks, a new voting round begins. PIF Token holders can use their tokens to vote for their preferred campaigns. The campaigns with the most votes receive funding from the community treasury.",
  },
  {
    question: "How can I get PIF Tokens?",
    answer:
      "You can acquire PIF Tokens through various decentralized exchanges (DEXs). We also have partnerships and community programs where you can earn tokens by participating.",
  },
  {
    question: "Are there any fees for donating or voting?",
    answer:
      "The platform is designed to be as low-cost as possible. While standard blockchain transaction fees (gas fees) apply, PIF Token itself does not charge any additional fees for voting or donating.",
  },
  {
    question: "How can my organization apply for funding?",
    answer:
      "Charities and non-profits can submit a proposal through our partner portal. Proposals are reviewed by the community and, if approved, are added to a future voting round for funding consideration.",
  },
]

export default function FaqSection() {
  return (
    <section className="bg-[#F7F5F2] py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b border-gray-300">
              <AccordionTrigger className="py-6 text-lg text-left text-gray-900 hover:no-underline">
                <div className="flex items-center gap-4">
                  <Plus className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6 text-base text-gray-600 pl-10">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
