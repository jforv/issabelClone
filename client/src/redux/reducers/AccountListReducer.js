// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function accountListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ACCOUNT_SUCCESS:
      return { ...state, account: action.payload };
    case types.LIST_ACCOUNT_SUCCESS:
      return { ...state, listAccount: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}