import BudgetApiGenerated from "./generated/BudgetApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class BudgetApi extends BudgetApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Budget List
  static getBudgetList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/budgets")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default BudgetApi;