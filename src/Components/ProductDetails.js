import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCard } from "../RTK/Slices/Card-slice";

export default function ProductDetails() {
  const params = useParams();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <Container className="p-4">
      <Col className="mt-5">
        {products.map((product) =>
          product.id == params.productID ? (
            <Row key={product.id}>
              <Card
                style={{ width: "90%" }}
                className="d-flex   align-items-center"
              >
                <Card.Img
                  style={{ width: "30%", margin: "5" }}
                  variant="top"
                  src={product.image}
                  alt="mm"
                />
                <Card.Body className="mx-5   align-items-center justify-content-center ">
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Title>{product.category}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <p>
                    <p> Count :{product.rating.count} piece</p>
                    Rate :{product.rating.rate}{" "}
                    <i className="fa-solid fa-star"></i>
                  </p>
                  <Card.Title>Price : {product.price}$</Card.Title>

                  <br />
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <Button
                      variant="primary"
                      className="    w-50  "
                      onClick={() => {
                        dispatch(addToCard(product));
                      }}
                    >
                      Add to cart
                    </Button>

                    <Link to={`/Buy`} className="w-50">
                      <Button variant="primary" className="m-1  w-100 ">
                        Buy Now
                      </Button>
                    </Link>
                    <Link to={`/`} className=" mt-5 ms-auto w-25">
                      <Button variant="primary" className="w-50  ">
                        &#8592; Back
                      </Button>
                    </Link>
                  </div>
                  <br />
                </Card.Body>
              </Card>
            </Row>
          ) : null
        )}
      </Col>
    </Container>
  );
}
