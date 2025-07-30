import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "What sizes do you offer?",
    answer: "We offer a comprehensive range of sizes from US 5 to US 14 for most of our shoe styles. We also carry wide and narrow width options for select models. Each product page includes a detailed size chart to help you find the perfect fit."
  },
  {
    id: "item-2",
    question: "What is your return and exchange policy?",
    answer: "We offer a hassle-free 30-day return and exchange policy. Items must be in their original condition with all packaging. Free return shipping is provided for exchanges, while returns are subject to a small processing fee. Custom or personalized items cannot be returned unless defective."
  },
  {
    id: "item-3",
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-7 business days within the continental US. Express shipping (1-2 business days) and overnight shipping options are available at checkout. International shipping times vary by location, typically 7-14 business days. Free shipping is available on orders over $75."
  },
  {
    id: "item-4",
    question: "How should I care for my shoes?",
    answer: "Proper care depends on the material. For leather shoes, use a quality leather conditioner every few months and store with shoe trees. Suede requires special suede brushes and protectant sprays. Athletic shoes can be machine washed on gentle cycle. We include care instructions with every purchase."
  },
  {
    id: "item-5",
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to over 50 countries worldwide. International shipping costs and delivery times vary by destination. All international orders are subject to local customs duties and taxes, which are the responsibility of the customer. Tracking information is provided for all international shipments."
  },
  {
    id: "item-6",
    question: "Are your shoes true to size?",
    answer: "Most of our shoes run true to standard US sizing, but we recommend checking the specific sizing notes on each product page. Some brands or styles may run slightly large or small. We provide detailed measurements and customer reviews to help guide your selection. When in doubt, our customer service team is happy to provide sizing advice."
  },
  {
    id: "item-7",
    question: "Do you offer discounts for bulk orders?",
    answer: "Yes, we offer special pricing for bulk orders of 10 or more pairs. This is perfect for corporate events, wedding parties, or team purchases. Contact our sales team at sales@soumya.com with your requirements for a custom quote. Additional discounts may apply for larger quantities."
  },
  {
    id: "item-8",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. For international customers, we also accept bank transfers and local payment methods where available. All transactions are processed securely with SSL encryption."
  }
];

export function FAQ() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our products, shipping, and policies
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-card rounded-lg border shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className={`${index !== faqData.length - 1 ? 'border-b' : ''}`}
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-muted/50 transition-colors">
                    <span className="text-base pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    <div className="pt-2">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Support */}
          <div className="text-center mt-8 p-6 bg-card rounded-lg border">
            <h3 className="text-lg mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Our customer support team is here to help you find the perfect pair.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@soumya.com" 
                className="text-primary hover:underline"
              >
                support@soumya.com
              </a>
              <span className="hidden sm:block text-muted-foreground">•</span>
              <a 
                href="tel:+1-555-0123" 
                className="text-primary hover:underline"
              >
                (555) 012-3456
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}