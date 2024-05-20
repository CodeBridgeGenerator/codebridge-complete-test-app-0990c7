
    module.exports = function (app) {
        const modelName = 'arrayfields';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            fieldArray1: { type: String, required: false , enum: ["Apple","Orange","Grapes"] },
fieldObecjt1: { type: Schema.Types.Mixed, required: false, default: {"1":"Apple","2":"Orange","3":"Grapes","4":"Grapes"} },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };