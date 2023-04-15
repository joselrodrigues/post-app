/**
 * Fetches the data from the given API endpoint.
 * @param {...any[]} args - The arguments for the fetch function.
 * @returns {Promise<any>} The data fetched from the API endpoint.
 */
export const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())
