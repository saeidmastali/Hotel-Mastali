import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { HotelProvider } from './components/HotelContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HotelProvider>
      <App />
    </HotelProvider>
  </React.StrictMode>
);
