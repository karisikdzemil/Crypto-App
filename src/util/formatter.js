export function formatNumber(num) {
    if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + "B";
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + "M"; 
    } else {
      return num.toFixed(2);
    }
  }