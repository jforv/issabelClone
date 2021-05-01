// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import UserModel from "../models/IssabelClone_db/UserModel";
import AccountModel from "../models/IssabelClone_db/AccountModel";
import BudgetModel from "../models/IssabelClone_db/BudgetModel";
import ReportModel from "../models/IssabelClone_db/ReportModel";

// End Import Models

// Import Models Factom Blockchain
import IdentityModel from "../models/IssabelClone_db/IdentityModel";
import ChainModel from "../models/IssabelClone_db/ChainModel";
import EntryModel from "../models/IssabelClone_db/EntryModel";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.issabelClone_db_dbUrl);

    // Start Init Models

		UserModel.init();
		AccountModel.init();
		BudgetModel.init();
		ReportModel.init();
 // End Init Models
    
    // Init Models Factom Blockchain
    IdentityModel.init();
    ChainModel.init();
    EntryModel.init();
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_issabelClone_db = await mongoose.connect(
        "mongodb://" + properties.issabelClone_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_issabelClone_db;
  }
}

export default new Database();
