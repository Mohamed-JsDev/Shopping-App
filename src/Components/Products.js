import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProduct } from "../RTK/Slices/Product-slice";
import { addToCard } from "../RTK/Slices/Card-slice";
import { FetchCategory } from "../RTK/Slices/Category-Slice";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);
  const [categoryProduct, setCategoryProduct] = useState("");
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(FetchCategory());
    dispatch(FetchProduct());
  }, [dispatch]);

  const handleCategoryChange = (category) => {
    setCategoryProduct(category);
  };
  return (
    <Container className="p-5 my-3">
      <div className="d-flex justify-content-end ">
        <Col>
          <Button
            variant="primary"
            className="px-4 m-1 "
            onClick={() => handleCategoryChange("")}
          >
            All Product
          </Button>
          {categories.map((category, index) => (
            <Button
              variant="primary"
              key={index}
              className="px-4 m-1"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </Col>
      </div>
      <div className=" my-5 d-flex justify-content-center">
        <Row>
          {products.map((product) =>
            categoryProduct === "" || categoryProduct === product.category ? (
              <Col key={product.id} className="mb-2">
                <Card style={{ height: "550px", width: "18rem" }}>
                  <Card.Img
                    style={{ height: "300px", margin: "5" }}
                    variant="top"
                    src={product.image}
                    alt="mm"
                  />
                  <Card.Body>
                    <Card.Title>{product.title.slice(0, 20)}</Card.Title>
                    <Card.Text>{product.description.slice(0, 60)}</Card.Text>
                    <p>{product.price}$</p>
                    <br />
                    <Button
                      variant="primary"
                      className=" px-4  "
                      onClick={() => {
                        dispatch(addToCard(product));
                      }}
                    >
                      Add to cart
                    </Button>
                    <Link to={`/${product.id}`}>
                      <Button variant="primary" className="ms-3 px-3">
                        Details
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ) : null
          )}
        </Row>
      </div>
    </Container>
  );
}

export default Products;
