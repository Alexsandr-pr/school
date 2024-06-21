import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Instructors = () => {
    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem className="basis-1/2 2sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <Instructor/>
                </CarouselItem>
                <CarouselItem  className="basis-1/2 2sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <Instructor/>
                </CarouselItem>
                <CarouselItem  className="basis-1/2 2sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <Instructor/>
                </CarouselItem>
                <CarouselItem  className="basis-1/2 2sm:basis-1/3 md:basis-1/4 lg:basis-1/5"> 
                    <Instructor/>
                </CarouselItem>
                <CarouselItem  className=" basis-1/2 2sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <Instructor/>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}

const Instructor = () => {
    return (
        <article className=" bg-8 lg:bg-16 inline-flex">
            <div className="flex flex-col gap-3 lg:gap-4">
                <img height={132} width={177} className=" object-cover rounded-lg" src="/images/instructors.jpg" alt="" />
                <div className="text-left md:text-center">
                    <h3 className="heading-5-subheading">Ronald Richards</h3>
                    <p className="small-text text-grey-700">UI/UX Designer</p>
                </div>
                <span className="block w-full h-[1px] bg-grey-border"></span>
                <div className="flex gap-4 justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <img src="/icons/Star-3.svg" alt="" />
                        <p className="label text-grey-900">4.9</p>
                    </div>
                    <p className="label text-grey-700 text-right">2400 Students</p>
                </div>
            </div>
        </article>
    )
}


export default Instructors