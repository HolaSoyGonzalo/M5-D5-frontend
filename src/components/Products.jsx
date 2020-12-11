import React from "react";
import { getFnc } from "./CRUD";
class MarketPlace extends React.Component {
  state = {
    category: "",
    products: [],
    loading: true,
  };
  componentDidMount = () => {
    this.getProducts();
  };
  getProducts = async () => {
    let products = await getFnc("/products");
    if (products.length > 0) {
      this.setState({ products, loading: false });
    } else {
      this.setState({ status: "No products" });
    }
  };
  render() {
    return <div></div>;
  }
}

export default MarketPlace;
