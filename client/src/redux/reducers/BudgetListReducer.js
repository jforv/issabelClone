// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function budgetListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_BUDGET_SUCCESS:
      return { ...state, budget: action.payload };
    case types.LIST_BUDGET_SUCCESS:
      return { ...state, listBudget: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}