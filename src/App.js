import React ,{Component} from "react";
import  {Route, Routes,Navigate} from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer"
import DetailsPage from "./components/DetailsPage";
import NotFound from "./components/NotFound";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />    
                    <Route path="/products/" element={<Products/>}/>
                    <Route path="/products/:id" element={<DetailsPage/>}/>
                    <Route path="/products/us" element={<AboutUs />}/>
                    <Route path="/notfound" element={<NotFound />}/>
                    <Route path="/*" element={<Navigate to="/notfound"/>}/>
                </Routes>
                <Footer />
            </div>
        );
    }
}

export default App;