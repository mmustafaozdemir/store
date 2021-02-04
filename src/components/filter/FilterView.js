import React from "react";
import SelectedCheckbox from "../../assets/images/filter/checkbox_selected.png"
import UnselectedCheckbox from "../../assets/images/filter/checkbox.png"

const brandTypeFilterDatas = [
  { name: "All" },
  { name: "Konopelski Group" },
  { name: "Rice Inc" },
  { name: "Feil, Dooley and Reinger" }
]

const tagTypeFilterDatas = [
  { name: "All" },
  { name: "Beach" },
  { name: "People" },
  { name: "Bicycle" }
]

//Not working yet.
//TODO: use to makeStyles.
export const FilterView = ({ title, type }) => {
  let filterData = type === "Tag" ? tagTypeFilterDatas : brandTypeFilterDatas;
  return (
    <div style={{ display: "flex", flexDirection: "column", border: 5, borderColor: "black" }}>
      <text style={{ textAlign: "left", marginBottom: 10, marginTop: 20, fontSize: 12 }}>{title}</text>
      <div style={{ backgroundColor: "white" }}>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 25 }}>
          <img
            style={{ marginRight: 10 }}
            src={SelectedCheckbox}
            alt={"basket"}
          />
          <text style={{ fontSize: 13 }}>Price low to high</text>
        </div>
        {
          filterData.map((item, index) => {
            return (
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 25 }}>
                <img
                  style={{ marginRight: 10 }}
                  src={UnselectedCheckbox}
                  alt={"basket"}
                />
                <text style={{ fontSize: 13 }}>{item.name}</text>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};
