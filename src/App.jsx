// import { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import AuthContext from "./context/AuthProvider";

import Header from "./components/Header";
import Loading from "./components/Loading";
import RouterApp from "./routes";
import Footer from "./components/Footer";

const App = () => {
  // const { loading } = useContext(AuthContext);
  const loading = false;

  return (
    <div className="app">
      <Router>
        <Header />
        {loading ? <Loading /> : <RouterApp />}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
