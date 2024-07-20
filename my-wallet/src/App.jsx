import "./App.css";
import { useState } from "react";
import logo from "./moralisLogo.png";
import { Select } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import CreateAccount from "./Components/CreateAccount";
import RecoverAccount from "./Components/RecoverAccount";
import WalletView from "./Components/WalletView";

/**
 * The main application component for the wallet application.
 * 
 * This component sets up the primary layout of the application, including
 * a header with a logo and a dropdown menu for selecting the blockchain chain.
 * It manages routing between different views based on the state of the wallet
 * and seed phrase.
 * 
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
function App() {
  /**
   * State to store the wallet information.
   * @type {Object|null}
   */
  const [wallet, setWallet] = useState(null);

  /**
   * State to store the seed phrase for account recovery or creation.
   * @type {string|null}
   */
  const [seedPhrase, setSeedPhrase] = useState(null);

  /**
   * State to keep track of the selected blockchain chain.
   * Defaults to Ethereum.
   * @type {string}
   */
  const [selectedChain, setSelectedChain] = useState("0x1");

  return (
    <div className="App">
      <header>
        <img src={logo} className="headerLogo" alt="logo" />
        <Select
          onChange={(val) => setSelectedChain(val)}
          value={selectedChain}
          options={[
            {
              label: "Ethereum",
              value: "0x1",
            },
            // Option for Mumbai Testnet can be added here
            // {
            //   label: "Mumbai Testnet",
            //   value: "0x13881",
            // },
          ]}
          className="dropdown"
        />
      </header>
      <BrowserRouter>
        <Routes>
          {wallet && seedPhrase ? (
            <Route
              path="/yourwallet"
              element={
                <WalletView
                  wallet={wallet}
                  setWallet={setWallet}
                  seedPhrase={seedPhrase}
                  setSeedPhrase={setSeedPhrase}
                  selectedChain={selectedChain}
                />
              }
            />
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route
                path="/recover"
                element={
                  <RecoverAccount
                    setSeedPhrase={setSeedPhrase}
                    setWallet={setWallet}
                  />
                }
              />
              <Route
                path="/yourwallet"
                element={
                  <CreateAccount
                    setSeedPhrase={setSeedPhrase}
                    setWallet={setWallet}
                  />
                }
              />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
