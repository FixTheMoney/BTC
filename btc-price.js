async function fetchBTCPrice() {
    try {
        const res = await fetch('https://api.coinbase.com/v2/prices/BTC-USD/spot');
        const data = await res.json();
        const price = Number(data.data.amount).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        document.getElementById('btc-price').textContent = `BTC Price: ${price}`;
    } catch (e) {
        document.getElementById('btc-price').textContent = 'BTC Price: N/A';
    }
}
fetchBTCPrice();
setInterval(fetchBTCPrice, 60000); // Update every