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
setInterval(fetchBTCPrice, 60000); // Update every minute

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

async function fetchBTCHashrate() {
    try {
        const res = await fetch('https://blockchain.info/q/hashrate');
        const hashrateGH = await res.text();
        // Convert GH/s to EH/s for readability
        const hashrateEH = (parseFloat(hashrateGH) / 1e9).toFixed(2);
        document.getElementById('btc-hashrate').textContent = `Hashrate: ${hashrateEH} EH/s`;
    } catch (e) {
        document.getElementById('btc-hashrate').textContent = 'Hashrate: N/A';
    }
}
fetchBTCHashrate();
setInterval(fetchBTCHashrate, 60000); // Update every minute

async function fetchRemainingBlocks() {
    try {
        const res = await fetch('https://mempool.space/api/v1/difficulty-adjustment');
        const data = await res.json();
        document.getElementById('btc-remaining-blocks').textContent =
            `Blocks Until Difficulty Adjustment: ${data.remainingBlocks}`;
    } catch (e) {
        document.getElementById('btc-remaining-blocks').textContent = 'Blocks Until Difficulty Adjustment: N/A';
    }
}
fetchRemainingBlocks();
setInterval(fetchRemainingBlocks, 60000); // Update every minute