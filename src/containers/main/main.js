import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBasket } from "../../actions";
import './main.css';
import basketpng from "../../assets/images/header/basket.png"
import { SortingView } from "../../components/filter/SortingView";
import { FilterView } from "../../components/filter/FilterView";
import { BasketView } from "../../components/basket/BasketView";
import { ListView } from "../../components/list/ListView";

function Main() {
  //const dispatch = useDispatch();
  const myBasket = useSelector((state) => state.onBasketAdd.basket);
  console.log("myBasket", myBasket)

  const onAddBasket = (item) => {
    console.log("add basket item", item)
    //dispatch(addBasket(item))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-title">
          Market
        </div>
        <div className="App-header-basket">
          <img
            src={basketpng}
            alt={"basket"}
          />
          <text>₺39,97</text>
        </div>
      </header>
      <div className="App-content">
        <div className="App-filter">
          <SortingView />
          <FilterView
            title={"Brands"}
            type={"Brand"}
          />
          <FilterView
            title={"Tags"}
            type={"Tag"}
          />
        </div>
        <div className="App-list">
          <ListView
            onClick={onAddBasket}
          />
        </div>
        <div className="App-basket">
          <BasketView
            data={myBasket}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
