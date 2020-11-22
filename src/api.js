const url = "https://api.coincap.io/v2";

const getAssets = async () => {
  let response = await fetch(`${url}/assets?limit=20`);
  response = await response.json();
  return response.data;
};

const getAsset = async coin => {
  let response = await fetch(`${url}/assets/${coin}`);
  response = await response.json();
  return response.data;
};

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(res => res.json())
    .then(res => res.data);
}

const getMarkets = async coin => {
  let response = await fetch(`${url}/assets/${coin}/markets?limit=5`);
  response = await response.json();
  return response.data;
};

const getExchange = async id => {
  let response = await fetch(`${url}/exchanges/${id}`);
  response = await response.json();
  return response.data;
};

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
};
