import React from "react";
import "./List.scss";
import Card from "../../components/Card/Card";
// import useFetch from "../../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
  //     (item) => `&[filters][sub_categories][id][$eq]=${item}`
  //   )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  // );
  const data = [
    {
      id: 1,
      attributes: {
        isNew: 1,
        img: 1,
        img2: 1,
        title: "title 1",
        price: 1000,
      },
    },
    {
      id: 2,
      attributes: {
        isNew: 1,
        img: 1,
        img2: 1,
        title: "title 1",
        price: 1000,
      },
    },
    {
      id: 2,
      attributes: {
        isNew: 1,
        img: 1,
        img2: 1,
        title: "title 1",
        price: 1000,
      },
    },
    {
      id: 2,
      attributes: {
        isNew: 1,
        img: 1,
        img2: 1,
        title: "title 1",
        price: 1000,
      },
    },
    {
      id: 2,
      attributes: {
        isNew: 1,
        img: 1,
        img2: 1,
        title: "title 1",
        price: 1000,
      },
    },
    {
      id: 2,
      attributes: {
        isNew: 1,
        img: 1,
        img2: 1,
        title: "title 1",
        price: 1000,
      },
    }
  ];
  const loading = false;

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
