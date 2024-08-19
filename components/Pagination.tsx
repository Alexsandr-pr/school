import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"


const PaginationBlock = () => {
    return (
        <>
            <Pagination >
                <PaginationContent className="shadow-main">
                    <PaginationItem  className="border border-solid border-grey-border w-10 h-10 p-0 rounded-l">
                        <PaginationPrevious size={"paginationBtn"} href="#" />
                    </PaginationItem>
                    <PaginationItem className="border border-solid border-grey-border w-10 h-10 p-0">
                    <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="border border-solid border-grey-border w-10 h-10 p-0">
                    <PaginationLink href="#" isActive>
                        2
                    </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="border border-solid border-grey-border w-10 h-10 p-0">
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    
                    <PaginationItem className="border border-solid border-grey-border w-10 h-10 p-0 rounded-r">
                        <PaginationNext size={"paginationBtn"} href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    )
}

export default PaginationBlock