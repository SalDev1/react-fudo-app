import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.spoonacular.com/food/menuItems/search",
});

export default instance;
