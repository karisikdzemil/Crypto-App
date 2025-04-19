export function formatNumber(num) {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + "B";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + "M"; 
  } else {
    return num?.toFixed(2) ?? "0.00";
  }
}

export const topGainers = (data, sliceNum) => {
  if (!data?.data || !Array.isArray(data.data)) return [];
  return data.data
    .filter(coin => coin?.quote?.USD?.percent_change_24h != null)
    .sort((a, b) => b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h)
    .slice(0, sliceNum);
};

export const topLosers = (data, sliceNum) => {
  if (!data?.data || !Array.isArray(data.data)) return [];
  return data.data
    .filter(coin => coin?.quote?.USD?.percent_change_24h != null)
    .sort((a, b) => a.quote.USD.percent_change_24h - b.quote.USD.percent_change_24h)
    .slice(0, sliceNum);
};

export const topMarketCap = (data, sliceNum) => {
  if (!data?.data || !Array.isArray(data.data)) return [];
  return data.data
    .filter(coin => coin?.quote?.USD?.market_cap != null)
    .sort((a, b) => b.quote.USD.market_cap - a.quote.USD.market_cap)
    .slice(0, sliceNum);
};

export const topVolume = (data, sliceNum) => {
  if (!data?.data || !Array.isArray(data.data)) return [];
  return data.data
    .filter(coin => coin?.quote?.USD?.volume_24h != null)
    .sort((a, b) => b.quote.USD.volume_24h - a.quote.USD.volume_24h)
    .slice(0, sliceNum);
};
