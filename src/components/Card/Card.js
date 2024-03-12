import React, {useState} from "react";
import styles from './Card.module.scss'
import axios from "axios";

function Card({item, onPlus}) {
    const {title, imageUrl, price, favorites: favoritDefault} = item;
    const [isAdded, setIsAdded] = React.useState(false);
    const [fav, setFav] = useState(favoritDefault);


    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded)
    }

    const onChangeFavorites = () => {
        setFav((preFav) => {
            axios.put(`https://65d24eef987977636bfc3b74.mockapi.io/sneackers_api/v1/items/${item.id}`, {
                ...item, favorites: !preFav
            });
            return !preFav
        });


    }


    return (

        <div className={styles.card}>


            <div className={styles.favorite}>
                <img onClick={onChangeFavorites} src={fav ? '/img/heard-liked.svg' : "/img/heard-unliked.svg"}
                     alt="no img"/>
            </div>
            <img src={imageUrl} alt="no img" width={133} height={112}/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column ">
                    <span>Price:</span>
                    <b>{price + ' $'}</b>
                </div>

                <img className={styles.plus} onClick={onClickPlus}
                     src={isAdded ? '/img/button-checked.svg' : '/img/button-unchecked.svg'} alt="no img"/>

            </div>
        </div>

    );
}

export default Card;
