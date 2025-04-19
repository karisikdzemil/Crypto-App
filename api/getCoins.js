// backend koji se poziva kada frontend zatraži podatke
export default async function handler(req, res) {
    // Koristi CoinMarketCap API za dobavljanje podataka
    const response = await fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
      headers: {
        "X-CMC_PRO_API_KEY": "43422c1a-2e87-4553-8af5-cabbd94100da" // Tvoj API ključ
      }
    });
  
    // Dobijeni podaci pretvaramo u JSON
    const data = await response.json();
  
    // Vraćamo podatke nazad ka frontend-u
    res.status(200).json(data);
  }
  