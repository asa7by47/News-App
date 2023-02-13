import "./App.css";
import { useContext } from "react";
import Menu from "./Components/Menu/Menu";
import NewsGrid from "./Components/NewsGrid/NewsGrid";
import NewsContextProvider, { NewsContext } from "./Context/NewsContext";
function App() {
  const {
    items,
    active,
    setActive,
    setCategory,
    setCountry,
    setActiveCountry,
    activeCountry,
  } = useContext(NewsContext);

  return (
    <NewsContextProvider>
      <div className="app">
        <h1
          className="title"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          // data-aos-anchor-placement="top-center"
        >
         
          See The Latest News
        </h1>
        <Menu
          setCountry={setCountry}
          setActiveCountry={setActiveCountry}
          activeCountry={activeCountry}
          active={active}
          setActive={setActive}
          setCategory={setCategory}
        />
        <NewsGrid items={items} />
      </div>
    </NewsContextProvider>
  );
}

export default App;
