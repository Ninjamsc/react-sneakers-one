import Card from '../components/Card';

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToCart,
  onAddToFavorite,
  cartItems
}
) 

{
  return (
    <div className='content p-40 '>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>{searchValue ? `Поиск по запросу:'${searchValue}'` : 'Все кроссовки'}</h1>
        <div className='search-block d-flex'>
          <img src="/img/Search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className='clear cu-p'
              src='/img/remove.svg'
              alt='Clear'
            />
          )}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...'></input>

        </div>
      </div>
      <div className='d-flex flex-wrap'>
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item) => (
            <Card
              key={item.id}
              // key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              // onFavorite={() => console.log('Нажали фав')}
              onFavorite={(obj) => onAddToFavorite(obj)}
              // onFavorite={(obj) => console.log(obj)}
              // onAddToFavorite={onAddToFavorite}
              onPlus={(obj) => onAddToCart(obj)}
              added={cartItems.find(obj => Number(obj.id) === Number(item.id))}
            // console.log(obj)
            />
          ))}
      </div>
    </div>
  )
}

export default Home;
