import actionsFunction from "./generated/BudgetActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import budgetApi from "../../api/budgetApi";
 
 actionsFunction.loadbudgetList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return budgetApi
     .getbudgetList()
     .then(list => {
       dispatch(actionsFunction.loadbudgetSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
