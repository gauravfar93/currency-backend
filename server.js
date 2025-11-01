import express from "express";
import cors from "cors";

import quotesRoute from "./src/routes/quotes.js";
import averageRoute from "./src/routes/average.js";
import slippageRoute from "./src/routes/slippage.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/quotes", quotesRoute);
app.use("/average", averageRoute);
app.use("/slippage", slippageRoute);

app.get("/", (req, res) => {
  res.send("Currency API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
