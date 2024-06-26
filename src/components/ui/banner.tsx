"use client"

import { SVGProps, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [showBanner, setShowBanner] = useState(true)
  const handleClose = () => {
    setShowBanner(false)
  }
  return (
    <>
      {showBanner && (
        <div className="bg-black text-white p-4 relative rounded-md m-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <InfoIcon className="h-5 w-5" />
              <h1 className="text-lg font-semibold">Website upgrade</h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white hover:bg-gray-800 focus:bg-gray-800"
              onClick={handleClose}
            >
              <XIcon className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-lg mt-4">This website is running on a new stack, and may contain a few bugs until these can be fixed. <a href="https://github.com/et0and/tom.so" className="underline hover:text-gray-300">More information</a>.</p>
        </div>
      )}
    </>
  )
}

function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
