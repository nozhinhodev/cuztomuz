import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Construct from "./pages/Construct";
import Generator from "./pages/Generator";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>

                    <Route index element={<Main />} />
                    <Route path="/construct" element={<Construct/>}/>
                    <Route path="/aigen" element={<Generator/>}/>


            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);