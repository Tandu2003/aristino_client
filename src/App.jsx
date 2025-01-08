import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Loading from "./components/Loading";
import RouterApp from "./routes";
import Footer from "./components/Footer";

const App = () => {
  const isLoading = false;

  return (
    <div className="app">
      <Router>
        <Header />
        {isLoading ? <Loading /> : <RouterApp />}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
