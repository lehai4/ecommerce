import { BrowserRouter } from "react-router-dom";
import { Global, Header, Router, Footer } from "./Common";

import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Global>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header />
        <div className="container" style={{ overflow: "hidden" }}>
          <div className="main">
            <Router />
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </Global>
  );
}

export default App;
