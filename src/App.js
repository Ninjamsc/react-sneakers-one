import React from "react";
import { Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
// import Card from './components/Card/index.js';
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
// import Home1 from './pages/Home1';
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import axios from "axios";
import AppContext from "./context"; //удалить?

// export const AppContext = React.createContext({})

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get("http://localhost:3001/items").then((res) => {
      setItems(res.data);
      console.log(res);
    });
    axios.get("http://localhost:3001/cart").then((res) => {
      setCartItems(res.data);
    });
    axios.get("http://localhost:3001/favorites").then((res) => {
      setFavorites(res.data);

      console.log("Сетаем фавориты", res.data);
    });
  }, []);
  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`http://localhost:3001/cart/${obj.id}`);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
      //    console.log(obj)
    } else {
      axios.post("http://localhost:3001/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
    console.log(obj);
  };
  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3001/cart/${id}`);
    console.log(id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    console.log(id);
  };
  // console.log(cartItems);
  const onAddToFavorite = (obj) => {
    console.log(obj);
    if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
      axios.delete(`http://localhost:3001/favorites/${obj.id}`);
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      //    console.log(obj)
    } else {
      axios.post("http://localhost:3001/favorites", obj); // У Арчаков так: const{data}=await axios...  
      setFavorites((prev) => [...prev, obj]);
      //    console.log(obj)
    }
  };
  const onChangeSearchInput = (event) => {
    // console.log(event.targetValue);
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.find((obj) => Number(obj.id) === Number(id));
  };

    const isFavoritAdded = (id) => {
    return favorites.find((obj) => Number(obj.id) === Number(id));
  };



  return (
    <AppContext.Provider
      value={{
        cartItems,
        items,
        favorites,
        isItemAdded,
        setCartOpened,
        setCartItems,
        onAddToCart,
        onAddToFavorite,
        isFavoritAdded,
      }}
    >
      <div className="wrapper clear">
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
            opened={cartOpened}
          />
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            exect
            element={
              <Home
                cartItems={cartItems}
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
              />
            }
          ></Route>
          <Route
            path="/favorites"
            exect
            element={<Favorites />} // Удалено onAddToFavorite={onAddToFavorite}
          ></Route>
          <Route path="/orders" exect element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
