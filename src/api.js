const API_URL = "https://api.exchangeratesapi.io";

export const getRatesBySymbols = async symbols => {
    const symbolsString = symbols.join(",");
    const url = new URL(`${API_URL}/latest`);
    url.search = new URLSearchParams({symbols: symbolsString}).toString();

    const response = await fetch(url);

    if (!response.ok) {
        throw Error(response.statusText);
    }

    return await response.json();
}