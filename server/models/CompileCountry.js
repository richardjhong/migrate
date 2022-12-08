const { Schema, model, Types } = require('mongoose')
const Country = require('./Country')

const compileCountrySchema = new Schema(
  {
      name: {
          type: String,
          required: true
      },
      year_catalog:
    [
      {
        type: Types.ObjectId, ref: 'country'
      }
    ],
  }
)

const CompileCountry = model('compile', compileCountrySchema);

module.exports = CompileCountry;