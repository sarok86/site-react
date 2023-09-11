import React ,{Component} from "react";
import  {Route, Routes} from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer"

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />    
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/products/us" element={<AboutUs />}/>
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default App;