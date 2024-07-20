// Define configuration for Ethereum blockchain
const Ethereum = {
    hex: '0x1',        // Hexadecimal identifier for Ethereum chain
    name: 'Ethereum',  // Human-readable name for Ethereum
    rpcUrl: '',         // Placeholder for RPC URL (to be configured if needed)
    ticker: "ETH"      // Ticker symbol for Ethereum
};

// Define configuration for Mumbai Testnet blockchain
const MumbaiTestnet = {
    hex: '0x13881',    // Hexadecimal identifier for Mumbai Testnet chain
    name: 'Mumbai Testnet',  // Human-readable name for Mumbai Testnet
    rpcUrl: '',         // Placeholder for RPC URL (to be configured if needed)
    ticker: "MATIC"    // Ticker symbol for Mumbai Testnet
};

// Export configuration object containing chain settings
export const CHAINS_CONFIG = {
    "0x1": Ethereum,        // Mapping for Ethereum chain configuration
    "0x13881": MumbaiTestnet // Mapping for Mumbai Testnet chain configuration
};
