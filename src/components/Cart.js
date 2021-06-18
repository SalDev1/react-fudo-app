import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItem from "./CartItem";
import { getCartTotal } from "../features/counter/userSlice";
import CurrencyFormat from "react-currency-format";
import Payment from "./Payment";
import { Router, useHistory } from "react-router-dom";

const Cart = () => {
  const history = useHistory();
  const orders = useSelector((state) => state.user.orders);
  console.log(getCartTotal(orders));

  return (
    <CartContainer>
      <CartPartOne>
        <CartHeadline>Your Orders</CartHeadline>
        <CartLine></CartLine>
        {orders.map((order) => (
          <CartItem
            id={order.id}
            title={order.title}
            restaurantChain={order.restaurantChain}
            price={order.price}
            image={order.image}
          />
        ))}
      </CartPartOne>
      <CartPartTwo>
        <CartRightCard>
          <CurrencyFormat
            renderText={(value) => (
              <>
                {" "}
                <CartPaymentTitle>SubTotal</CartPaymentTitle>
                <CartTotalAmount>
                  {orders?.length} {orders?.length === 1 ? "item" : "items"}:{" "}
                  <span>$ {value}</span>
                </CartTotalAmount>
                <CartProceedButton onClick={() => history.push("/payment")}>
                  Proceed to Order
                </CartProceedButton>
              </>
            )}
            decimalScale={2}
            thousandOperator={true}
            displayType="text"
            value={getCartTotal(orders)}
          ></CurrencyFormat>
        </CartRightCard>
      </CartPartTwo>
    </CartContainer>
  );
};

const CartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 500px;

  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column;
    margin-bottom: 100px;
  }
`;

const CartPartOne = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 30px;

  @media (max-width: 768px) {
    align-items: center;
    margin: 0px;
  }
`;

const CartPartTwo = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartHeadline = styled.h1`
  margin: 20px 0px 0px 20px;
  font-size: 40px;
`;

const CartLine = styled.hr`
  margin: 20px 0px 0px 30px;
  opacity: 0.5;
`;

const CartRightCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: fit-content;
  border-radius: 4px;
  padding: 20px;
  margin: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const CartPaymentTitle = styled.h3`
  font-size: 18px;
`;

const CartTotalAmount = styled.h1`
  padding: 10px 0px;
  font-size: 14px;

  span {
    padding-left: 5px;
    font-size: 16px;
  }
`;

const CartProceedButton = styled.button`
  color: white;
  padding: 10px;
  background-color: #ff3333;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  margin-top: 15px;

  &:hover {
    cursor: pointer;
    background-color: #d63131;
  }
`;

export default Cart;
