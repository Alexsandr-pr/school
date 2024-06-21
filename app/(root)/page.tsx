
import Instructors from "@/components/Instructors"
import HeaderBlock from "@/components/HeaderBlock"
import { Button } from "@/components/ui/button"
import Courses from "@/components/Courses"
import Reviews from "@/components/Reviews"
import MainSlider from "@/components/MainSlider"


const data = [
    {
        title:"Astrology",
        iconComponent: "/icons/telescope.svg",
        text:"11 Courses"
    },
    {
        title:"Development",
        iconComponent:"/icons/code-browser.svg",
        text:"12 Courses"
    },
    {
        title:"Marketing",
        iconComponent:"/icons/briefcase.svg",
        text:"12 Courses"
    },
    {
        title:"Physics",
        iconComponent:"/icons/physics.svg",
        text:"14 Courses"
    }
]



const Home = () => {
    return (
        <div className="">
            <div className="max-w-screen-xl mx-auto px-4 py-8">
                <MainSlider/>
            </div>
            <div className="py-10 bg-grey-background">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-2 gap-6 md:gap-0 md:grid-cols-4 text-grey-900">
                        <div className="flex flex-col px-4 text-center border-r-4 border-solid  border-grey-border items-center">
                            <h2 className="heading-2 ">250+</h2>
                            <p className="small-text">Courses by our best mentors</p>
                        </div>
                        <div className="flex flex-col px-4  text-center md:border-r-4 md:border-solid  md:border-grey-border items-center">
                            <h2 className="heading-2">1000+</h2>
                            <p className="small-text">Courses by our best mentors</p>
                        </div>
                        <div className="flex flex-col px-4  text-center border-r-4 border-solid  border-grey-border items-center">
                            <h2 className="heading-2">15+</h2>
                            <p className="small-text">Courses by our best mentors</p>
                        </div>
                        <div className="flex flex-col px-4  text-center items-center">
                            <h2 className="heading-2">2400+</h2>
                            <p className="small-text">Courses by our best mentors</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 py-8">
                <HeaderBlock title="Top Categories">
                    <Button>See All</Button>
                </HeaderBlock>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-9">
                {
                    data.map(({iconComponent, title, text}) => {
                        return (
                            <div key={iconComponent} className="p-6 bg-white flex flex-col rounded-2xl gap-2.5 justify-center items-center border border-solid border-grey-border ">
                                <div className="w-[70px]  sm:w-[100px] h-[70px] sm:h-[100px] flex justify-center items-center  rounded-full bg-primary-100">
                                    <img src={iconComponent} alt={title} />
                                </div>
                                <h3 className='font-semibold leading-normal text-base sm:text-xl '>{title}</h3>
                                <p className='text-sm sm:text-base leading-relaxed text-grey-700 font-normal'>{text}</p>
                            </div>
                        )
                    })
                }
            </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 py-8">
                <HeaderBlock title="Top Courses">
                    <Button>See All</Button>
                </HeaderBlock>
                <Courses/>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 py-8">
                <HeaderBlock title="Top Instructors">
                    <Button>See All</Button>
                </HeaderBlock>
                <Instructors/>
            </div>
            <div className="bg-grey-background pb-16 pt-20">
                <div className="max-w-screen-xl mx-auto px-4">
                    <HeaderBlock title="What Our Customer Say About Us">
                        <div className="flex items-center gap-3 md:gap-6">
                            <Button variant={"slider"} size={"slider"}>
                                <img className="rotate-180" src="/icons/chevron-right.svg" alt="Chevron Left" />
                            </Button>
                            <Button variant={"slider"} size={"slider"}>
                                <img src="/icons/chevron-right.svg" alt="Chevron Left" />
                            </Button>
                        </div>
                    </HeaderBlock>
                    <Reviews/>
                </div>
            </div>

            <div className="max-w-screen-xl flex flex-col gap-[60px] justify-center items-center mx-auto px-4 py-[60px]">
                
                <div className="flex gap-y-8 flex-col md:flex-row justify-around items-center">

                    <div className="basis-[40%] ">
                        <img className="max-w-full" src="/images/home-bottom-1.jpg" alt="" />
                    </div>
                    <div className="flex flex-col  items-center md:items-start basis-[40%]">
                        <h4 className="heading-4-subheading text-black">Become an Instructor</h4>
                        <p className="paragraph  text-center md:text-left text-grey-800 mb-4">Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.</p>
                        <Button variant={"dark"} className=" flex items-center gap-2">
                            Start Your Instructor Journey
                            <img src="/icons/arrow-narrow-right.svg" alt="Arrow right" />
                        </Button>
                    </div>
                </div>

                <div className="flex gap-y-8 flex-col-reverse  md:flex-row justify-around items-center">
                    <div className="flex flex-col items-center md:items-start basis-[40%]">
                        <h4 className="heading-4-subheading text-black">Transform your life through education</h4>
                        <p className="paragraph text-center md:text-left text-grey-800 mb-4">Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                        <Button variant={"dark"} className=" flex items-center gap-2">
                            Start Your Instructor Journey
                            <img src="/icons/arrow-narrow-right.svg" alt="Arrow right" />
                        </Button>
                    </div>
                    <div className="basis-[40%]">
                        <img className="max-w-full" src="/images/home-bottom-2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home