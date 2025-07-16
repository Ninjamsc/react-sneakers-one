import React from "react";
import styles from "./Card.module.scss";
import AppContext from "../../context";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  // added = false
}) {
/*************  ✨ Windsurf Command 🌟  *************/
  const { isItemAdded } = React.useContext(AppContext);
  const isFunctionOnPlus = typeof onPlus === "function";
/*******  3a165cce-f6ab-4e09-b53d-7ff9426262a6  *******/
  // const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
    // setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="Unliked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isItemAdded(id) ? "/img/checked.svg" : "/img/Plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}
console.log();
export default Card;
