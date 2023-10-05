import {BrowserRouter, Route, Routes} from "react-router-dom";
import Films from "./pages/Films/index.jsx";
import Serials from "./pages/Serials/index.jsx";
import TvShows from "./pages/TvShows/index.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Films />} path='/' />
                <Route element={<Films />} path='/movies' />
                <Route element={<Serials />} path='/serials' />
                <Route element={<TvShows />} path='/tv-shows' />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
