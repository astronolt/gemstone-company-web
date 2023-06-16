import React from "react";
import { Link } from "react-router-dom";
import { spinel, rhodolite, aquamarine, rarities, almondPendant } from "../../assets/";

import "./Categories.scss";


const Categories = () => {
  return (
    <div className="">
      <Link to="/gems/rare-gemstones" className="text-white hover:text-white hover:underline">
        <h1 className="text-4xl p-4 py-[25px]"> Explore our rare Gemstones </h1>
      </Link>
      <div className="categories">
        <div className="hidden sm:flex col">
          <div className="flex row">
            <img
              src={almondPendant}
              alt="almondPendant"
            />
            <button>
              <Link className="link text-black" to="/gems/rare-gemstones">
                Rock Sale
              </Link>
            </button>
          </div>
          <div className="bg-green-gradient hidden sm:flex row">
            <img
              src={spinel}
              alt="spinel"
              style={{ objectFit: "contain" }}
            />
            <button>
              <Link to="/gems/spinel" className="link">
              spinel
              </Link>
            </button>
          </div>
        </div>
        <div className="hidden md:flex col">
          <div className="flex row">
            {" "}
            <img
              src={rarities}
              alt="rarities"
            />
            <button>
              <Link to="/gems/rare-gemstones" className="link">
                More Rarities
              </Link>
            </button>
          </div>
        </div>
        <div className="flex col col-l">
          <div className="flex row">
            <Link to="/gems/rhodolite" className="flex col">
              <div className="bg-red-gradient flex row">
                <img
                  src={rhodolite}
                  alt="rhodolite"
                  style={{ objectFit: "contain" }}
                />
                <button className="text-white link">
                  rhodolite
                </button>
              </div>
            </Link>
            <div className="flex col">
              <div className="bg-black-gradient flex row">
                {" "}
                <img
                  src={aquamarine}
                  alt="aquamarine"
                  style={{ objectFit: "contain" }}
                />
                <button>
                  <Link to="/gems/aquamarine" className="link">
                    aquamarine
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="flex row">
            <img
              src="https://images.pexels.com/photos/9838851/pexels-photo-9838851.jpeg"
              alt=""
            />
            <button>
              <Link to="/gems/handmade-jewelry" className="link">
                Handmade Jewelries
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
