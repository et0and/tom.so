import { NextResponse } from "next/server";
import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { JWT } from "google-auth-library";

if (!process.env.GA4_PROPERTY_ID) {
  throw new Error("GA4_PROPERTY_ID is not set in environment variables");
}

if (!process.env.GA4_SERVICE_ACCOUNT_KEY) {
  throw new Error(
    "GA4_SERVICE_ACCOUNT_KEY is not set in environment variables"
  );
}

export async function GET() {
  const propertyId = process.env.GA4_PROPERTY_ID;

  // Parse the service account key from the environment variable
  const serviceAccountKey = JSON.parse(process.env.GA4_SERVICE_ACCOUNT_KEY);

  // Create a JWT client
  const jwtClient = new JWT({
    email: serviceAccountKey.client_email,
    key: serviceAccountKey.private_key,
    scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
  });

  // Create an Analytics Data API client
  const analyticsDataClient = new BetaAnalyticsDataClient({
    auth: jwtClient,
  });

  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: "90daysAgo",
          endDate: "today",
        },
      ],
      dimensions: [
        {
          name: "date",
        },
      ],
      metrics: [
        {
          name: "activeUsers",
        },
        {
          name: "sessions",
        },
      ],
    });

    // Process the data into the format expected by your chart component
    const chartData =
      response.rows?.map(
        (row: {
          dimensionValues: { value: any }[];
          metricValues: { value: any }[];
        }) => ({
          date: row.dimensionValues?.[0].value || "",
          visitors: parseInt(row.metricValues?.[0].value || "0"),
          sessions: parseInt(row.metricValues?.[1].value || "0"),
        })
      ) || [];

    return NextResponse.json(chartData);
  } catch (error) {
    console.error("Error fetching GA4 data:", error);
    return NextResponse.json(
      { error: "Failed to fetch GA4 data" },
      { status: 500 }
    );
  }
}
