import { describe, it, expect, vi, beforeEach } from "vitest";
import { GET } from "./route";

describe("Bookshelf API", () => {
  // Mock test data
  const mockBookshelfData = {
    contents: [],
    length: 0,
    total_pages: 1,
    current_page: 1,
  };

  const expectedFetchCall = {
    url: "https://api.are.na/v2/channels/tom-s-bookshelf?page=1&per_page=12",
    options: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  };

  // Helper functions
  const createMockResponse = (
    ok: boolean,
    data: any,
    status = ok ? 200 : 500,
  ) => ({
    ok,
    status,
    json: () => Promise.resolve(data),
  });

  const mockFetchSuccess = (data = mockBookshelfData) => {
    global.fetch = vi.fn().mockResolvedValue(createMockResponse(true, data));
  };

  const mockFetchError = (status = 500, data = {}) => {
    global.fetch = vi
      .fn()
      .mockResolvedValue(createMockResponse(false, data, status));
  };

  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should fetch bookshelf data successfully", async () => {
    mockFetchSuccess();

    const request = new Request(
      "https://tom.so/api/bookshelf?page=1&perPage=12",
    );
    const response = await GET(request);
    const data = await response.json();

    expect(global.fetch).toHaveBeenCalledWith(
      expectedFetchCall.url,
      expectedFetchCall.options,
    );

    expect(response.status).toBe(200);
    expect(data).toEqual(mockBookshelfData);
  });

  it("should handle API errors", async () => {
    // Mock arena API returning a 500 error
    mockFetchError(500, {});

    const request = new Request("https://tom.so/api/bookshelf");
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data).toEqual({ error: "Failed to fetch bookshelf data" });
  });

  it("should handle network errors", async () => {
    // Mock fetch to reject (network error)
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    const request = new Request("https://tom.so/api/bookshelf");
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data).toEqual({ error: "Failed to fetch bookshelf data" });
  });

  it("should use default pagination values when not provided", async () => {
    mockFetchSuccess();

    const request = new Request("https://tom.so/api/bookshelf");
    await GET(request);

    expect(global.fetch).toHaveBeenCalledWith(
      expectedFetchCall.url,
      expectedFetchCall.options,
    );
  });
});
