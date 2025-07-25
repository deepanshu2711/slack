"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface HintProps {
  label: string
  children: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  alignment?: "start" | "center" | "end"
}

export const Hint = ({ label, children, side, alignment }: HintProps) => {
  return (
    <Tooltip delayDuration={50}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side} align={alignment} className="bg-black text-white border border-white/5">
        <p className="font-medium text-xs">{label}</p>
      </TooltipContent>
    </Tooltip>
  )
}
