
    module.exports = function (app) {
        const modelName = 'allfields';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            fieldText1: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
fieldTextArea2: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
fieldTextIcon4: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
fieldTextImage5: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
fieldTextChip6: { type: [String], required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
fieldTextTag7: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
fieldBooleanText1: { type: Boolean, required: false },
fieldBooleanTick2: { type: Boolean, required: false },
fieldBooleanCheckBox3: { type: Boolean, required: false },
fieldBooleanSwitch4: { type: Boolean, required: false },
fieldNumberText1: { type: Number, required: false, min: 0, max: 100000000 },
fieldNumberBadge3: { type: Number, required: false, min: 0, max: 100000000 },
fieldNumberKnob4: { type: Number, required: false, min: 0, max: 100000000 },
fieldNumberRating5: { type: Number, required: false, min: 0, max: 100000000 },
fieldNumberSlider6: { type: Number, required: false, min: 0, max: 100000000 },
fieldNumberProgressBar7: { type: Number, required: false, min: 0, max: 100000000 },
fieldNumberCurrency8: { type: Number, required: false, min: 0, max: 100000000 },
fieldDateText1: { type: Date, required: false },
fieldDateCalendar2: { type: Date, required: false },
fieldDateRange3: { type: [Date], required: false },
fieldDateMulti4: { type: [Date], required: false },
fieldDateTime5: { type: Date, required: false },
fieldDateTime126: { type: Date, required: false },
fieldDateTime247: { type: Date, required: false },

            
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