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
 *  TO CUSTOMIZE FUNCTIONS IN AccountActionsGenerated.js PLEASE EDIT ../AccountActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import AccountApi from "../../../api/AccountApi";

let actionsFunction = {

  //CRUD METHODS

  // Create account
  createAccount: function(account) {
    return function(dispatch) {
      return AccountApi
        .createAccount(account)
        .then(account => {
          dispatch(actionsFunction.createAccountSuccess(account));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createAccountSuccess: function(account) {
    return { type: types.CREATE_ACCOUNT_SUCCESS, payload: account };
  },


  // Delete account
  deleteAccount: function(id) {
    return function(dispatch) {
      return AccountApi
        .deleteAccount(id)
        .then(account => {
          dispatch(actionsFunction.deleteAccountSuccess(account));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteAccountSuccess: function(account) {
    return { type: types.DELETE_ACCOUNT_SUCCESS, payload: account };
  },


  // Find by name
  findByname: function(key) {
    return function(dispatch) {
      return AccountApi
        .findByname(key)
        .then(item => {
          dispatch(actionsFunction.findBynameSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBynameSuccess: function(item) {
    return { type: types.FINDBYNAME_ACCOUNT_SUCCESS, payload: item };
  },


  // Get account
  loadAccount: function(id) {
    return function(dispatch) {
      return AccountApi
        .getOneAccount(id)
        .then(account => {
          dispatch(actionsFunction.loadAccountSuccess(account));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadAccountSuccess: function(account) {
    return { type: types.GET_ACCOUNT_SUCCESS, payload: account };
  },

  // Load  list
  loadAccountList: function() {
    return function(dispatch) {
      return AccountApi
        .getAccountList()
        .then(list => {
          dispatch(actionsFunction.loadAccountListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadAccountListSuccess: function(list) {
    return { type: types.LIST_ACCOUNT_SUCCESS, payload: list };
  },

	
  // Save account
  saveAccount: function(account) {
    return function(dispatch) {
      return AccountApi
        .saveAccount(account)
        .then(account => {
          dispatch(actionsFunction.saveAccountSuccess(account));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveAccountSuccess: function(account) {
    return { type: types.UPDATE_ACCOUNT_SUCCESS, payload: account };
  },


};

export default actionsFunction;
