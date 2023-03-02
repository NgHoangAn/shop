import "./scss/_app.scss";
import "./scss/_reponsive.scss";
import React from "react";

import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
