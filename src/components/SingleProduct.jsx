import React from "react";
import { getFnc, putFnc, postFnc } from "./CRUD";

class ProductPage extends React.Component {
  render() {
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
      this.getProducts();
      this.getReviews();
    };
    getProducts = async () => {
      let product = await getFnc("/products/" + id);
      if (product.length > 0) {
        this.setState({ product, loading: false });
      } else {
        this.setState({ status: "No products" });
      }
    };
    getReviews = async () => {
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
      let result = await getFunction("/reviews/" + id);
      if (result) {
        this.setState({ status: "Review Deleted", loading: false });
      } else {
        this.setState({ status: result });
      }
    };
    return <div></div>;
  }
}

export default ProductPage;
