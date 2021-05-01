// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  account: {}
};

// Reducer
export default function accountEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ACCOUNT_SUCCESS:
      return { ...state, account: action.payload };
    case types.UPDATE_ACCOUNT_SUCCESS:
      return { ...state, account: action.payload };
    case types.GET_ACCOUNT_SUCCESS:
      return { ...state, account: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}