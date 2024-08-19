"use client"
import Link from 'next/link';
import React from 'react'
import useMediaQuery from "@/hooks/useMediaQuery"


const Header = () => {
    return (
        <header className='w-full border-b border-solid border-grey-border'>
            <div className="max-w-screen-xl flex justify-between gap-6 mx-auto px-4 py-3">
                <div className="flex gap-9 items-center lg:w-5/6 xl:w-5/6">
                    <Link href="/">
                        <img src="/icons/logo.svg" alt="Logo" />
                    </Link>
                    <Link href="/category" className='small-text hidden sm:block text-grey-700'>Categories</Link>
                    <label htmlFor="" className='relative w-full  hidden lg:block max-w-[600px]'>
                        <img src="/icons/search.svg" className='absolute top-[13px] left-3' alt="search" />
                        <input className='header-input' type="search"  placeholder='Search courses' />
                    </label>
                    <Link href="/" className='small-text hidden sm:block text-grey-700 whitespace-nowrap'>Teach on Byway</Link>
                </div>
                <Sign/>
            </div>
        </header>
    )
}

const Sign = () => {
    const isAuth = false;

    if(isAuth) {
        return (
            <div className="flex lg:w-1/6 gap-3 md:gap-6 items-center">
                <Link href="/" className='block lg:hidden'>
                    <img width={22} height={22} src="/icons/search.svg" alt="heart" />
                </Link>
                <Link href="/" className='block'>
                    <img src="/icons/heart.svg" alt="heart" />
                </Link>
                <Link href="/" className='block'>
                    <img src="/icons/cart.svg" alt="cart" />
                </Link>
                <Link href="/" className='block'>
                    <img src="/icons/bell-01.svg" alt="Bell" />
                </Link>
                <Link href="" className='min-w-10 min-h-10 scale-100  rounded-full text-base font-medium leading-normal text-white bg-grey-700 inline-flex items-center justify-center'>
                    A
                </Link>
            </div>
        )
    }
    return (
        <SingAuth/>
    )
}

const SingAuth = () => {
    
    return (
        <div className="flex gap-3 2sm:gap-6 items-center">
            <Link href="/" className='block'>
                <img src="/icons/cart.svg" alt="cart" />
            </Link>
            <Link href="/sign-in" className='p-2.5 text-xs 2sm:text-sm whitespace-nowrap text-grey-700 border border-solid border-grey-700 hover:bg-grey-700 hover:text-white  cursor-pointer duration-300 transition-all'>
                Log In
            </Link>
            <Link href="/sign-up" className='p-2.5 text-xs 2sm:text-sm whitespace-nowrap hover:text-grey-700 bg-grey-700 text-white border-grey-700 hover:bg-white  hover:border-grey-700 cursor-pointer duration-300 transition-all border border-solid '>
                Sign Up
            </Link>
        </div>
    )
}


export default Header