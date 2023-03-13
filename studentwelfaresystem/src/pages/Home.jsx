import React from "react";
import { Link } from "react-router-dom";
import "../assets/Home.scss";
import house from "../images/house.png";
import banner from "../images/ds.jpg";
import "../assets/Home.scss";

function Home() {
  return (
    <div className="homepage">
      <div>
        <div className="">
          <div className="banner-section">
            <img src={banner} />
          </div>
          <div className="u-section-2">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-palette-1-base u-size-20 u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                    <h4 className="u-align-center u-custom-font u-font-roboto-slab u-text u-text-body-alt-color u-text-3">
                      Find your place
                    </h4>
                    <div className="u-align-center u-text u-text-body-alt-color u-text-4">
                      <Link to="/viewproperty">
                        {<img src={house} alt="" width="30%" height="30%" />}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="finding-property">
            <div className="container">
              <h1 class="section-title">
                Find Your Dream House <br />
                Search By Area
              </h1>
            </div>
          </div> */}
          {/* <Link to="/viewproperty">
            {<img src={house} alt="" width="30%" height="30%" />}
          </Link> */}
          {/* <h1 className="col-md-6 offset-md-3">
            {new Date().toLocaleTimeString()}
          </h1> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
