import React, { useState } from "react";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowIcon from "../../Components/ArrowIcon";
import { ConnectionOptions } from "../../libs/components/ConnectionOptions";
import { ConnectionType, switchNetwork } from "../../libs/connections";
import { useWeb3React } from "@web3-react/core";
import { ErrorBoundary } from "react-error-boundary";
import "./style.css";

const FallbackComponent = ({ error }:any) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <p>Please reload the application</p>
    </div>
  );
};

export default function Main() {
  const [switchSymbol, setSwitchSymbol] = useState({
    name: "USDT",
    num: "0",
    img: "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
  });

  const [switchedSymbol, setSwitchedSymbol] = useState({
    name: "USDC",
    num: "0",
    img: "https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
  });
  const [open, setOpen] = useState(false);
  const [connectionType, setConnectionType] = useState<ConnectionType | null>(null)
  const { chainId, account, isActive } = useWeb3React();

  const handleClose = ()=>{
    setOpen(false);
  }

  const handleLink = () => {
    setOpen(true);
  }

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <div className="App">
        <ConnectionOptions
          activeConnectionType={connectionType}
          isConnectionActive={isActive}
          onActivate={setConnectionType}
          onDeactivate={setConnectionType}
          open={open}
          handleClose={handleClose}
        />
        <div className="App-box">
          <div className="App-box-header">
            <span>兑换</span>
            <SettingsIcon />
          </div>
          <div className="App-box-body">
            <div className="App-box-switch">⇅</div>
            <div className="App-box-item">
              <input className="App-box-input" defaultValue="0"></input>
              <div className="App-box-symbol-switch">
                <div className="App-box-symbol-switch-left">
                  <img
                    className="App-box-symbol-switch-logo"
                    src={switchSymbol.img}
                  ></img>
                  <span className="App-box-symbol-switch-text">
                    {switchSymbol.name}
                  </span>
                </div>
                <ArrowIcon fontSize="12px"></ArrowIcon>
              </div>
            </div>
            <div className="App-box-item">
              <input className="App-box-input" defaultValue="0"></input>
              <div className="App-box-symbol-switch">
                <div className="App-box-symbol-switch-left">
                  <img
                    className="App-box-symbol-switch-logo"
                    src={switchedSymbol.img}
                  ></img>
                  <span className="App-box-symbol-switch-text">
                    {switchedSymbol.name}
                  </span>
                </div>
                <ArrowIcon fontSize="12px"></ArrowIcon>
              </div>
            </div>
            <Button variant="contained" color="primary" className="App-box-btn" onClick={handleLink}>
              链接钱包
            </Button>
          </div>
        </div>
        {account ? <h3>{`Connected Account: ${account}`}</h3> : ''}
      </div>
    </ErrorBoundary>
  );
}
