// Import required modules
const express = require("express");
const Moralis = require("moralis").default;
const cors = require("cors");
require("dotenv").config();

// Create an Express application
const app = express();
const port = 3001;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse JSON request bodies

// Define Moralis API key
const MORALIS_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImMzNzU1Zjg2LTQ5YmItNDIzNi04NjkzLTY1YmE0OTlmYjAyNyIsIm9yZ0lkIjoiMzc0NjI5IiwidXNlcklkIjoiMzg0OTkxIiwidHlwZUlkIjoiNjYxZTUwOTAtNWZkNi00ZmQzLWFhNDItNzI2NDdjYTJmNjIzIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDY0NDY3NjksImV4cCI6NDg2MjIwNjc2OX0.3WK4suTkfvqGtb_vD56NKH3GuXSbPnULQ6NDge3SXFs";

// Define API endpoint to get tokens and NFTs
app.get("/getTokens", async (req, res) => {
  const { userAddress, chain } = req.query; // Get user address and chain from query parameters

  // Fetch token balances from Moralis
  const tokens = await Moralis.EvmApi.token.getWalletTokenBalances({
    chain: chain,
    address: userAddress,
  });

  // Fetch NFTs from Moralis
  const nfts = await Moralis.EvmApi.nft.getWalletNFTs({
    chain: chain,
    address: userAddress,
    mediaItems: true,
  });

  // Filter NFTs to include only relevant media URLs
  const myNfts = nfts.raw.result.map((e, i) => {
    if (e?.media?.media_collection?.high?.url && !e.possible_spam && (e?.media?.category !== "video")) {
      return e["media"]["media_collection"]["high"]["url"];
    }
  });

  // Fetch native balance from Moralis
  const balance = await Moralis.EvmApi.balance.getNativeBalance({
    chain: chain,
    address: userAddress
  });

  // Create JSON response
  const jsonResponse = {
    tokens: tokens.raw,
    nfts: myNfts,
    balance: balance.raw.balance / (10 ** 18)
  };

  // Send response
  return res.status(200).json(jsonResponse);
});

// Start Moralis and then start the Express server
Moralis.start({
  apiKey: process.env.MORALIS_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});
