export function formatNumber(num) {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + "B";
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + "M"; 
    } else {
      return num.toFixed(2);
    }
  }

  export const topGainers = (data, sliceNum)=>{ return data.data
    .sort((a, b) => b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h)
    .slice(0, sliceNum);
  }
    export const topLosers = (data, sliceNum) => { return data.data
    .sort((a, b) => a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h)
    .slice(0, sliceNum);
    }
  
    export const topMarketCap = (data, sliceNum) => {return data.data
    .sort((a, b) => b.quote.USD.market_cap - a.quote.USD.market_cap)
    .slice(0, sliceNum);
    }
  
    export const topVolume = (data, sliceNum) => {return data.data
    .sort((a, b) => b.quote.USD.volume_24h - a.quote.USD.volume_24h)
    .slice(0, sliceNum);
    }