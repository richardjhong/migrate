const { Schema, model, Types } = require('mongoose')

const compileCountrySchema = new Schema(
  {
      countryname: {
          type: String,
          required: true
      },
      year_catalog:
    [
      {
        type: Types.ObjectId, 
        ref: 'country',
        required: true
      }
    ],
  }
)

const CompileCountry = model('compile', compileCountrySchema);

module.exports = CompileCountry;