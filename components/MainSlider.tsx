
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"

const data = [
    {
        text: "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.",
        title:"Unlock Your Potential with Byway",
        image: "/img/1.svg",
        buttonText: "Start your instructor journey"
    },
    {
        text: "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. ",
        title:"Unlock Your Potential with Byway",
        image: "/img/2.svg",
        buttonText: "Start your instructor journey"
    },
    {
        text: "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.",
        title:"Unlock Your Potential with Byway",
        image: "/img/3.svg",
        buttonText: "Start your instructor journey"
    },
    {
        text: "Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.",
        title:"Unlock Your Potential with Byway",
        image: "/img/4.svg",
        buttonText: "Start your instructor journey"
    }
]

const MainSlider = () => {
    return (
        <Carousel>
            <CarouselContent>
                
                {
                    data.map(item => {
                        return (
                            <CarouselItem className="basis-full">
                                <MainSlide {...item}/>
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
        </Carousel>
    )
}


const MainSlide = ({
    image, 
    text, 
    title, 
} : MainSlideProps) => {
    return (
        <div className='flex flex-col md:flex-row py-8 items-center justify-between gap-10 md:h-[600px]'>
            <div className="basis-[46%] flex flex-col items-start">
                <div className="mb-8 text-grey-700">
                    <h1 className="heading-1 mb-4">{title}</h1>
                    <p className="paragraph">{text}</p>
                </div>
                <Button variant={"blue"}>
                Start your instructor journey
                </Button>
            </div>
            <div className="basis-[48%]">
                <img className='max-w-full' src={image} alt="" />
            </div>
        </div>
    )
}



export default MainSlider