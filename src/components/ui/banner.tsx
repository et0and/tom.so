"use client";

import { SVGProps, useState } from "react";
import { Button } from "@/components/ui/button";

interface BannerProps {
  title: string;
  message: string;
  variant?: "info" | "warning" | "error";
}

export default function Banner({
  title,
  message,
  variant = "info",
}: BannerProps) {
  const [showBanner, setShowBanner] = useState(true);
  const handleClose = () => {
    setShowBanner(false);
  };

  const variantStyles = {
    info: "bg-gray-100 text-black border-0.5",
    warning: "bg-yellow-500 text-black",
    error: "bg-red-500 text-white",
  };

  const IconComponent = variantIcons[variant];

  return (
    <>
      {showBanner && (
        <div
          className={`${variantStyles[variant]} p-4 relative rounded-md mb-2`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconComponent className="h-5 w-5" />
              <h1 className="text-lg font-semibold">{title}</h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-current hover:bg-opacity-20 focus:bg-opacity-20"
              onClick={handleClose}
            >
              <XIcon className="h-5 w-5" />
            </Button>
          </div>
          <p
            className="text-lg mt-4"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        </div>
      )}
    </>
  );
}

const variantIcons = {
  info: InfoIcon,
  warning: WarningIcon,
  error: ErrorIcon,
};

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
  );
}

function WarningIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function ErrorIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
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
  );
}
