import React from "react";
import ImageArea from "../../assets/images/list/image_area.png"
import { Products } from "../../utils/db/Products"
//TODO: use to makeStyles.
export const ListView = ({ onClick }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", border: 5, borderColor: "black", marginRight: 10, marginLeft: 10 }}>
      <text style={{ textAlign: "left", marginBottom: 10, marginTop: 20, fontSize: 15 }}>Products</text>
      <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
        <div style={{ backgroundColor: "#1EA4CE", padding: 10 }}><text style={{ fontSize: 12, color: "white" }}>mug</text></div>
        <div style={{ backgroundColor: "#F2F0FD", padding: 10 }}><text style={{ fontSize: 12, color: "#1EA4CE" }}>shirt</text></div>
      </div>
      <div style={{ backgroundColor: "white", display: "flex", flexDirection: "row", paddingRight: 15 }}>
        {
          Products.map((item, index) => {
            return (
              <div style={{ display: "flex", flexDirection: "column", marginLeft: 15, marginTop: 15, marginBottom: 15, width: 100, height: 175 }}>
                <img
                  style={{ width: 100, height: 100 }}
                  src={ImageArea}
                  alt={"ImageArea"}
                />
                <div style={{ display: "flex", flexDirection: "column", height: 60 }}>
                  <text style={{ fontSize: 13, textAlign: "left", color: "#1EA4CE" }}>{item.price}</text>
                  <text style={{ fontSize: 13, textAlign: "left" }}>{item.name}</text>
                </div>
                <button onClick={() => onClick(item)} style={{ backgroundColor: "#1EA4CE", border: 0 }}>
                  <text style={{ fontSize: 13, textAlign: "center", color: "#FFF" }}>Add</text>
                </button>
              </div>
            )
          })
        }
      </div>
    </div >
  );
};
