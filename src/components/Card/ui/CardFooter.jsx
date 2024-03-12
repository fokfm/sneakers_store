import React, { useState } from 'react';

import styles from '../Card.module.scss';

const CardFooter = ({ title, imageUrl, price, onPlus }) => {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles['price-wrapper']}>
            <div className={styles['price-block']}>
                <span className={styles['price-title']}>Price:</span>
                <b className={styles.price}>{price + ' $'}</b>
            </div>
            <img
                alt="no img"
                className={styles.plus}
                onClick={onClickPlus}
                src={isAdded ? '/img/button-checked.svg' : '/img/button-unchecked.svg'}
            />
        </div>
    );
};

export default CardFooter;
