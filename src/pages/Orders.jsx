import React from "react";
import Card from "../components/Card";
import axios from "axios";
import AppContext from "../context";

function Orders() {

  const { onAddToFavorite } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    (async () => {

      try {
        const { data } = await axios.get("http://localhost:3001/orders");
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
      } catch (error) {
        alert("Не удалось получить заказы");
        console.error(error);
      } 
    })();
  }, []);

  return (
    <div className="content p-40 ">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex flex-wrap">
        {orders.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onFavorite={(obj) => onAddToFavorite(obj)}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
