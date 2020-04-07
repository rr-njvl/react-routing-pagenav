import React from 'react';
import ProductListing from './ProductListing';

class Products extends React.Component {
  state = {
    isLoading: true,
    products: [],
    error: null
  };
  constructor(props) {
    super(props);
    this.name = props.name;
    this.users = [];
  }

  componentWillMount() { 
    fetch(`https://my-json-server.typicode.com/rr-njvl/jsondata/products`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          products: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, products, error } = this.state;
    return (
      <div className="products">
        <div>
          <h2>{this.name}</h2>
          <p>Display all the users in table format from external JSON service using FETCH()</p>
        </div>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          <table id="mobiles">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Cost (Rupees)</th>
            </tr>
            {products.map(prod => (
              <ProductListing product={prod} />  
            ))}
          </table>
        ):(
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

export default Products;