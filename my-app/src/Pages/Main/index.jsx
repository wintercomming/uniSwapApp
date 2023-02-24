import React from "react";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import './style.css';

export default function Main() {
  return (
    <div className="App">
      <div className="App-box">
        <div className="App-box-header">
          <span>兑换</span>
          <SettingsIcon />
        </div>
        <div className="App-box-body">
          <div className="App-box-switch">⇅</div>
          <div className="App-box-item">
            <input className="App-box-input" defaultValue="0"></input>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.97168 1L6.20532 6L11.439 1" stroke="#AEAEAE"></path>
            </svg>
          </div>
          <div className="App-box-item">
            <input className="App-box-input" defaultValue="0"></input>
          </div>
          <Button variant="contained" color="primary" className="App-box-btn">
            链接钱包
          </Button>
        </div>
      </div>
    </div>
  );
}
