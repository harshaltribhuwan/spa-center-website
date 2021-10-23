import "./App.css";
import Carousel from "./components/Carousel";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import MobileApp from "./components/MobileApp";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Carousel />
      <Trending />
      <CustomerReviews />
      <MobileApp />
      <Footer />
    </div>
  );
}

export default App;
