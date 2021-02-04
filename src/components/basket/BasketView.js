import React from "react";
import Negative from "../../assets/images/basket/negative.png"
import Positive from "../../assets/images/basket/positive.png"

//Not working yet.
//TODO: use to makeStyles.
export const BasketView = ({ data }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column",  border: "5px solid #1EA4CE", marginTop: 20, borderColor: "#1EA4CE", backgroundColor: "white" }}>
      {
        data && data.map((item, index) => {
          return (
            <div style={{ display: "flex", flexDirection: "column", marginLeft: 15, borderBottom: 1, borderBottomWidth: 1, borderBottomColor: "gray" }}>
              <div style={{ display: "flex", flexDirection: "row", }}>
                <div style={{ display: "flex", flexDirection: "column", width: 200 }}>
                  <text style={{ fontSize: 13, textAlign: "left" }}>{item.name}</text>
                  <text style={{ fontSize: 13, textAlign: "left", color: "#1EA4CE" }}>{item.price}</text>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginRight: 5 }}>
                  <img
                    style={{ marginRight: 10, width: 10, height: 2 }}
                    src={Negative}
                    alt={"basket"}
                  />
                  <div style={{ backgroundColor: "#1EA4CE", width: 20, height: 20, justifyContent: "center", alignItems: "center" }}>
                    <text style={{ fontSize: 13, textAlign: "left", color: "#FFF" }}>{item.piece}</text>
                  </div>
                  <img
                    style={{ marginLeft: 10, width: 10, height: 10 }}
                    src={Positive}
                    alt={"basket"}
                  />
                </div>
              </div>
              <text style={{ fontSize: 5, textAlign: "left", marginTop: 10, marginBottom: 10 }}>-</text>
            </div>
          )
        })
      }
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginRight: 10, padding: 10 }}>
        <text style={{ fontSize: 13, color: "#1EA4CE", border: "2px solid #1EA4CE", borderColor: "#1EA4CE", padding: 10 }}>₺39,97</text>
      </div>

    </div>
  );
};
