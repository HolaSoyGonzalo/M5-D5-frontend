import React from "react";
import { getFnc, putFnc, postFnc, deleteFnc } from "./CRUD";

class BackOffice extends React.Component {
  state = {
    products: [],
    loading: true,
    status: "",
    Product: {
      name: "",
      description: "",
      brand: "",
      category: "",
      price: 0,
    },
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
  postProduct = async (e) => {
    e.preventDefault();
    let result = await postFnc("/products", this.state.Product);
    if (result) {
      this.setState({ status: "Product Added", loading: false });
    } else {
      this.setState({ status: result });
    }
  };
  putProduct = async (e) => {
    e.preventDefault();
    let result = await putFnc("/products", this.state.Product);
    if (result) {
      this.setState({ status: "Product Edited", loading: false });
    } else {
      this.setState({ status: result });
    }
  };
  deleteProducts = async (id) => {
    let result = await deleteFnc("/products/" + id);
    if (result) {
      this.setState({ status: "Product Yeeted", loading: false });
    } else {
      this.setState({ status: result });
    }
  };
  render() {
    return <div></div>;
  }
}

export default BackOffice;
