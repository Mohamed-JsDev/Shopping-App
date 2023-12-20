import { Button, Container, Image, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, removeItem } from "../RTK/Slices/Card-slice";
import { Link } from "react-router-dom";
function Cart() {
  const items = useSelector((state) => state.Card);
  const dispatch = useDispatch();
  const totalPrice = items.reduce((ecc, p) => {
    ecc += p.price * p.quantity;
    return ecc;
  }, 0);
  return (
    <Container className="p-5 my-5">
      <h1 className="  text-uppercase">Shopping Cart</h1>
      {items.length >= 1 ? (
        <div>
          <div className="float-end py-2 mt-2">
            <Button variant="danger " onClick={() => dispatch(clear())}>
              Remove All
            </Button>
          </div>
          <h4>
            <div className="float-start py-2">
              Total: {totalPrice.toFixed(2)} $
            </div>
          </h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>img</th>
                <th>price</th>
                <th>Quantity</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.title}</td>
                  <td>
                    <Image
                      src={p.image}
                      alt={p.title}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </td>
                  <td>{p.price}$</td>
                  <td>{p.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch(removeItem(p));
                      }}
                    >
                      remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h3 className="d-flex justify-content-center align-items-center">
            <Link to="Buy" className="btn btn-primary w-50">
              {" "}
              Buy
            </Link>
          </h3>
        </div>
      ) : (
        <div>
          <p className="fs-2">
            You haven't shopped yet. You can shop to see what to buy here. good
            luck
            <i className="fa-regular fa-face-smile fs-1 ms-3"></i>
          </p>
          <Link to={`/`} className=" mt-5 ms-auto w-25">
            <Button variant="primary" className=" mt-5 w-50  ">
              &#8592; Back
            </Button>
          </Link>
        </div>
      )}
    </Container>
  );
}
export default Cart;
