import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-grey-800 pt-20 pb-32'>
            <div className="max-w-screen-xl mx-auto px-4 gap-8 flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col w-full lg:max-w-[416px]">
                    <img width={111} height={40} src="/icons/footer-logo.svg" alt="Logo" />
                    <p className="small-text text-grey-300">Empowering learners through accessible and engaging online education.
                        Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences. </p>
                </div>
                    <div className="gap-8 w-full lg:w-3/5 flex flex-col lg:flex-row justify-between">
                    <div className="">
                        <h5 className='heading-5-subheading mb-2 text-grey-100'>Get Help</h5>
                        <nav>
                            <ul className='flex flex-wrap flex-row lg:flex-col gap-2'>
                                <li>
                                    <Link className='button-text text-grey-300' href={"/"}>
                                    Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link className='button-text text-grey-300' href={"/"}>
                                    Latest Articles
                                    </Link>
                                </li>
                                <li>
                                    <Link className='button-text text-grey-300' href={"/"}>
                                    FAQ
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="">
                        <h5 className='heading-5-subheading mb-2 text-grey-100'>Programs</h5>
                        <nav>
                            <ul className='flex  flex-wrap flex-row lg:flex-col gap-2'>
                                <li>
                                    <Link className='button-text text-grey-300' href={"/"}>
                                    Art & Design
                                    </Link>
                                </li>
                                <li>
                                    <Link className='button-text text-grey-300' href={"/"}>
                                    Business
                                    </Link>
                                </li>
                                <li>
                                    <Link className='button-text text-grey-300' href={"/"}>
                                    IT & Software
                                    </Link>
                                </li>
                                <li>
                                    <Link className='button-text text-grey-300' href={"/"}>
                                    Languages
                                    </Link>
                                </li>
                                <li>
                                    <Link className='button-text text-grey-300' href={"/"}>
                                    Programming
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="">
                        <h5 className='heading-5-subheading mb-2 text-grey-100'>Contact Us</h5>
                        <nav>
                            <ul className='flex  flex-wrap flex-col gap-2'>
                                <li>
                                    <Link className='button-text text-grey-300' href={"/"}>
                                    Address: 123 Main Street, Anytown, CA 12345
                                    </Link>
                                </li>
                                <li>
                                    <Link className='button-text text-grey-300' href={"/"}>
                                    Tel: +(123) 456-7890
                                    </Link>
                                </li>
                                <li>
                                    <Link className='button-text text-grey-300' href={"/"}>
                                    Mail: bywayedu@webkul.in
                                    </Link>
                                </li>
                            
                            </ul>
                        </nav>
                    </div>
                    </div>
                
            </div>
        </footer>
    )
}

export default Footer