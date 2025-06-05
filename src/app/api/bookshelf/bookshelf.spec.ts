import { describe, it, expect, vi, beforeEach } from "vitest";
import { GET } from "./route";

describe("Bookshelf API", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should fetch bookshelf data successfully", async () => {
    const mockResponse = {
      ok: true,
      json: () =>
        Promise.resolve({
          contents: [],
          length: 0,
          total_pages: 1,
          current_page: 1,
        }),
    };

    global.fetch = vi.fn().mockResolvedValue(mockResponse);

    const request = new Request(
      "https://tom.so/api/bookshelf?page=1&perPage=12",
    );
    const response = await GET(request);
    const data = await response.json();

    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.are.na/v2/channels/tom-s-bookshelf?page=1&per_page=12",
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    expect(response.status).toBe(200);
    expect(data).toEqual({
      contents: [],
      length: 0,
      total_pages: 1,
      current_page: 1,
    });
  });

  it("should handle API errors", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: () => Promise.resolve({}),
    });

    const request = new Request("https://tom.so/api/bookshelf");
    const response = await GET(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data).toEqual({ error: "Failed to fetch bookshelf data" });
  });

  it("should use default pagination values when not provided", async () => {
    const mockResponse = {
      ok: true,
      json: () =>
        Promise.resolve({
          contents: [],
          length: 0,
          total_pages: 1,
          current_page: 1,
        }),
    };

    global.fetch = vi.fn().mockResolvedValue(mockResponse);

    const request = new Request("https://tom.so/api/bookshelf");
    await GET(request);

    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.are.na/v2/channels/tom-s-bookshelf?page=1&per_page=12",
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  });
});
