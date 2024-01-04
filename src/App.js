import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  return (
    <div className="wrapper clear">
      
      <Header/>
      <Drawer/>
 

      <div className='content p-40 '>
          <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src="/img/Search.svg" alt="Search"></img>
            <input placeholder='Поиск...'></input>

          </div>
          </div>

          <div className='d-flex'>
          <Card />
          <div className="card">
            <img width={133} height={112} src='/img/sneakers/card-2.webp' alt='Sneakers'/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/Plus.svg' alt="Plus"/>
                
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src='/img/sneakers/card-3.webp' alt='Sneakers'/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/Plus.svg' alt="Plus"/>
                
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src='/img/sneakers/card-4.webp' alt='Sneakers'/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/Plus.svg' alt="Plus"/>
                
              </button>
            </div>
          
          </div>
          
          
          </div>
          


      </div>
    </div>
  );
}

export default App;
