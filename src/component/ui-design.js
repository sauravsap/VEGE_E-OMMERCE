import React, { Component } from 'react';
import { datas } from './dummy-data';
import './ui.css';

export default class Ui extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      showStocked: false,
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchText: event.target.value });
  };

  handleCheckboxChange = () => {
    this.setState((prevState) => ({ showStocked: !prevState.showStocked }));
  };

  render() {
    const filteredProducts = datas.map((categoryData) => ({
      category: categoryData.category,
      products: categoryData.products
        .filter((product) =>
          product.name.toLowerCase().includes(this.state.searchText.toLowerCase())
        )
        .filter((product) => (this.state.showStocked ? product.stocked : true)),
    }));

    return (
      <div className="size">
        <input
          type="text"
          className="searchfield"
          placeholder="Search..."
          value={this.state.searchText}
          onChange={this.handleSearchChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.showStocked}
            onChange={this.handleCheckboxChange} 
          />
          Only show products in stock
        </label>
        <div className="movement">
          <h5>Name</h5>
          <h5>Price</h5>
        </div>
        {filteredProducts.map((categoryData) => (
          categoryData.products.length >0 && (
            <div key={categoryData.category}>
              <h3>{categoryData.category}</h3>
              {categoryData.products.map((product) => (
                <div className="flexingproduct" key={product.name}>
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
              ))}
            </div>
          )
        ))}
      </div>
    );
  }
}
