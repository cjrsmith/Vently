import "./App.css";
import Movies from "./components/movies";
import { Route, Routes, Redirect } from "react-router-dom";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notFound";

function App() {
  return (
    <main className="container">
      <Routes>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/rentals" element={<Rentals />}></Route>
        <Route path="/not-found" element={<NotFound />}></Route>
      </Routes>
    </main>
  );
}

export default App;
