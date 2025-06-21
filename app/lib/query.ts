import { QueryClient } from "@tanstack/react-query";

export class Query {
  static setQuery() {
    const client = new QueryClient();

    return client;
  }
}
