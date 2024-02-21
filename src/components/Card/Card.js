import React from "react";
import styles from './Card.module.scss'

function Card({title, imageUrl, price, onFavorite, onPlus}) {

    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, imageUrl, price});
        setIsAdded(!isAdded)
    }


    // React.useEffect(() =>{
    //   console.log('useeffect work');
    // }, [isAdded]);


    return (

        <div className={styles.card}>




            <div className={styles.favorite}>
                <img src="/img/heard-unliked.svg" alt="no img"/>
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
