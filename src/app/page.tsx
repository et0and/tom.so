import type { Metadata } from "next";
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tom Hackshaw",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="items-center p-12">
    <Alert>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Maintenance</AlertTitle>
      <AlertDescription>
        This website is running on a new stack and may contain some bugs.
      </AlertDescription>
    </Alert>
    </div>
  );
}
