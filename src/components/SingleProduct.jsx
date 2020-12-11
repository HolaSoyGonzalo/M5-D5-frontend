import React from "react";
import { getFnc, putFnc, postFnc } from "./CRUD";

class SingleProduct extends React.Component {
  state = {
    product: [],
    reviews: [],
    status: "",
    loading: true,
    review: {
      rate: 3,
      comment: "",
      elementId: this.props.ID,
    },
  };
  componentDidMount = () => {
    this.getProduct();
    this.getReviews();
  };
  getProduct = async (id) => {
    let product = await getFnc("/products/" + id);
    if (product.length > 0) {
      this.setState({ product, loading: false });
    } else {
      this.setState({ status: "No products" });
    }
  };
  getReviews = async (id) => {
    let reviews = await getFnc("/reviews/" + id);
    if (reviews.length > 0) {
      this.setState({ reviews, loading: false });
    } else {
      this.setState({ status: "No reviews" });
    }
  };
  postReview = async (e) => {
    e.preventDefault();
    let result = await postFnc("/reviews", this.state.review);
    if (result) {
      this.setState({ status: "review Added", loading: false });
    } else {
      this.setState({ status: result });
    }
  };
  putReview = async (e) => {
    e.preventDefault();
    let result = await putFnc("/reviews", this.state.review);
    if (result) {
      this.setState({ status: "review Edited", loading: false });
    } else {
      this.setState({ status: result });
    }
  };
  deleteReviews = async (id) => {
    let result = await getFnc("/reviews/" + id);
    if (result) {
      this.setState({ status: "Review Deleted", loading: false });
    } else {
      this.setState({ status: result });
    }
  };

  render() {
    return <div></div>;
  }
}

export default SingleProduct;
