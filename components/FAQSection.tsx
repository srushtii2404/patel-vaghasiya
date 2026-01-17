"use client";

import {
    Accordion,
    AccordionItem,
    AccordionContent,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ({ faqs }: { faqs: any[] }) {
    return (
        <section className="bg-white p-6 md:px-8 md:py-8 rounded-2xl shadow-lg border border-bg-mainDark-100">
            <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-8">
                Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="rounded-xl overflow-hidden">
                        <AccordionTrigger
                            className="flex justify-between items-center px-5 py-4 md:px-6 md:py-5 text-gray-800 font-medium bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl"
                        >
                            {faq.question}
                        </AccordionTrigger>

                        <AccordionContent
                            className="px-5 py-4 md:px-6 md:py-5 text-gray-700 text-[16px] leading-relaxed bg-white border-t border-gray-100"
                        >
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
}
