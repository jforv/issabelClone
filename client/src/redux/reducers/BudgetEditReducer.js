// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  budget: {}
};

// Reducer
export default function budgetEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_BUDGET_SUCCESS:
      return { ...state, budget: action.payload };
    case types.UPDATE_BUDGET_SUCCESS:
      return { ...state, budget: action.payload };
    case types.GET_BUDGET_SUCCESS:
      return { ...state, budget: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}