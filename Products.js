import React from 'react';
import axios from 'axios';
import ProductListing from './ProductListing';

class Products extends React.Component {
  state = {
    products:[]
  }

  constructor(props) {
    this.name = props.name;
  }

  componentWillMount() {
    axios.get(`https://my-json-server.typicode.com/rr-njvl/jsondata/products`)
    .then(res => {
      this.setState({
        products: res.data
      })
    })
    .catch(error => { alert("service failed"); });

    /*fetch(`https://my-json-server.typicode.com/rr-njvl/jsondata/products`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          products: data
        })
      )
      .catch(error => { alert("service failed"); });*/
  }

  render() {
    return (
      <div className="products">
        <div>
          <h2>{this.name}</h2>
          <p>Display all the users in table format from external JSON service</p>
        </div>
        <table id="mobiles">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Cost (Rupees)</th>
            </tr>
            {this.state.products.map(prod => (
              <ProductListing product={prod} />  
            ))}
          </table>
      </div>
    );
  }
}

export default Products;