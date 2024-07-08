"use client";

import React, { useState, useEffect } from "react";
import { Component as AreaChart } from "@/components/ui/AreaChart";

interface ChartDataItem {
  date: string;
  visitors: number;
  sessions: number;
}

export function GA4Dashboard() {
  const [chartData, setChartData] = useState<ChartDataItem[]>([]);
  const [timeRange, setTimeRange] = useState("90d");

  useEffect(() => {
    fetchGA4Data();
  }, [timeRange]);

  const fetchGA4Data = async () => {
    try {
      const response = await fetch("/api/ga4data");
      if (!response.ok) {
        throw new Error("Failed to fetch GA4 data");
      }
      const data: ChartDataItem[] = await response.json();
      setChartData(data);
    } catch (error) {
      console.error("Error fetching GA4 data:", error);
    }
  };

  return (
    <div>
      <h1>GA4 Dashboard</h1>
      <AreaChart
        chartData={chartData}
        timeRange={timeRange}
        setTimeRange={setTimeRange}
      />
    </div>
  );
}
