import actionsFunction from "./generated/ReportActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import reportApi from "../../api/reportApi";
 
 actionsFunction.loadreportList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return reportApi
     .getreportList()
     .then(list => {
       dispatch(actionsFunction.loadreportSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
