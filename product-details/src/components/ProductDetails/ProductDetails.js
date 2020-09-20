import React from 'react';

import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {

        const colorOptions = props.data.colorOptions.map( (item,index) => {
                const classArr = [classes.ProductImage]
                return(
                        <img key={index} className={classArr.join(' ')} src={item.imageUrl}
                        alt={item.styleName} onClick={() => props.onColorObjectClick(index)}></img>
                );
        })
        
        return(
                <div>
                <h1>{props.data.title}</h1>
                <p>{props.data.description}</p>
                <h2>Select Color</h2>
                { colorOptions
                /* {<img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png"
                alt="red-strap"></img>
                <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png"
                alt="blue-strap"></img>
                <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png"
                alt="purple-strap"></img>} */}

                <div>Features</div>
                        <div>
                                <button className={classes.time}>Time</button>
                                <button className={classes.rate}>Heart Rate</button>
                        </div>
                        <div>
                                <button className={classes.time}>Buy Now</button>
                        </div>
        </div>
        );
    
}

export default ProductDetails;
