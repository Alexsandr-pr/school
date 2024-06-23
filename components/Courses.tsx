import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Course from "./Course"

const Courses = () => {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem className="basis-full 2sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <Course/>
                </CarouselItem>
                <CarouselItem className="basis-full 2sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <Course/>
                </CarouselItem>
                <CarouselItem className="basis-full 2sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <Course/>
                </CarouselItem>
                <CarouselItem className="basis-full 2sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <Course/>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}



export default Courses