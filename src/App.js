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
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/addItem" element={<AddItem></AddItem>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
