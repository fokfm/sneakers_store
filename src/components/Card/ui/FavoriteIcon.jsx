import React, { useState, memo } from 'react';
import axios from 'axios';

import styles from '../Card.module.scss';

const FavoriteIcon = memo(({ favoriteDefault, item }) => {
    const [fav, setFav] = useState(favoriteDefault);

    const onChangeFavorites = () => {
        setFav((preFav) => {
            axios.put(`https://65d24eef987977636bfc3b74.mockapi.io/sneackers_api/v1/items/${item.id}`, {
                ...item, favorites: !preFav
            });
            return !preFav
        });
    };

    return (
        <div className={styles.favorite}>
            <img
                onClick={onChangeFavorites}
                src={fav ? '/img/heard-liked.svg' : "/img/heard-unliked.svg"}
                alt="no img"
            />
        </div>
    );
});

export default FavoriteIcon;
