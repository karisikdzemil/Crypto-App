export default async function handler(req, res) {
    try {
      const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
        headers: {
          'X-CMC_PRO_API_KEY': '43422c1a-2e87-4553-8af5-cabbd94100da'
        }
      });
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      console.error('Greška pri fetchovanju:', err.message);
      res.status(500).json({ error: 'Greška sa servera' });
    }
  }
  