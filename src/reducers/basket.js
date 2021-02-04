import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ActionType } from "../actions/basket";

const initialState = {
  basket: [{
    "tags": [
      "Beach",
      "Ocean",
      "Water"
    ],
    "price": 19.99,
    "name": "Rustic Beach Mug",
    "description": "totam at veritatis eligendi assumenda ex quia praesentium quibusdam ducimus",
    "slug": "Rustic-Beach-Mug",
    "added": 1481573896833,
    "manufacturer": "Sipes-Inc",
    "itemType": "mug",
  }],
};

export const onBasketAdd = persistReducer(
  { storage, key: "basket", whitelist: ["basket"] },
  (state = initialState, action) => {
    switch (action.type) {
      case ActionType.ADDBASKET: {
        return {
          ...state,
          basket: action.payload.basket,
        };
      }

      default: {
        return state;
      }
    }
  }
);
