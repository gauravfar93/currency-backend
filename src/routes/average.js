import express from "express";
import { getQuotesData } from "../data/quotesData.js";
import { calculateAverage } from "../utils/helpers.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const quotes = await getQuotesData();
  const average = calculateAverage(quotes);
  res.json(average);
});

export default router;
