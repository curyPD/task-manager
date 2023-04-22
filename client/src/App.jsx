import { BrowserRouter, Routes, Route } from "react-router-dom";

import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Completed from "./pages/Completed";
import Important from "./pages/Important";

import ToDoProvider from "./context/ToDoProvider";

function App() {
    return (
        <ToDoProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/completed" element={<Completed />} />
                        <Route path="/important" element={<Important />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ToDoProvider>
    );
}

export default App;
