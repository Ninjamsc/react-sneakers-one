
function Header() {
    return (
    
        <header className="d-flex space-between align-center p-40">
        <div className="d-flex align-center">
          <img width= {40} height={40} src="/img/logo.png"/>
          <div className='headerInfo'>
            <h3 className='text-uppercase'>React Sneakers </h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-25'>
            <img width= {20} height={20} src="/img/Card.svg"/>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width= {20} height={20} src="/img/User.svg"/>
          </li>
        </ul>
      
      </header>
    
    );
    }
    export default Header;