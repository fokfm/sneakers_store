import React from 'react';

import FavoriteIcon from './ui/FavoriteIcon';
import CardBody from './ui/CardBody';
import CardFooter from './ui/CardFooter';

import styles from './Card.module.scss';

const Card = ({ item, onPlus }) => {
    if (!item) {
        return null;
    }

    const { title, imageUrl, price, favorites: favoriteDefault } = item;

    return (
        <div className={styles.card}>
            <FavoriteIcon favoriteDefault={favoriteDefault} item={item} />
            <CardBody imageUrl={imageUrl} title={title} />
            <CardFooter
                title={title}
                imageUrl={imageUrl}
                price={price}
                onPlus={onPlus}
            />
        </div>
    );
}

export default Card;
