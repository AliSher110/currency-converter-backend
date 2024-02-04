const axios = require("axios");

async function getCurrencies(req, res) {
  const currencies = req.body.currencies;

  try {
    const response = await axios.get(
      "https://api.freecurrencyapi.com/v1/currencies",
      {
        headers: {
          apikey: process.env.API_KEY,
        },
        params: {
          currencies: currencies || "",
        },
      }
    );
    const currenciesData = response.data;

    res.json(currenciesData);
  } catch (error) {
    console.error("Error fetching currencies:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function getExchangeRates(req, res) {
  const currencies = req.query.currencies;
  const base_currency = req.query.base_currency;

  try {
    const response = await axios.get(
      "https://api.freecurrencyapi.com/v1/latest",
      {
        headers: {
          apikey: process.env.API_KEY,
        },
        params: {
          currencies: (currencies && currencies) || "",
          base_currency: (base_currency && base_currency) || "",
        },
      }
    );
    const currenciesData = response.data;

    res.json(currenciesData);
  } catch (error) {
    console.error("Error fetching currencies:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getCurrencies,
  getExchangeRates,
};
