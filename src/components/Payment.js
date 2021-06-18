import { CallToActionSharp, Restaurant } from "@material-ui/icons";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getCartTotal } from "../features/counter/userSlice";

const Payment = () => {
  const orders = useSelector((state) => state.user.orders);
  const totalAmount = useSelector(() => getCartTotal(orders));

  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, action, err) => {
          return action.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: totalAmount,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          if (order) {
            alert("Your order has successfully been placed!");
          }
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <PaymentContainer>
      <PaymentContent>
        <PaymentHeadline>Payment Details</PaymentHeadline>
        <PaymentSummary>
          <OrderTitle>
            <span>Order</span> Summary
          </OrderTitle>
          <Orders>
            {orders.map((order) => (
              <OrderDetail>
                <OrderContent>
                  <Title>{order.title}</Title>
                  <RestaurantName>from {order.restaurantChain}</RestaurantName>
                </OrderContent>
                <ItemPrice>
                  <span>$</span>29.99
                </ItemPrice>
              </OrderDetail>
            ))}
          </Orders>
          <BottomLine />
          <OrdersTotal>
            <TotalHeadline>SubTotal:</TotalHeadline>
            <TotalAmount>
              <span>$</span>
              {totalAmount}
            </TotalAmount>
          </OrdersTotal>
          {/* <OrdersTotal></OrdersTotal> */}
        </PaymentSummary>
        <PaymentOptions>Choose your payment option:</PaymentOptions>
        <PaymentButton ref={paypal}></PaymentButton>
      </PaymentContent>
    </PaymentContainer>
  );
};

const PaymentContainer = styled.div`
  width: 100%;
  margin-bottom: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaymentSummary = styled.div`
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  height: fit-content;
  border: 1px solid lightgray;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 768px) {
    width: initial;
    box-shadow: none;
  }
`;

const OrderTitle = styled.h2`
  text-decoration: underline;
  span {
    color: #ff3333;
  }
`;

const Orders = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;

const OrderDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.h3`
  font-size: 20px;
`;

const RestaurantName = styled.p`
  font-size: 14px;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  font-weight: 700;

  span {
    color: #ff3333;
  }
`;

const BottomLine = styled.hr`
  width: 100%;
  margin: 10px 0px;
`;

const PaymentContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
  margin: 30px;

  @media (max-width: 768px) {
    margin: 20px 0px;
  }
`;

const PaymentHeadline = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const PaymentButton = styled.div`
  width: initial;
  margin-top: 20px;
  font-weight: 700;
  z-index: -10;
`;

const PaymentOptions = styled.h3`
  margin: 20px 0px 10px 0px;
`;

const OrdersTotal = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TotalHeadline = styled.h4`
  font-size: 20px;
`;

const TotalAmount = styled.p`
  font-size: 16px;
  font-weight: 700;

  span {
    color: #ff3333;
  }
`;

export default Payment;
