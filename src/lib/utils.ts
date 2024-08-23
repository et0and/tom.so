import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Linear interpolation
export function lerp(a: number, b: number, n: number) {
  return (1 - n) * a + n * b;
}

// Get distance between two points
export function getDistance(x1: number, y1: number, x2: number, y2: number) {
  return Math.hypot(x2 - x1, y2 - y1);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
