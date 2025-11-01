import express from "express";
import { getQuotesData } from "../data/quotesData.js";
import { calculateAverage, calculateSlippage } from "../utils/helpers.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const quotes = await getQuotesData();
  const average = calculateAverage(quotes);
  const slippage = calculateSlippage(quotes, average);
  res.json(slippage);
});

export default router;
