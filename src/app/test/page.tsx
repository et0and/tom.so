import { Metadata } from "next";
import { Component as BarChartComponent } from "./data";

export const metadata: Metadata = {
  title: "Test",
  description: "A test data dashboard.",
};

export default function DashboardPage() {
  return (
    <div>
      <BarChartComponent />
    </div>
  );
}
