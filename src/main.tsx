import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routers.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <div className="max-w-7xl mx-auto"> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* // </div> */}
  </React.StrictMode>
);
