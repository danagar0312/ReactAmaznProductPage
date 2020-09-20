import React from 'react';

import classes from './ProductImg.module.css';

const ProductImg = (props) => {
    return(
        <div>
        <div className={classes.productImg}>
            <img src={props.productimg} alt="Product Preview"></img>
          </div>
        </div>
    );
    
}

export default ProductImg;
