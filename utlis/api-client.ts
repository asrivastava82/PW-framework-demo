import { APIRequestContext } from "@playwright/test";
import { expect } from "@playwright/test";

export class RequestHandler {
  private request: APIRequestContext;
  private baseURL: string;
  private apiPath: string = "";
  private apiHeader: Record<string, string> = {};
  private apiParams: object = {};
  private apiBody: object = {};

  constructor(request: APIRequestContext, apiBaseUrl: string) {
    (this.request = request), (this.baseURL = apiBaseUrl);
  }

  url(url: string) {
    this.baseURL = url;
    return this;
  }

  path(path: string) {
    this.apiPath = path;
    return this;
  }

  header(header: Record<string, string>) {
    this.apiHeader = header;
    return this;
  }

  params(params: object) {
    this.apiParams = params;
    return this;
  }

  body(body: object) {
    this.apiBody = body;
    return this;
  }

  async getRequest(statusCode: number) {
    const url = this.getUrl();
    const response = await this.request.get(url, {
      headers: this.apiHeader,
    });
    const responseJSON = await response.json();
    expect(response.status()).toEqual(statusCode);
    return responseJSON;
  }

  async postRequest(statusCode: number) {
    const url = this.getUrl();
    const response = await this.request.post(url, {
      headers: this.apiHeader,
      data: this.apiBody,
    });

    // Always assert status first
    expect(response.status()).toEqual(statusCode);
    // Read response safely as text
    const responseBody = await response.text();
    // Try parsing JSON defensively
    try {
      return JSON.parse(responseBody);
    } catch {
      // Not JSON → return plain text
      return responseBody;
    }
  }

  async putRequest(statusCode: number) {
    const url = this.getUrl();
    const response = await this.request.put(url, {
      headers: this.apiHeader,
      data: this.apiBody,
    });
    const responseJSON = await response.json();
    expect(response.status()).toEqual(statusCode);
    return responseJSON;
  }

  async deleteRequest(statusCode: number) {
    const url = this.getUrl();
    const response = await this.request.delete(url, {
      headers: this.apiHeader,
    });
    expect(response.status()).toEqual(statusCode);
  }

  getUrl() {
    const url = new URL(`${this.baseURL}${this.apiPath}`);
    for (const [key, value] of Object.entries(this.apiParams)) {
      url.searchParams.append(key, value);
    }
    return url.toString();
  }
}
