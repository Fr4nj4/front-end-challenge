export const URL_SERVICES={
    Ticker : 'https://api.bitso.com/v3/ticker/',
    Trades: 'https://api.bitso.com/v3/trades/',
    TradeP:'https://bitso.com/trade/chartJSON/',
    OrderBook:'https://api.bitso.com/v3/order_book/'    
}


export const PARAMS_SERVICES={

    book_btc_mx:'btc_mxn'

}

export const ARRAY_TRADE_DATES=[
  {'name':'1m', 'value' :'1month'},
  {'name':'3m', 'value' :'3months'},
  {'name':'1a', 'value' :'1year'}
]

export const BOOKS_AVAILABLES=[
    {
      "book": "btc_mxn",
      "fromCoin": "BTC",
      "toCoin": "MXN"
    },
    {
      "book": "eth_mxn",
      "fromCoin": "ETH",
      "toCoin": "MXN"
    },
    {
      "book": "xrp_btc",
      "fromCoin": "XRP",
      "toCoin": "BTC"
    },
    {
      "book": "xrp_mxn",
      "fromCoin": "XRP",
      "toCoin": "MXN"
    },
    {
      "book": "eth_btc",
      "fromCoin": "ETH",
      "toCoin": "BTC"
    },
    {
      "book": "bch_btc",
      "fromCoin": "BTH",
      "toCoin": "BTC"
    },
    {
      "book": "ltc_btc",
      "fromCoin": "LTC",
      "toCoin": "BTC"
    },
    {
      "book": "ltc_mxn",
      "fromCoin": "LTC",
      "toCoin": "MXN"
    },
    {
      "book": "bch_mxn",
      "fromCoin": "BCH",
      "toCoin": "MXN"
    }
  ]