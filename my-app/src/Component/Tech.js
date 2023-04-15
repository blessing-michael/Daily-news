import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Footer from "./Footer";

function Tech() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const fetchnews = async () => {
    try {
      let mixgen = ["205f3fe", "c4cd3", "2b40b5", "846d65", "062c9b", "5"];
      let secone = "20";
      // let sectwo = "bea"
      let sectwo = "85d";

      let secretGif = sectwo.split("").reverse().join("");
      console.log(secretGif);

      let stepOne = mixgen.join("").split("").join("");
      // console.log(stepOne)

      let stepTwo = stepOne.split(secone);
      console.log(stepTwo, "stepTWo.....");

      let stepThree = stepTwo[1] + secretGif;
      console.log(stepThree);

      setLoading(true);
      const response = await fetch(
        ` https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${stepThree}`
      );

      const dailynews = await response.json();

      console.log(dailynews, "new api..............");
      setResults(dailynews.articles);
      // console.log(dailynews.results[0].category,"res")
      console.log(dailynews.articles, "res");
    } catch (error) {
      toast.error("something went wrong, please try again");
    }
  };
  // console.log(news, "..................")

  useEffect(() => {
    fetchnews();
  }, []);

  //take care of situations when news component is empty
  function Fetchagain() {
    try {
      fetchnews();
    } catch (error) {
      toast.error("something went wrong while fetching news");
    }

    // setResults(dailynews.article)
  }
  if (results.length === 0) {
    console.log(results.length, "reselts");
    return (
      <main>
        <div
          className="no-tours"
          style={{ position: "absolute", left: "45%", top: "50%" }}
        >
          <h1 style={{ color: "black" }}>No News Left</h1>
          <button
            onClick={Fetchagain}
            className="refresh-btn"
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginLeft: "25%",
              padding: "5px 25px",
              backgroundColor: "skyblue",
              color: "white",
              border: "none",
              borderRadius: "2px",
              cursor: "pointer",
            }}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }
  //   if(loading===false){
  //     return <div className="spinner-container">
  //     {/* <h4>loading.....</h4> */}
  //     <img src={spinner} alt="loading" className="spinner" />
  //     {console.log(spinner, "showing spinner")}

  //     </div>

  //   }

  function Notinterested(id) {
    const newinfo = results.filter((result) => result.title !== id);
    console.log(newinfo, "clicking interest btn", id);
    setResults(newinfo);
  }

  return (
    <div className="newsdata">
      <div
        className="head-title"
        style={{
          backgroundColor: "rgb(34, 146, 54)",
          position: "absolute",
          left: "0",
          width: "100%",
          borderBottom: "1px solid black",
          padding: "6px 0px",
        }}
      >
        <h1 style={{ color: "white", marginLeft: "40px" }}>TECHNOLOGY</h1>
      </div>
      {results.map((res) => {
        const image_url = res.urlToImage;
        //   const id=uniqid()
        const id = res.title;

        return (
          <div className="business-container" key={id}>
            <div className="maincontainer">
              <div className="img-container">
                {!image_url ? (
                  <img
                    src="https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt={res.title}
                    className="img"
                  />
                ) : (
                  <img src={image_url} alt={res.title} className="img"></img>
                )}
              </div>
              <div className="infonews-container">
                <h2 className="title">
                  {res.title} <span className="country">{res.country}</span>{" "}
                </h2>

                <div className="infopara">
                  <p className="description">
                    {res.description} ...
                    <span>
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="read-more"
                      >
                        Read More
                      </a>
                    </span>
                  </p>
                </div>
                {/* {console.log(res.category)} */}
                <div className="interest-container">
                  <button
                    className="interest-btn"
                    onClick={() => Notinterested(id)}
                  >
                    not interested
                  </button>
                  {/* {console.log(res.id)} */}
                </div>
              </div>
              {/* end of info news container */}
            </div>
          </div>
        );
      })}

      <Footer />
    </div>
  );
}

export default Tech;
