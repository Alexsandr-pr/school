import React from 'react'

const Course = () => {
    return (
        <article className="bg-16 flex">
            <div className="flex flex-col w-full gap-3 lg:gap-4">
                <img  className="object-cover w-full h-full rounded-lg" src="/images/course.jpg" alt="" />
                <div className="text-left flex flex-col gap-2">
                    <h3 className="heading-5-subheading">Beginner’s Guide to Design</h3>
                    <p className="small-text text-grey-700">By Ronald Richards</p>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            <img src="/icons/Star-3.svg" alt="Star" />
                            <img src="/icons/Star-3.svg" alt="Star" />
                            <img src="/icons/Star-3.svg" alt="Star" />
                            <img src="/icons/Star-3.svg" alt="Star" />
                            <img src="/icons/Star-3.svg" alt="Star" />
                        </div>
                        <p className="label text-grey-700">(1200 Ratings)</p>
                    </div>
                    <p className="small-text text-grey-700">22 Total Hours. 155 Lectures. Beginner</p>
                    <p className="heading-4-subheading text-grey-900">$149.9</p>
                </div>
            </div>
        </article>
    )
}

export default Course