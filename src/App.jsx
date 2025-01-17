import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import AuthContext from "./context/AuthProvider";

import Header from "./components/Header";
import Loading from "./components/Loading";
import RouterApp from "./routes";
import Footer from "./components/Footer";

const App = () => {
  const { loadding } = useContext(AuthContext);

  return (
    <div className="app">
      <Router>
        <Header />
        {loadding ? <Loading /> : <RouterApp />}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
