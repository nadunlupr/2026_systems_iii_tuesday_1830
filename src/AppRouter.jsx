import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import { Counter } from "./state-demo/Counter";
import PromiseDemo from "./promise-demo/promse-demo";
import StoreCounter from "./store-demo/StoreCounter";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='/counter' element={<Counter />} />
                <Route path="/promise-demo" element={<PromiseDemo />} />
                <Route path="/store-demo" element={<StoreCounter />} />
            </Routes>
        </BrowserRouter>
    )
}