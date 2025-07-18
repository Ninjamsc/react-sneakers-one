import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex space-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logotype" />
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers </h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-25 cu-p">
          <img width={20} height={20} src="/img/Card.svg" alt="Корзина" />
          <span>1205 руб.</span>
        </li>
        <Link to="/favorites">
          <li className="mr-30 cu-p">
            <img width={20} height={20} src="/img/Heart.svg" alt="Закладки" />
          </li>
        </Link>
        <li>
          <img width={20} height={20} src="/img/User.svg" alt="Пользователь" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
