import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removefromCart } from "../features/counter/userSlice";

const CartItem = ({ id, image, title, restaurantChain, price }) => {
  const dispatch = useDispatch();

  const removeCart = () => {
    dispatch(
      removefromCart({
        id: id,
      })
    );
  };

  return (
    <CartLeft key={id}>
      <OrderImage src={image} alt={title} />
      <OrderContent>
        <OrderTitle>{title}</OrderTitle>
        <OrderRestaurantName>from {restaurantChain}</OrderRestaurantName>
        <OrderPrice>
          $<span> {price}</span>
        </OrderPrice>
        <OrderButton onClick={removeCart}>Delete</OrderButton>
      </OrderContent>
    </CartLeft>
  );
};

const CartLeft = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

const OrderImage = styled.img`
  object-fit: cover;
  overflow: hidden;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`;

const OrderContent = styled.div`
  margin-left: 20px;
`;

const OrderTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;

const OrderPrice = styled.p`
  font-weight: 700;
  margin-top: 20px;

  span {
    color: #ff3333;
  }
`;

const OrderRestaurantName = styled.p`
  font-size: 20px;
`;

const OrderButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #ff3333;
  border: none;
  color: white;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    background-color: #d63131;
  }
`;

export default CartItem;
