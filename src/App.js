import Header from "./components/layouts/Header";
import { Route, Routes } from "react-router-dom";
import SavedItems from "./pages/SavedItems";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Item from "./pages/Item";
import Footer from "./components/layouts/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="items" element={<Items />} />
        <Route path="item" element={<Item />} />
        <Route path="saved-items" element={<SavedItems />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
