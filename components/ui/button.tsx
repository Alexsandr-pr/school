import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white duration-300 transition-all cursor-pointer text-primary-500 hover:bg-primary-500 hover:text-white",
        slider:
          "rounded-lg bg-grey-disableColor duration-300 transition-all cursor-pointer flex justify-center items-center hover:bg-primary-500",
        blue:
          "text-sm py-4 px-6 text-white font-medium border border-solid border-transparent hover:border-primary-500 hover:bg-white text-center hover:text-primary-500 leading-normal rounded-lg inline-flex items-center bg-primary-500 justify-center transition-all duration-300 cursor-pointer gap-2",
        dark:
          "text-sm leading-relaxed transition-all duration-300 bg-grey-textDark border border-solid hover:text-black group border-transparent hover:bg-white hover:border-grey-textDark font-medium text-white p-4 text-center flex items-center justify-center",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

      },
      size: {
        default: "h-[48px] px-6 py-4",
        slider: "w-[56px] h-10 py-2 px-4",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
