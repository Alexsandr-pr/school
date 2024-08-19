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
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string().min(8, "Password must be at least 8 characters long"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // Set the error path to the confirmPassword field
});


const SignUp = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password:"",
            username:"",
            confirmPassword:"",
            firstName:"",
            lastName:""
        },
    })
    
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className='w-full h-full relative'>
            <div className="max-w-screen-xl mx-auto flex juctify-end overflow-hidden">
                <div className="absolute w-full h-full lg:h-screen lg:w-[45%] top-0 left-0 z-10 ">
                    <img className='w-full h-full lg:h-screen object-cover opacity-70  '  src="/images/create-account.jpg" alt="" />
                </div>
                <div className="h-auto  lg:h-screen w-full  flex flex-col gap-6 items-end justify-center py-8 pb-24 pl-4 pr-4 lg:pr-0 relative z-20  ">
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <h2 className='heading-2 text-center  text-grey-900'>Create Your Account</h2>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid gap-6 items-end grid-cols-1 sm:grid-cols-2">
                                    <CustomInput control={form.control} name={"firstName"} label={"Full Name"} placeholder={"First Name"}/>
                                    <CustomInput control={form.control} name={"lastName"} label={""} placeholder={"Last Name"}/>
                                </div>
                                <CustomInput control={form.control} name={"username"} label={"Username"} placeholder={"Username"}/>
                                <CustomInput control={form.control} name={"email"} label={"Email"} placeholder={"Email ID"}/>
                                <div className="grid items-end  gap-6 grid-cols-1 sm:grid-cols-2">
                                    <CustomInput control={form.control} name={"password"} label={"Password"} placeholder={"Enter Password"}/>
                                    <CustomInput control={form.control} name={"confirmPassword"} label={"Confirm Password"} placeholder={"Confirm Password"}/>
                                </div>
                                <Button variant={"dark"} type="submit" className="flex gap-2 items-center">
                                Create Account
                                        <img src="/icons/arrow-narrow-right.svg" alt="arrow-right" />
                                </Button>
                            </form>
                        </Form>
                        <SignInWith/>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default SignUp