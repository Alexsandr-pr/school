import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import CourceFilter from "./CourceFilter"

const FilterCourseSheet = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant={"darkBg"}>
                    <img src="/icons/filter.svg" alt="" />
                    Filter
                    
                </Button>
            </SheetTrigger>
            <SheetContent className="w-[400px] sm:w-[540px] bg-grey-100">
                <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                    <CourceFilter/>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default FilterCourseSheet