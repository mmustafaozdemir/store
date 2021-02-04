import React from "react";
import SelectedRadio from "../../assets/images/filter/radio_selected.png"
import UnselectedRadio from "../../assets/images/filter/radio.png"

//Not working yet.
//TODO: use to makeStyles.
export const SortingView = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", border: 5, borderColor: "black" }}>
      <text style={{ textAlign: "left", marginBottom: 10, marginTop: 20, fontSize: 12 }}>Sorting</text>
      <div style={{ backgroundColor: "white" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 10, marginLeft: 25 }}>
          <img
            style={{ marginRight: 10 }}
            src={SelectedRadio}
            alt={"basket"}
          />
          <text style={{ fontSize: 13 }}>Price low to high</text>
        </div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 10, marginLeft: 25 }}>
          <img
            style={{ marginRight: 10 }}
            src={UnselectedRadio}
            alt={"basket"}
          />
          <text style={{ fontSize: 13 }}>Price high to low</text>
        </div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 10, marginLeft: 25 }}>
          <img
            style={{ marginRight: 10 }}
            src={UnselectedRadio}
            alt={"basket"}
          />
          <text style={{ fontSize: 13 }}>New to old</text>
        </div>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 10, marginLeft: 25 }}>
          <img
            style={{ marginRight: 10 }}
            src={UnselectedRadio}
            alt={"basket"}
          />
          <text style={{ fontSize: 13 }}>Old to new</text>
        </div>
      </div>
    </div>
  );
};
