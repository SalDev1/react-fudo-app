import React, { useState } from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import axios from "../axios";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [menuItem, setMenuItem] = useState("");
  const [fetchItem, setFetchItem] = useState([]);

  const API_KEY = process.env.REACT_APP_FUDO_API_KEY;

  const fetchFoodItem = async (e) => {
    e.preventDefault();

    await axios
      .get(`?query=${menuItem}&number=4&apiKey=${API_KEY}`)
      .then((response) => {
        setFetchItem(response.data.menuItems);
      })
      .catch((err) => err.message);
  };

  console.log(fetchItem);

  return (
    <MenuContainer>
      <MenuSearch>
        <SearchIcon />
        <MenuInput
          type="text"
          value={menuItem}
          placeholder="Search food item by keyword"
          onChange={(e) => setMenuItem(e.target.value)}
        />
        <SubmitButton hidden type="submit" onClick={fetchFoodItem}>
          Submit
        </SubmitButton>
      </MenuSearch>
      {/* <MenuCategories></MenuCategories> */}
      <MenuCards>
        {fetchItem.map((menuItem) => (
          <MenuItem
            id={menuItem.id}
            title={menuItem.title}
            image={menuItem.image}
            restaurantChain={menuItem.restaurantChain}
          />
        ))}
      </MenuCards>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 300px;
  align-items: center;
`;

const MenuSearch = styled.form`
  width: 60%;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiSvgIcon-root {
    text-align: left;
  }
`;

const MenuInput = styled.input`
  width: 80%;
  padding: 10px 10px 10px 20px;
  border: none;
  font-size: 18px;
  color: black;
  outline-width: 0px;
  border-bottom: 1px solid #c7c7c7;

  &:focus {
    border-bottom: 1px solid black;
    border-width: 3px;
  }
`;

const SubmitButton = styled.button`
  position: absolute;
  margin-left: 400px;
  display: none;
`;

const MenuCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export default Menu;
