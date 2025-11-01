# 💱 Currency Backend API

A Node.js backend that provides live USD currency exchange data, average rates, and slippage calculations.

## 🚀 Live Demo

🔗 [https://currency-backend-nbki.onrender.com/] (https://currency-backend-nbki.onrender.com/)

## 🧩 API Endpoints

| Endpoint    | Description                            |
| ----------- | -------------------------------------- | ---------------------------------------------------------------- |
| `/quotes`   | Returns live USD quotes from 3 sources | [View JSON](https://currency-backend-nbki.onrender.com/quotes)   |
| `/average`  | Returns the average buy/sell prices    | [View JSON](https://currency-backend-nbki.onrender.com/average)  |
| `/slippage` | Returns percentage slippage vs average | [View JSON](https://currency-backend-nbki.onrender.com/slippage) |

Example Response (`/quotes`):

````json
[
  {
    "buy_price": 5.55,
    "sell_price": 5.60,
    "source": "https://nubank.com.br/taxas-conversao/"
  }
]

## 🛠 Tech Stack
- Node.js - Runtime environment
- Express.js - Web framework for building REST APIs
- Axios - For fetching live data
- Cheerio -For scraping exchange rates from websites
- Render (for deployment)

## ⚙️ Run Locally
```bash
git clone https://github.com/gauravfar93/currency-backend.git
cd currency-backend
npm install
npm start
http://localhost:3000

📄 Features
✅ Fetches live USD conversion data (auto-updates every 60s)
✅ Calculates average buy/sell rates
✅ Calculates slippage vs average
✅ Deployed and accessible publicly via Render

👨‍💻 Author
Gaurav Sharma
Frontend & Backend Developer
📍 Based in India
````
