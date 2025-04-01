export function formatNumber(num) {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + "B";
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + "M"; 
    } else {
      return num.toFixed(2);
    }
  }

  export function topGainers (data, sliceNum){ data.data
    .sort((a, b) => b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h)
    .slice(0, sliceNum);
  }
    // const topLosers = data.data
    // .sort((a, b) => a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h)
    // .slice(0, 5);
  
    // const topMarketCap = data.data
    // .sort((a, b) => b.quote.USD.market_cap - a.quote.USD.market_cap)
    // .slice(0, 5);
  
    // const topVolume = data.data
    // .sort((a, b) => b.quote.USD.volume_24h - a.quote.USD.volume_24h)
    // .slice(0, 5);