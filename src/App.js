import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Header/Header";
import Register from "./Pages/Login/Register/Register";
import Login from "./Pages/Login/Login/Login";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import ItemDetails from "./Pages/Home/Items/ItemDetails/ItemDetails";
import ManageInventory from "./Pages/Inventory/ManageInventory/ManageInventory";
import AddItem from "./Pages/Home/Items/AddItem/AddItem";
import UserItems from "./Pages/Home/Items/UserItems/UserItems";
import Footer from "./Pages/Footer/Footer";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/inventory/:itemId"
          element={
            <RequireAuth>
              <ItemDetails></ItemDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/addItem"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/userItems"
          element={
            <RequireAuth>
              <UserItems></UserItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
