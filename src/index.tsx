import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./lib/store";
import { Browser } from "phosphor-react";
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: 12,
          },
        }}
      />
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
