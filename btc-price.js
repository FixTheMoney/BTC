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

// Fetch current Bitcoin blockheight from blockchain.com
async function fetchBTCBlockheight() {
    try {
            const res = await fetch('https://blockchain.info/q/getblockcount');
            const blockheight = await res.text();
            document.getElementById('btc-blockheight').textContent = `Block Height: ${blockheight}`;
        } catch (e) {
            document.getElementById('btc-blockheight').textContent = 'Block Height: N/A';
        }
}        
fetchBTCBlockheight();
setInterval(fetchBTCBlockheight, 60000); // Update every minute