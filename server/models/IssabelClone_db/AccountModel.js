import AccountModelGenerated from "./generated/AccountModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = AccountModelGenerated.init();
  
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
      return await AccountModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AccountModelGenerated,
  ...customModel
};
