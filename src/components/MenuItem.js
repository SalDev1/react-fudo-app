import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { addtoCart } from "../features/counter/userSlice";
const MenuItem = ({ id, title, restaurantChain, image }) => {
  const dispatch = useDispatch();

  const addtoOrders = () => {
    dispatch(
      addtoCart({
        item: {
          id: id,
          title: title,
          image: image,
          restaurantChain: restaurantChain,
          price: 29.99,
        },
      })
    );
  };

  return (
    <MenuItemContainer>
      <MenuCard key={id}>
        <MenuImage src={image} alt={title} />
        <MenuTitle>
          <MenuItemTitle>{title}</MenuItemTitle>
          <MenuRestaurantName>from {restaurantChain}</MenuRestaurantName>
        </MenuTitle>
        <MenuButtons>
          <AddtoCart onClick={addtoOrders}>Add to Cart</AddtoCart>
          <AddtoFavorite>
            <FavoriteIcon />
          </AddtoFavorite>
        </MenuButtons>
      </MenuCard>
    </MenuItemContainer>
  );
};

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
  }
`;

const MenuCard = styled.div`
  margin: 30px;
  width: 350px;
  height: fit-content;
  border-radius: 10px;
  border: 0.5px solid lightgray;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    transition: all 450ms;
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    max-width: 300px;
    min-width: 300px;
    width: initial;
    margin: 10px 20px 20px 10px;
    transition: none;
  }
`;

const MenuTitle = styled.div`
  margin: 10px 10px 0px 15px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const MenuItemTitle = styled.h1`
  font-size: 18px;
`;

const MenuRestaurantName = styled.h5`
  font-size: 16px;
  font-weight: 400;
`;

const MenuImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 15vw;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const MenuButtons = styled.div`
  padding: 15px 0px 15px 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const AddtoCart = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  color: red;
  border: 1px solid #ff3333;
  background-color: white;
  font-weight: 600;

  &:hover {
    color: white;
    background-color: #ff3333;
  }
`;

const AddtoFavorite = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  margin-right: 10px;
  border: none;
  cursor: pointer;
  background-color: white;
  font-weight: 600;
  border: 1px solid #3381ff;

  &:hover {
    background-color: #3381ff;
  }

  .MuiSvgIcon-root {
    color: #3381ff;

    &:hover {
      color: white;
    }
  }
`;

export default MenuItem;
