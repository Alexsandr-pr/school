

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
 } from "@/components/ui/accordion"
import CheckboxItem from "./Checbox"

const CourceFilter = () => {
    return (
        <div className="w-full">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Rating</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Number of Chapters</AccordionTrigger>
                    <AccordionContent>
                        <CheckboxItem/>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Price</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Category</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default CourceFilter