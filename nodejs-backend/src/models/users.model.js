
      module.exports = function (app) {
          const modelName = 'users';
          const mongooseClient = app.get('mongooseClient');
          const { Schema } = mongooseClient;
          const schema = new Schema(
            {
              name: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: true, trim: true },
email: { type: String, required: true, unique: true, lowercase: true, uppercase: false, index: true, trim: true },
password: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: true, trim: true },

              
            },
            {
              timestamps: true
          });
        
          if (mongooseClient.modelNames().includes(modelName)) {
            mongooseClient.deleteModel(modelName);
          }
          return mongooseClient.model(modelName, schema);
          
        };