import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";
import { tsavorite, rhodolite, aquamarine, rarities, rockKnuckle } from "../../assets/"


const Categories = () => {
  return (
    <div className="categories">
      <div className="hidden sm:flex col">
        <div className="flex row">
          <img
            src={rockKnuckle}
            alt="rockKnuckle"
          />
          <button>
            <Link className="link text-black" to="/products/1">
              Rock Sale
            </Link>
          </button>
        </div>
        <div className="bg-red-gradient hidden sm:flex row">
          <img            
            src={rhodolite}
            alt="rhodolite"
            style={{ objectFit: "contain" }}
          />
          <button>
            <Link to="/products/1" className="link">
              rhodolite
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
            <Link to="/products/1" className="link">
              More Rarities
            </Link>
          </button>
        </div>
      </div>
      <div className="flex col col-l">
        <div className="flex row">
          <Link to="/gems/tsavorite" className="flex col">
            <div className="bg-green-gradient flex row">
              <img
                src={tsavorite}
                alt="tsavorite"
                style={{ objectFit: "contain" }}
              />
              <button className="text-white link">
                tsavorite
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
                <Link to="/products/1" className="link">
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
            <Link to="/products/1" className="link">
              Handmade Jewelries
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
