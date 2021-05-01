module.exports = {
    
  issabelClone_db_dbUrl: (process.env.DB_HOST || 'localhost') + ':27017/issabelClone_db',

  // Factom properties
  factom: {
    config: {
      baseUrl: "https://ephemeral.api.factom.com/v1",
      accessToken: {
        appId: "myAppId",
        appKey: "myAppKey"
      }
    },
    model: {
      // Start Factom model properties
      User: {
        factomized: "",
      },
      account: {
        factomized: "",
      },
      budget: {
        factomized: "",
      },
      report: {
        factomized: "",
      },

      // End Factom model properties
    }
  },

  publicPath: "../client/build",
  port: process.env.NODE_PORT || 3000,
  tokenSecret: "Insert Your Secret Token",
  api: process.env.NODE_API != null ? process.env.NODE_API : "/api"
};
