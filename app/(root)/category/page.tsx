
import CourceFilter from '@/components/CourceFilter'
import Course from '@/components/Course'
import Filter from '@/components/Filter'
import React from 'react'

const CategoryPage = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-4 py-16'>
            <div className="text-grey-900 flex flex-col gap-6">
                <h1 className="heading-1">Design Courses</h1>
                <p className='heading-3 '>All Development Courses</p>
                <Filter/>
                <div className='flex gap-5 lg:gap-10 w-full justify-between'>
                    <div className="hidden lg:block lg:basis-[23%]">
                        <CourceFilter/>
                    </div>
                    <div className="lg:basis-[73%] grid  gap-4 md:gap-5 grid-cols-1 2sm:grid-cols-2 md:grid-cols-3 w-full">
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                        <Course/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage