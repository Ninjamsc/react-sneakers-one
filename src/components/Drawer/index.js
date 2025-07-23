// import styles from './Card.module.scss'
// import axios from "axios";
import React from "react";

import Info from "../Info";
import axios from "axios";
import { useCart } from "../../hooks/useCart";
import styles from "./Drawer.module.scss";

function Drawer({ onClose, onRemove, items = [], opened }) {

  // const { cartItems, setCartItems } = React.useContext(AppContext);
  
  const {cartItems, setCartItems, totalPrice} = useCart();
  const [orderId, setOrderId] = React.useState(null);

  console.log({ orderId }, { setOrderId });

  const [isOrderComplete, setIsOrderComplete] = React.useState(false);

  console.log({ isOrderComplete }, { setIsOrderComplete });

  // const totalPrice =(cartItems.reduce((sum, obj) => sum + obj.price, 0));


  const onClickOrder = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/orders",
        // cartItems,
        {
          items: cartItems,
        }
      );
      //  await axios.put("http://localhost:3001/cart/null", []);

      items.forEach((item) => {
        axios.delete(`http://localhost:3001/cart/${item.id}`);
      });
      setOrderId(data.id);

      console.log({ data });

      setIsOrderComplete(true);
      setCartItems([]);
    } catch (error) {
      alert("Не удалось создать заказ!");
    }
    // items.forEach((item) => {
    //   axios.delete(`http://localhost:3001/cart/${item.id}`);
    // });
    // setCartItems([]);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-20">
          Корзина{" "}
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/remove.svg"
            alt="text"
          ></img>
        </h2>
        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/remove.svg"
                    alt="Remove"
                  ></img>
                </div>
              ))}
              {/* console.log(obj) */}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div> </div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{totalPrice * 0.05} руб.</b>
                </li>
              </ul>
              <button onClick={onClickOrder} className="greenButton">
                Оформить заказ <img src="/img/strelka.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            // description="Ваш заказ # ${orderId} скоро будет передан курьерской доставке"
            description={
              isOrderComplete
                ? `Ваш заказ # ${orderId} скоро будет передан курьерской доставке.`
                : "Добавьте хотябы одну пару кроссовок, чтобы сделать заказ."
            }
            image={isOrderComplete ? "/img/Order.png" : "/img/empty-cart.jpg"}
          />
        )}
      </div>
    </div>
  );
}
export default Drawer;
