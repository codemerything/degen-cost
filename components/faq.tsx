import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800/50 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-xl font-bold">How does Degen Cost work?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-slate-700 dark:text-slate-300">
                  Degen Cost scans web pages for price information and automatically converts those prices to their
                  Solana equivalent using real-time exchange rates. It's all done locally in your browser with no data
                  sent to external servers.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800/50 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-xl font-bold">Is my browsing data being tracked?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-slate-700 dark:text-slate-300">
                  Absolutely not. Degen Cost runs entirely in your browser and doesn't collect any data about your
                  browsing habits. Your privacy is respected 100%.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800/50 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-xl font-bold">Which websites are supported?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-slate-700 dark:text-slate-300">
                  Degen Cost works on most websites that display prices in standard formats. This includes major
                  retailers, real estate sites, travel booking platforms, and more. If you find a site where it doesn't
                  work properly, please let us know!
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800/50 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <h3 className="text-xl font-bold">How accurate are the conversions?</h3>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-slate-700 dark:text-slate-300">
                  Degen Cost uses real-time exchange rates to provide the most accurate conversions possible. However,
                  cryptocurrency prices are volatile, so the actual exchange rate may vary slightly from what you see.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
