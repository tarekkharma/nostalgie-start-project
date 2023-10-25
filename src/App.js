import Header from "./components/layouts/Header";
import { Route, Routes } from "react-router-dom";
import SavedItems from "./pages/SavedItems";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Item from "./pages/Item";
import Blogs from "./pages/Blogs";
import Footer from "./components/layouts/Footer";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="items" element={<Items />} />
        <Route path="item" element={<Item />} />
        <Route path="saved-items" element={<SavedItems />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:blogId" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
