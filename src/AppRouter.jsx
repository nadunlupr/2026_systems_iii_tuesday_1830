import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import { Counter } from "./state-demo/Counter";
import PromiseDemo from "./promise-demo/promse-demo";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='/counter' element={<Counter />} />
                <Route path="/promise-demo" element={<PromiseDemo />} />
            </Routes>
        </BrowserRouter>
    )
}