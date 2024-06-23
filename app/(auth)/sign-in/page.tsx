"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
    Form,
} from "@/components/ui/form";
import CustomInput from "@/components/CustomInput";
import SignInWith from "@/components/SignInWith"

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})


const SignIn = () => {

    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password:""
        },
    })
    
    function onSubmit(values: z.infer<typeof formSchema>) {

        console.log(values)
    }

    return (
        <div className='w-full h-full relative'>
            <div className="max-w-screen-xl mx-auto  overflow-hidden">
                <div className="h-screen  w-full lg:w-3/6 flex flex-col gap-6 justify-center pl-4 pr-4 lg:pr-0 relative z-20  ">
                    <h2 className='heading-2 text-center  text-grey-900'>Sign in to your account</h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                            <CustomInput control={form.control} name={"email"} label={"Email"} placeholder={"Username or Email ID"}/>
                            <CustomInput control={form.control} name={"password"} label={"Password"} placeholder={"Enter Password"}/>

                            <Button variant={"dark"} type="submit" className="flex gap-2 items-center">
                                Sign In
                                    <img src="/icons/arrow-narrow-right.svg" alt="arrow-right" />
                            </Button>
                        </form>
                    </Form>
                    <SignInWith/>
                </div>
                <div className="absolute w-full lg:w-[45%] top-0 right-0 z-10 ">
                    <img className='w-full h-screen  object-cover opacity-70  '  src="/images/sign-in-account.jpg" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default SignIn