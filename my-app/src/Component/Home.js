import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  const navigate = useNavigate();
  function HandleScience() {
    navigate("/science");
  }
  return (
    <div className="entire">
      {/* container missed on first copy*/}
      <div className="intro-container">
        {/* PASTING FROM HERE */}
        <div>
          <div className="intro-Info">
            <h2 className="welcome">Welcome to Posh News </h2>
            <h1 className="featured-title">featured section</h1>
            <div className="line-through"></div>

            <div className="Top-news">
              <div className="line">
                <span className="top-title">
                  <h3 className="top-h1">Top News</h3>
                </span>
              </div>

              <div className="home-news">
                <div className="news1">
                  <img
                    src="https://www.investors.com/wp-content/uploads/2017/10/stock-tesla-06-shutter.jpg"
                    alt="business"
                    className="topnews-img"
                  />

                  <div className="homenews-Info">
                    <h3 className="title">
                      Tesla Falls As Latest Price Cuts Put Focus On Margins; EV
                      Giant Announces China Megafactory | Investor's Business
                      Daily - Investor's Business Daily
                    </h3>
                    <p className="info">
                      EV giant will build a Megafactory in Shanghai for its
                      energy storage business...{" "}
                      <span>
                        {" "}
                        <a
                          href="https://www.investors.com/news/tesla-falls-as-u-s-price-cuts-put-focus-on-margins-ev-giant-announces-china-megafactory/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="read-more"
                        >
                          Read More
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="news1">
                  <img
                    src="https://image.cnbcfm.com/api/v1/image/106106340-1567269275164gettyimages-853699560.jpeg?v=1681121462&w=1920&h=1080"
                    alt="business"
                    className="topnews-img"
                  />

                  <div className="homenews-Info">
                    <h3 className="title">
                      China ends Taiwan drills after practising blockades,
                      precision strikes - Reuters
                    </h3>
                    <p className="info">
                      China ended three days of military drills around Taiwan on
                      Monday saying they had tested integrated military
                      capabilities under actual combat conditions, having
                      practised precision strikes and blockading the island that
                      Beijing views as its own... <span></span>{" "}
                      <a
                        href="https://www.cnbc.com/2023/04/10/russia-ukraine-live-updates.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="read-more"
                      >
                        Read More
                      </a>
                    </p>
                  </div>
                </div>

                <div className="news1">
                  <img
                    src="https://image.cnbcfm.com/api/v1/image/106871420-1618991336529-Image_from_iOS_17.jpg?v=1681147205&w=1920&h=1080"
                    alt="business"
                    className="topnews-img"
                  />

                  <div className="homenews-Info">
                    <h3 className="title">
                      Warren Buffett-backed BYD announces new shock absorption
                      tech for premium EVs - CNBC
                    </h3>
                    <p className="info">
                      "Electric vehicle giant BYD is banking on new
                      driver-assist technology to smooth out car rides and get
                      the edge on its EV competition...{" "}
                      <span>
                        {" "}
                        <a
                          href="https://www.cnbc.com/2023/04/10/byd-shock-absorption-tech-premium-evs.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="read-more"
                        >
                          Read More
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="news2-Container">
              <div className="line2">
                <span className="top-title">
                  <h3 className="top-h2">Sport</h3>
                </span>
              </div>

              <div className="sport-news">
                <div className="news1">
                  <img
                    src="https://cdn.theathletic.com/app/uploads/2023/04/12012234/GettyImages-1478195828-1024x683.jpg"
                    alt="sport"
                    className="topnews-img"
                  />

                  <div className="homenews-Info">
                    <h3
                      className="title"
                      style={{ color: " rgb(53, 53, 159)" }}
                    >
                      Dansby Swanson exits Cubs game, feels for wife Mallory
                      Swanson after USWNT injury - The Athletic
                    </h3>
                    <p className="info">
                      I've been up since 4 a.m.,Dansby Swanson said late Tuesday
                      night, explaining why he removed himself from the game....{" "}
                      <span>
                        {" "}
                        <Link to="/sport" className="read-more">
                          Read More
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="news1">
                  <img
                    src="https://cdn.vox-cdn.com/thumbor/LEKQbaW_EXg2cW99KZ0hU8SsNLI=/0x7:3451x1814/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24576176/usa_today_20436788.jpg"
                    alt="sport"
                    className="topnews-img"
                  />

                  <div className="homenews-Info">
                    <h3
                      className="title"
                      style={{ color: " rgb(53, 53, 159)" }}
                    >
                      Mariners lose to Cubs, BABIP gods, selves, 3-2 - Lookout
                      Landing
                    </h3>
                    <p className="info">
                      Mariners again fail to get Big Hit, lose in extras...{" "}
                      <span>
                        {" "}
                        <Link to="/sport" className="read-more">
                          Read More
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="news1">
                  <img
                    src="https://cdn.theathletic.com/app/uploads/2023/04/10215032/Kingsbury-1024x729.jpg"
                    alt="sport"
                    className="topnews-img"
                  />

                  <div className="homenews-Info">
                    <h3
                      className="title"
                      style={{ color: " rgb(53, 53, 159)" }}
                    >
                      USC hiring Kliff Kingsbury as senior offensive analyst,
                      per source: What it means for the Trojans - The Athletic
                    </h3>
                    <p className="info">
                      Kingsbury was fired by the Cardinals in January after
                      Arizona posted a 4-13 record in 2022...{" "}
                      <span>
                        {" "}
                        <Link to="/sport" className="read-more">
                          Read More
                        </Link>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* NEWS 3 BEGINNING*/}

            <div className="news3-Container">
              <div className="line3">
                <span className="top-title3">
                  <h3 className="top-h3">Technology</h3>
                </span>
              </div>

              <div className="technology">
                <div className="news1">
                  <div className="img-info">
                    <div className="header-tech">
                      <h3 className="tech-series">TECH SERIES</h3>
                      <h1 className="startup">African Startups</h1>
                    </div>

                    <div className="underlne-startups"></div>
                    <h2 className="startup-des">
                      African Startup Game-Changer: The UAE’s $816K tax
                      threshold allows for international expansion.
                    </h2>

                    <div className="imgStartUp-div">
                      <img
                        src="https://images.pexels.com/photos/1181414/pexels-photo-1181414.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="sport"
                        className="tech-img"
                      />
                    </div>
                    <div className="techimg-info">
                      <p>
                        The Ministry of Finance (MoF) of the United Arab
                        Emirates (UAE) just made a new Ministerial Decision, No.
                        73 of 2023, on Small Business Relief. In line with
                        Article 21 of the Corporate Tax Law, this choice will
                        help startups and other small or micro businesses by
                        lowering their Corporate Tax burden and compliance
                        costs...{" "}
                        <span>
                          <Link className="read-moretech" to={"/tech"}>
                            Read More
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="news-startup1">
                  <div className="technews-Info">
                    <h3 className="technews-title">
                      Android devices can now automatically archive little-used
                      apps - The Verge...{" "}
                      <span>
                        {" "}
                        <Link to="/tech" className="read-moretech">
                          Read More
                        </Link>
                      </span>
                    </h3>
                    <h3 className="technews-title">
                      Android devices can now automatically archive little-used
                      apps - The Verge...{" "}
                      <span>
                        {" "}
                        <Link to="/tech" className="read-moretech">
                          Read More
                        </Link>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* END OF NEWS3 */}

            {/* end of introdiv */}

            {/* beginning of science news */}
            <div className="news4-container">
              <div className="line4">
                <span className="top-title4">
                  <h3 className="top-h4">Science</h3>
                </span>
              </div>

              <div className="nws4-grid">
                <div className="div1">
                  <div className="imgStartUp-div">
                    <img
                      src="https://physicsworld.com/wp-content/uploads/2023/04/Artistic-impression-of-a-black-hole.jpg"
                      alt="science"
                      className="science-img"
                    />
                  </div>
                  <p className="science-p">
                    Gravitational waves could reveal hidden histories of black
                    holes – Physics World - physicsworld.com. Infalling matter:
                    research suggests that information could be recovered from a
                    black hole via gravitational waves...{" "}
                    <span>
                      <Link className="read-more" to={"/science"}>
                        Read More
                      </Link>
                    </span>
                  </p>
                </div>

                <table>
                  <th
                    style={{
                      backgroundColor: "red",
                      padding: "10px",
                      color: "whitesmoke",
                      height: "10px",
                    }}
                  >
                    {" "}
                    <td> LATEST SCIENCE NEWS</td>
                  </th>

                  <tr
                    style={{
                      backgroundColor: "rgb(66, 65, 65)",
                      height: "100px",
                      padding: "50px",
                      margin: "0,150px",
                    }}
                  >
                    <div className="cell1" style={{ marginRight: "50px" }}>
                      <td>
                        <div className="one">1</div>{" "}
                      </td>
                      <td className="science-td" onClick={HandleScience}>
                        Antarctic ocean current could 'collapse' this century
                      </td>
                    </div>
                  </tr>
                  <tr
                    style={{
                      backgroundColor: "rgb(66, 65, 66)",
                      height: "100px",
                      padding: "50px",
                      margin: "0,150px",
                    }}
                  >
                    <div className="cell1" style={{ marginRight: "50px" }}>
                      <td>
                        <div className="one">2</div>{" "}
                      </td>
                      <td className="science-td" onClick={HandleScience}>
                        How an African bird might inspire a better water bottle
                      </td>
                    </div>
                  </tr>
                  <tr
                    style={{
                      backgroundColor: "rgb(66, 65, 65)",
                      height: "100px",
                      padding: "50px",
                      margin: "0,150px",
                    }}
                  >
                    <div className="cell1" style={{ marginRight: "50px" }}>
                      <td>
                        <div className="one">3</div>{" "}
                      </td>
                      <td className="science-td" onClick={HandleScience}>
                        New X-ray photo shows famous Crab Nebula like never
                        before
                      </td>
                    </div>
                  </tr>
                  <tr
                    style={{
                      backgroundColor: "rgb(66, 65, 66)",
                      height: "100px",
                      padding: "50px",
                      margin: "0,150px",
                    }}
                  >
                    <div className="cell1" style={{ marginRight: "50px" }}>
                      <td>
                        <div className="one">4</div>{" "}
                      </td>
                      <td className="science-td" onClick={HandleScience}>
                        A Leak at the Bottom of the Sea May Be a Harbinger of
                        Doom{" "}
                      </td>
                    </div>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="footer-div">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
