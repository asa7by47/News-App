import React, { useContext } from "react";
import { NewsContext } from "../../Context/NewsContext";
import img from "../../images/no-image.jpg";

function NewsItem({ item }) {
  const { hello } = useContext(NewsContext);
  // const { item } = props;
  const websiteUrl = item.url;
  const website = websiteUrl.split("https://").pop().split("/")[0];
  const date = item.publishedAt;
  const formatDate = date.replace("T", "");
  const formatTime = formatDate.replace("Z", "");
  // console.log(hello);
  return (
    <>
      <div className="row">
        <div className="container">
          <div className="col-md-3">
            <div
              className="article"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="30"
              data-aos-duration="800"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="article-image">
                {item.urlToImage ? (
                  <img src={item.urlToImage} alt={item.title} />
                ) : (
                  <img src={img} alt={item.title} />
                )}
              </div>
              <div className="article-content">
                <div className="article-source">
                  <span> {item.source.name} </span>
                </div>
                <div className="article-title">
                  <h2> {item.title} </h2>
                </div>
                <p className="article-desc">{item.description}</p>
                <div className="article-details">
                  <small>
                    <b>Published At : </b> {formatTime}{" "}
                  </small>
                </div>
                <a href={item.url} target="_blank" className="cta">
                  <span>More Details</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
