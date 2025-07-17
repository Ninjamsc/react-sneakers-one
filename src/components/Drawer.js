// import styles from './Card.module.scss'
// import axios from "axios";
import React from "react";
import Info from "./Card/info";
import AppContext from "../context";
import axios from "axios";

function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);

  const onClickOrder = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/orders",
        cartItems
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (error) {}
    // items.forEach((item) => {
    //   axios.delete(`http://localhost:3001/cart/${item.id}`);
    // });
    // setCartItems([]);
  };

  return (
    <div className="overlay">
      <div className="drawer">
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
          <div>
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
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
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
            description={
              isOrderComplete
                ? "Ваш заказ #18 скоро будет передан курьерской доставке"
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
