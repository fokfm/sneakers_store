import React, { memo } from 'react';

import styles from '../Card.module.scss';

const CardBody = memo(({ imageUrl, title }) => {
    return (
        <div>
            <img src={ imageUrl } alt="no img" width={ 133 } height={ 112 } />
            <h5 className={styles.title}>{ title }</h5>
        </div>
    );
});

export default CardBody;
