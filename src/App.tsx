import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Puppies from "./pages/Puppies";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import emailjs from "@emailjs/browser";
import { useState } from "react";

emailjs.init({
    publicKey: "plvSwMnwrtz7r7WIC",
});

function App() {
    const [selectedBreed, setSelectedBreed] = useState<"schnauzer" | "shiba">(
        "schnauzer"
    );

    return (
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-neutral">
                <Navbar
                    selectedBreed={selectedBreed}
                    setSelectedBreed={setSelectedBreed}
                />
                <main className="flex-grow">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Navigate to={`/${selectedBreed}`} replace />
                            }
                        />
                        <Route
                            path="/schnauzer"
                            element={<Home breed="schnauzer" />}
                        />
                        <Route path="/shiba" element={<Home breed="shiba" />} />
                        <Route
                            path="/schnauzer/about"
                            element={<About breed="schnauzer" />}
                        />
                        <Route
                            path="/shiba/about"
                            element={<About breed="shiba" />}
                        />
                        <Route
                            path="/schnauzer/puppies"
                            element={<Puppies breed="schnauzer" />}
                        />
                        <Route
                            path="/shiba/puppies"
                            element={<Puppies breed="shiba" />}
                        />
                        <Route
                            path="/schnauzer/contact"
                            element={<Contact breed="schnauzer" />}
                        />
                        <Route
                            path="/shiba/contact"
                            element={<Contact breed="shiba" />}
                        />
                        <Route
                            path="/schnauzer/gallery"
                            element={<Gallery breed="schnauzer" />}
                        />
                        <Route
                            path="/shiba/gallery"
                            element={<Gallery breed="shiba" />}
                        />
                    </Routes>
                </main>
                <Footer selectedBreed={selectedBreed} />
            </div>
        </Router>
    );
}

export default App;
