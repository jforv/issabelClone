import actionsFunction from "./generated/AccountActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import accountApi from "../../api/accountApi";
 
 actionsFunction.loadaccountList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return accountApi
     .getaccountList()
     .then(list => {
       dispatch(actionsFunction.loadaccountSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
