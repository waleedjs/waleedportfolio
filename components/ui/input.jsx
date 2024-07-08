import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[48px] w-full items-center justify-between rounded-md border border-white/20 bg-primary px-4 py-5 test-base text-white/60 placeholder:text-white/60 focus:border-accent outline-none",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
