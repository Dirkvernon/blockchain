# JVC Wallet

JVC Wallet is a decentralized wallet application that allows users to view their token balances, NFTs, and native cryptocurrency balances on various blockchain networks using Moralis.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Overview

JVC Wallet consists of a backend server and a frontend application (my-wallet). The backend is built with Node.js and Express, and it interacts with the Moralis API to fetch token balances, NFTs, and native cryptocurrency balances for a given user address. The frontend (my-wallet) which is built with react and vite, provides a user interface to interact with this backend.

### Backend

The backend server exposes an API endpoint to retrieve data related to tokens, NFTs, and balance for a given user address.

### Frontend

The frontend application provides a user interface for account creation, recovery, and viewing wallet details.

## Installation

### Prerequisites

- Node.js installed on your machine
- Moralis API key

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/jvc-byte/jvcwallet.git
2. Navigate to the backend directory:
cd jvcwallet/backend
3. Install the dependencies:
npm install
4. Head over to https://admin.moralis.io/ to get your api key or you can use mine.
5. Create a .env file in the backend directory and add your Moralis API key:
MORALIS_KEY=your-moralis-api-key

### Frontend

1. Navigate to the my-wallet directory:
cd jvcwallet/my-wallet
2. Install the dependencies:
npm install

## Usage

1. Backend
Start the backend server:
node index.jsx
The server will be running on http://localhost:3001.
You can make GET requests to /getTokens with query parameters userAddress and chain to fetch token balances, NFTs, and native balance.

2. Frontend
Navigate to the my-wallet directory:
cd jvcwallet/my-wallet
Start the development server:
npm run dev
Open your browser and go to http://localhost:3000 to interact with the application.

## Contributing
We welcome contributions to the JVC Wallet project! To contribute:

Fork the repository.
Create a new branch for your changes.
Commit your changes.
Push your branch to GitHub.
Open a pull request describing your changes.
Please ensure that your code follows the existing style and includes appropriate documentation.

## License


## Contact
For questions or feedback, please reach out to:

Email: jvc8463@gmail.com
GitHub: https://github.com/jvc-byte/jvcwallet
LinkedIn: https://linkedin.com/in/jvc-byte
