import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
    return (
        <Accordion type="single" collapsible className="w-full p-8">
            <AccordionItem value="item-1">
                <AccordionTrigger>What types of investments can I make on the platform?</AccordionTrigger>
                <AccordionContent>
                    You can invest in three main categories: Construction-related projects (with a 24-month holding period), Green Tech companies, and AI/Robotics companies.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>How do the tokens work?</AccordionTrigger>
                <AccordionContent>
                    Tokens represent your share in the real-world assets. For construction projects, tokens appreciate in value over 24 months. For Green Tech and AI/Robotics companies, tokens fluctuate based on the performance of the company or project.

                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Is there a minimum investment requirement?</AccordionTrigger>
                <AccordionContent>
                    Yes, the minimum investment amount is £1 or $1 in cryptocurrency, making it accessible for all levels of investors.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
