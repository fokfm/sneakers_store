import React, {useEffect, useState} from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Favorites from "./components/Favorites";
import axios from "axios";
import {Routes, Route, Link} from "react-router-dom";


function App() {

    const urlItems = 'https://65d24eef987977636bfc3b74.mockapi.io/sneackers_api/v1/items';
    const urlPostItems = 'https://65d24eef987977636bfc3b74.mockapi.io/sneackers_api/v1/cart';




    const [items, setItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cardItems, setCartItems] = useState([]);
    const [cartOpened, setCartOpened] = useState(false);


    useEffect(() => {

        axios.get(urlItems).then((res) => setItems(res.data));
        axios.get(urlPostItems).then((res) => setCartItems(res.data));


    }, [])

    const onAddToCard = async (obj) => {

        const {data: newCartItem} = await axios.post(urlPostItems, obj);
        setCartItems((prev) => [...prev, newCartItem]);
    }

    const onDeleteInCart = (id) => async () => {
        try {
            await axios.delete(`https://65d24eef987977636bfc3b74.mockapi.io/sneackers_api/v1/cart/${id}`);
            setCartItems((prev) => prev.filter(items => items.id !== id));
        } catch (error) {
            console.error(error)
        }

    }







    const onChangeSearchInput = (event) => {

        setSearchValue(event.target.value)
        console.log(event.target.value)
    }


    return (


        <div className="wrapper clear">


            {cartOpened && <Drawer items={cardItems} onClickCart={() => setCartOpened(!cartOpened)}
                                   onDeleteInCart={onDeleteInCart}/>}
            <Header onClickCart={() => setCartOpened(!cartOpened)}/>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>{searchValue ? `Search by:"${searchValue}"` : 'All sneakers'}</h1>
                    <div className="search-block d-flex">
                        <img src="img/search.svg" alt=""/>
                        {searchValue &&
                            <img onClick={() => setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg"
                                 alt="Clear"/>}
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..."/>
                    </div>
                </div>
                <div className="sneakers d-flex flex-wrap">
                    {
                        items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item =>
                            <Card
                                key={item.id}
                                onPlus={onAddToCard}
                                item = {item}
                            />)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
