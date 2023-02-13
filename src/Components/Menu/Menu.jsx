import React from "react";
import '../../App.css'

function Menu(props) {
  const {
    activeCountry,
    setActiveCountry,
    setCountry,
    active,
    setActive,
    setCategory,
  } = props;
  const links = [
    { id: 1, name: "General", value: "general" },
    { id: 2, name: "Business", value: "business" },
    { id: 3, name: "Entertainment", value: "entertainment" },
    { id: 4, name: "Health", value: "health" },
    { id: 5, name: "Science", value: "science" },
    { id: 6, name: "Sports", value: "sports" },
    { id: 7, name: "Technlogy", value: "technlogy" },
  ];
  const countries = [
    { id: 1, name: "Egypt", value: "eg" },
    { id: 2, name: "France", value: "fr" },
    { id: 3, name: "Italy", value: "it" },
    { id: 4, name: "Japan", value: "jp" },
    { id: 5, name: "Russia", value: "ru" },
    { id: 6, name: "United States", value: "us" },
    { id: 7, name: "Canada", value: "ca" },
  ];

  const onClick = (id, value) => {
    setActive(id);
    setCategory(value);
  };
  const addCountry = (id, value) => {
    setActiveCountry(id);
    setCountry(value);
  };
  return (
    <>
      <nav className="menu">
        <ul
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-mirror="true"
          data-aos-once="false"
          // data-aos-anchor-placement="top-center"
        >
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className={active === link.id ? "active " : "inActive"}
                onClick={() => {
                  onClick(link.id, link.value);
                }}
              >
                {link.name}
              </li>
            );
          })}
        </ul>
      </nav>
      <nav className="menu">
        <ul
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          {countries.map((country) => {
            return (
              <li
                key={country.id}
                className={
                  activeCountry === country.id ? "active " : "inActive"
                }
                onClick={() => {
                  addCountry(country.id, country.value);
                }}
              >
                {country.name}
              </li>
            );
          })}
        </ul>
      </nav>
     
           <div className="form container w-50 p-3">
            
      <input type="text" className="form-control p-2 rounded-5" placeholder="Search Here ..."  /> 

          </div> 
    </>
  );
}

export default Menu;
