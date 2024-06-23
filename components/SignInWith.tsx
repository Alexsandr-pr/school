import Link from 'next/link'
import React from 'react'

const SignInWith = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className='flex gap-3'>
                <span className='basis-[43%] inline-flex relative'>
                    <div className="w-full h-[2px] mt-2.5 bg-primary-500  lg:bg-grey-disableColor">
                    </div>
                </span>
                <div className="basis-[95px] small-text text-center text-primary-500 lg:text-grey-disableColor">
                    Sign in with
                </div>
                <span className='basis-[44%] inline-flex'>
                    <div className="w-full h-[2px] mt-2.5 bg-primary-500  lg:bg-grey-disableColor">
                    </div>
                </span>
            </div>
            <div className="grid grid-cols-1 2sm:grid-cols-3 gap-4">
                <Link href="" className='flex justify-center items-center bg-white p-3 gap-2 rounded-lg border border-solid border-grey-border  duration-300 transition-all hover:border-primary-500'>
                    <img src="/icons/facebook.svg" alt="Facebook" />
                    <span className='small-text text-primary-500'>Facebook</span>
                </Link>
                <Link href="" className='flex justify-center items-center bg-white p-3 gap-2 rounded-lg border border-solid border-grey-border duration-300 transition-all hover:border-error-500'>
                    <img src="/icons/google.svg" alt="Facebook" />
                    <span className='small-text text-error-500'>Google</span>
                </Link>
                <Link href="" className='flex justify-center items-center bg-white p-3 gap-2 rounded-lg border border-solid border-grey-border duration-300 transition-all hover:border-black'>
                    <img src="/icons/image-microsoft.svg" alt="Facebook" />
                    <span className='small-text text-black'>Microsoft</span>
                </Link>
            </div>
        </div>
    )
}

export default SignInWith