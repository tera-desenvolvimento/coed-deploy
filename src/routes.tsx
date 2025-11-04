import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Banner from "./pages/banner";
import Home from "./pages/home";

const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/matriculas-2026" element={<Banner />} />
                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>
    )
}

export default MyRoutes;