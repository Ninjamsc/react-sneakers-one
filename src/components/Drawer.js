
function Drawer() {
    return (
    
<div style={{display: 'none'}} className="overlay">
        <div className='drawer'>
          <h2 className='d-flex justify-between mb-20'>Корзина  <img className='removeBtn cu-p' src="/img/remove.svg"></img></h2>
          <div className='Items'>
            <div className='cartItem d-flex align-center mb-20'>
              <div style={{backgroundImage: 'url(/img/sneakers/card-1.webp)' }} className='cartItemImg'></div>
              <div className='mr-20 flex'>
                <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img className='removeBtn' src="/img/remove.svg"></img>
            </div>
            <div className='cartItem d-flex align-center mb-20'>
            <div style={{backgroundImage: 'url(/img/sneakers/card-1.webp)' }} className='cartItemImg'></div>
            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 руб.</b>
            </div>
            <img className='removeBtn' src="/img/remove.svg"></img>
          </div>
          </div>
          <div className='cartTotalBlock'>

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
          <button className='greenButton'>Оформить заказ <img src="/img/strelka.svg" alt="Arrow"/></button>
          </div>
          



        </div>
        
        
      </div> 
    
    );
    }
    export default Drawer;