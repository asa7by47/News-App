import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const NewsContext = createContext("");

function NewsContextProvider(props) {
   // this state will contain the api data
   const [items, setItems] = useState([]);
   // this will contain the ID of the Menu Buttons
   const [active, setActive] = useState(1);
   // this will contain the category of the news we display on the pageXOffset
   // the initial value is "general"
   const [category, setCategory] = useState("general");
 
   const [country, setCountry] = useState("eg");
 
   const [activeCountry, setActiveCountry] = useState(1);
 
   const api_key = "a74f87f2d6b04beb9611cdde361b7955";
 
   const getNewsData = async () => {
     const { data } = await axios.get(
       `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${api_key}`
     );
     setItems(data.articles);
      console.log(data);
    };
 
   useEffect(() => {
     getNewsData();
   }, [category, country]);
 
   






  return (
    <NewsContext.Provider value={{items ,active,setActive,setCategory,setCountry,setActiveCountry,activeCountry }}>
      {props.children}
      </NewsContext.Provider>
  );
}

export default NewsContextProvider;
