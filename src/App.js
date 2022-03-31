import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import Coins from "./components/Coins/Coins";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import CoinDetail from "./components/CoinDetail/CoinDetail";
import BdAddress from "./components/Contact/BdAddress";
import UsAddress from "./components/Contact/UsAddress";
import NotFound from "./components/NotFound/NotFound";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/coins" element={<Coins />} />
                <Route path="/coin-detail/:id" element={<CoinDetail />} />
                <Route path="/contact" element={<Contact />}>
                    <Route path="bd-address" element={<BdAddress />} />
                    <Route path="us-address" element={<UsAddress />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
