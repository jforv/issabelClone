/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN BudgetActionsGenerated.js PLEASE EDIT ../BudgetActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import BudgetApi from "../../../api/BudgetApi";

let actionsFunction = {

  //CRUD METHODS

  // Create budget
  createBudget: function(budget) {
    return function(dispatch) {
      return BudgetApi
        .createBudget(budget)
        .then(budget => {
          dispatch(actionsFunction.createBudgetSuccess(budget));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createBudgetSuccess: function(budget) {
    return { type: types.CREATE_BUDGET_SUCCESS, payload: budget };
  },


  // Delete budget
  deleteBudget: function(id) {
    return function(dispatch) {
      return BudgetApi
        .deleteBudget(id)
        .then(budget => {
          dispatch(actionsFunction.deleteBudgetSuccess(budget));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteBudgetSuccess: function(budget) {
    return { type: types.DELETE_BUDGET_SUCCESS, payload: budget };
  },


  // Get budget
  loadBudget: function(id) {
    return function(dispatch) {
      return BudgetApi
        .getOneBudget(id)
        .then(budget => {
          dispatch(actionsFunction.loadBudgetSuccess(budget));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadBudgetSuccess: function(budget) {
    return { type: types.GET_BUDGET_SUCCESS, payload: budget };
  },

  // Load  list
  loadBudgetList: function() {
    return function(dispatch) {
      return BudgetApi
        .getBudgetList()
        .then(list => {
          dispatch(actionsFunction.loadBudgetListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadBudgetListSuccess: function(list) {
    return { type: types.LIST_BUDGET_SUCCESS, payload: list };
  },

	
  // Save budget
  saveBudget: function(budget) {
    return function(dispatch) {
      return BudgetApi
        .saveBudget(budget)
        .then(budget => {
          dispatch(actionsFunction.saveBudgetSuccess(budget));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveBudgetSuccess: function(budget) {
    return { type: types.UPDATE_BUDGET_SUCCESS, payload: budget };
  },


};

export default actionsFunction;
