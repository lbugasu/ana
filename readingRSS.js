const fetch = require("node-fetch");

const RSS_URL = `https://www.standardmedia.co.ke/rss/magazines.php`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(data => console.log(data))