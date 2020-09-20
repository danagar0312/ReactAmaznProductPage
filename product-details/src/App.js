import React, { Component } from 'react';
import classes from  './App.module.css';
import ProductData from './ProductData';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductImg from './components/ProductImg/ProductImg';

class App extends Component{
  state = {
    data: ProductData,
    productimg:"https://imgur.com/xSIK4M8.png"
  }

  changeColor = (pos) => {
    const updatedImg = this.state.data;
    this.setState({productimg: updatedImg.colorOptions[pos].imageUrl})
  }


  render(){
    return (
      <div className="classes.App">
        <header className="classes.App-header">
          <nav className={classes.nav}>
          <img className={classes.logo} 
          src="https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png" />
          </nav>
        </header>
  
        <div className={classes.MainContainer}>
          
          <ProductImg productimg = {this.state.productimg}/>
          <ProductDetails data={this.state.data} onColorObjectClick={this.changeColor}  />
          
        </div>
      </div>
    );
  }
  
}

export default App;
