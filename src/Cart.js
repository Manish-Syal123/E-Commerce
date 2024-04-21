import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CartItem from "./components/CartItem";
import { useCartContext } from "./context/cart_context";
import FormatPrice from "./Helpers/FormatPrice";
import { Button } from "./styles/Button";
import { useEffect, useState } from "react";
import Axios from "axios";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);

  const { isAuthenticated, user } = useAuth0();
  const [userDBData, setUserDBData] = useState([]);
  const [currdbuserId, setCurrDbUserId] = useState(null);

  //get all the userAuthDetails from MYSQL
  useEffect(() => {
    Axios.get("http://localhost:8081/api/Admin_dashboard")
      .then((result) => {
        setUserDBData(result.data);
        // Find the user's id based on the user_email matching Auth0 user's email
        const currentUser = result.data.find(
          (userData) => userData.user_email === user.email
        );
        if (currentUser) {
          setCurrDbUserId(currentUser.id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isAuthenticated]);

  if (cart.length === 0) {
    return (
      <EmptyDiv>
        <h3>No Item 😲 in Cart 🛒</h3>
      </EmptyDiv>
    );
  }

  const handlePurchase = () => {
    if (isAuthenticated) {
      // Create an array to store the product details of the current user

      const products = cart.map((product) => ({
        item_name: product.name,
        item_quantity: product.amount,
        item_color: product.color,
        item_price: product.price,
      }));

      console.log("Products data: ", products);
      // Send a POST request to the backend with the product details
      Axios.post("http://localhost:8081/api/addProducttodb", {
        products: products,
        id: currdbuserId,
      })
        .then((response) => {
          console.log("Product details added successfully:", response.data);
          alert("Thanks for Ordering from Us 😊. Have a Great day 🎉   ");
          clearCart();
        })
        .catch((error) => {
          console.error("Error adding product details:", error);
        });
    } else {
      alert("Please Login first before placing an order⚡");
    }
  };

  return (
    <Wrapper>
      <div className="container">
        {isAuthenticated && (
          <div className="cart-user--profile">
            <img src={user.picture} alt={user.name} />
            <h2 className="cart-user--name">{user.name}</h2>
          </div>
        )}

        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />

        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />

        <div className="cart-two-button">
          <NavLink to="/products">
            <Button> continue Shopping </Button>
          </NavLink>
          <Button className="btn btn-clear" onClick={clearCart}>
            clear cart
          </Button>
        </div>

        {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>

        {/* Buy Cart items*/}
        <div
          style={{ display: "flex", justifyContent: "center" }}
          onClick={handlePurchase}
        >
          <Button className="btn">Buy items in Cart</Button>
        </div>
      </div>
    </Wrapper>
  );
};

const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
