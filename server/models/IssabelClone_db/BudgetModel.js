import BudgetModelGenerated from "./generated/BudgetModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = BudgetModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await BudgetModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...BudgetModelGenerated,
  ...customModel
};
