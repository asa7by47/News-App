import React, { useState } from "react";
import NewsItem from "../NewsItem/NewsItem";
import './NewsGrid.css'
function NewsGrid({ items }) {
  // const { items } = props;
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  console.log(items);
  return (
    <>
      <div className="news-grid">
        {items
          .filter((val) => {
            if (inputValue == "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(inputValue.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, idx) => {
            return <NewsItem key={idx} item={item} />;
          })}
      </div>
    </>
  );
}

export default NewsGrid;
