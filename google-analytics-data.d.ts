declare module "@google-analytics/data" {
  export class BetaAnalyticsDataClient {
    constructor(options: any);
    runReport(request: any): Promise<any>;
  }
}
