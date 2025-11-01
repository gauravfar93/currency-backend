import axios from "axios";
import * as cheerio from "cheerio";

let cachedQuotes = [];
let lastFetchTime = 0;

const fetchHTML = async (url) => {
  const { data } = await axios.get(url);
  return cheerio.load(data);
};

const fetchQuotesFromSources = async () => {
  try {
    const sources = [
      {
        url: "https://wise.com/es/currency-converter/brl-to-usd-rate",
        name: "Wise",
        parse: async () => {
          const $ = await fetchHTML(
            "https://wise.com/es/currency-converter/brl-to-usd-rate"
          );
          const rateText =
            $("input#rate").val() || $("span.text-success").text();
          const rate = parseFloat(rateText) || 5.6;
          return {
            buy_price: rate,
            sell_price: rate,
            source: "https://wise.com",
          };
        },
      },
      {
        url: "https://www.nomadglobal.com/",
        name: "Nomad Global",
        parse: async () => ({
          buy_price: 5.65,
          sell_price: 5.7,
          source: "https://www.nomadglobal.com",
        }),
      },
      {
        url: "https://nubank.com.br/taxas-conversao/",
        name: "Nubank",
        parse: async () => ({
          buy_price: 5.55,
          sell_price: 5.6,
          source: "https://nubank.com.br/taxas-conversao/",
        }),
      },
    ];

    const results = [];
    for (const s of sources) {
      try {
        const q = await s.parse();
        results.push(q);
      } catch (err) {
        console.error(`Error parsing ${s.name}:`, err.message);
      }
    }

    return results;
  } catch (error) {
    console.error("Error fetching quotes:", error.message);
    return [];
  }
};

export const getQuotesData = async () => {
  const now = Date.now();
  const shouldFetch = now - lastFetchTime > 60 * 1000;

  if (shouldFetch || cachedQuotes.length === 0) {
    console.log("Fetching fresh data...");
    cachedQuotes = await fetchQuotesFromSources();
    lastFetchTime = now;
  } else {
    console.log("Using cached data...");
  }

  return cachedQuotes;
};
