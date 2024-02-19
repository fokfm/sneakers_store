import React, {useEffect, useState} from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";



function App() {

  const urlItems = 'https://65d24eef987977636bfc3b74.mockapi.io/sneackers_api/v1/items';

  const [items, setItems] = useState([]);
  const [cardItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() =>{
    fetch(urlItems)
        .then(response => response.json())
        .then(json => setItems(json));

  },[])

  const onAddToCard = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  }
  console.log(cardItems)


  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cardItems} onClickCart ={() => setCartOpened(!cartOpened)}/>}
      <Header onClickCart ={() => setCartOpened(!cartOpened)}/>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="sneakers d-flex flex-wrap"  >
          {
            items.map(item => <Card
                title ={item.title}
                price ={item.price}
                imageUrl ={item.imageUrl}
                onFavorite = {() => console.log('Добавили в закладки')}
                onPlus = {(obj) => onAddToCard(obj)}
            />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
