import express from "express";
import { getQuotesData } from "../data/quotesData.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const quotes = await getQuotesData();
  res.json(quotes);
});

export default router;
