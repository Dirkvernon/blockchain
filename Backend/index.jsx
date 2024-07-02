const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 3001;

app.use(cors());
app.use(express.json());

const MORALIS_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImMzNzU1Zjg2LTQ5YmItNDIzNi04NjkzLTY1YmE0OTlmYjAyNyIsIm9yZ0lkIjoiMzc0NjI5IiwidXNlcklkIjoiMzg0OTkxIiwidHlwZUlkIjoiNjYxZTUwOTAtNWZkNi00ZmQzLWFhNDItNzI2NDdjYTJmNjIzIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDY0NDY3NjksImV4cCI6NDg2MjIwNjc2OX0.3WK4suTkfvqGtb_vD56NKH3GuXSbPnULQ6NDge3SXFs"

app.get("/getTokens", async (req, res) => {

  const { userAddress, chain } = req.query;

  const tokens = await Moralis.EvmApi.token.getWalletTokenBalances({
    chain: chain,
    address: userAddress,
  });

  const nfts = await Moralis.EvmApi.nft.getWalletNFTs({
    chain: chain,
    address: userAddress,
    mediaItems: true,
  });

  const myNfts = nfts.raw.result.map((e, i) => {
    if (e?.media?.media_collection?.high?.url && !e.possible_spam && (e?.media?.category !== "video") ) {
      return e["media"]["media_collection"]["high"]["url"];
    }
  })

  const balance = await Moralis.EvmApi.balance.getNativeBalance({
    chain: chain,
    address: userAddress
  });

  const jsonResponse = {
    tokens: tokens.raw,
    nfts: myNfts,
    balance: balance.raw.balance / (10 ** 18)
  }


  return res.status(200).json(jsonResponse);
});

Moralis.start({
  apiKey: process.env.MORALIS_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});