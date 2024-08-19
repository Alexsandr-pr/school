import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"
import HeaderBlock from "./HeaderBlock"

const Reviews = () => {
    return (
        <>
            
            <Carousel>
                <HeaderBlock title="What Our Customer Say About Us">
                    <div className="flex items-center gap-3 md:gap-6">
                        
                            <Button variant={"slider"} size={"slider"}>
                                <img className="rotate-180" src="/icons/chevron-right.svg" alt="Chevron Left" />
                            </Button>
                        
                        
                            <Button className="relative" variant={"slider"}  size={"slider"}> 
                                <img src="/icons/chevron-right.svg" alt="Chevron Left" />
                            </Button>
                        
                    </div>
                </HeaderBlock>
                <CarouselContent>
                    <CarouselItem className="basis-full 2sm:basis-1/2 lg:basis-1/3">
                        <Review/>
                    </CarouselItem>
                    <CarouselItem className="basis-full 2sm:basis-1/2 lg:basis-1/3">
                        <Review/>
                    </CarouselItem>
                    <CarouselItem className=" basis-full 2sm:basis-1/2 lg:basis-1/3">
                        <Review/>
                    </CarouselItem>
                    <CarouselItem className=" basis-full 2sm:basis-1/2 lg:basis-1/3">
                        <Review/>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </>
    )
}

const Review = () => {
    return (
        <div className="bg-16 inline-flex flex-col gap-2">
            <img width={48} height={48} src="/icons/ri_double-quotes-l.svg" alt="double-quotes" />
            <p className="paragraph  text-black">"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. </p>
            <div className="flex items-center gap-2">
                <img width={60} height={60} src="/images/review-customer.svg" alt="customer image" />
                <div className="">
                    <p className="text-black heading-5-subheading">Jane Doe</p>
                    <p className="small-text text-grey-700">Designer</p>
                </div>
            </div>
        </div>
    )
}


export default Reviews