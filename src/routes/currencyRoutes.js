const express = require("express");
const currencyController = require("../controllers/currencyController");

const router = express.Router();

router.all("/getCurrencies", currencyController.getCurrencies);
router.all("/getRates", currencyController.getExchangeRates);

module.exports = router;
