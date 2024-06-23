import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { z } from "zod"
import {  Control, FieldPath } from "react-hook-form"
import { createUserFormSchema } from '@/lib/utils'



// interface CustomInput {
//     control: Control<z.infer<typeof createUserFormSchema>>,
//     name: FieldPath<z.infer<typeof createUserFormSchema>>,
//     label:string,
//     placeholder:string
// }
interface CustomInputProps<T extends z.ZodType<any, any>> {
    control: Control<z.infer<T>>;
    name: FieldPath<z.infer<T>>;
    label: string;
    placeholder: string;
}




const CustomInput = <T extends z.ZodType<any, any>>({
    control,
    name,
    label,
    placeholder,
}: CustomInputProps<T>) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className='form-item'>
                    <label className='heading-5-subheading text-grey-900 mb-1.5'>
                        {label}
                    </label>
                    <div className="flex w-full flex-col">
                        <FormControl>
                            <input
                                className='input'
                                placeholder={placeholder}
                                type={name === "password" ? "password" : "text"}
                                {...field}
                                />
                        </FormControl>
                        <FormMessage className='form-message mt-2'/>
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput