const { Schema, model } = require('mongoose');


const countrySchema = new Schema(
    {
        country: {
            type: String,
            required: true,
        },
        rank_score_spi:Number,
        status: String,
        score_spi:Number,
        score_bhn:Number,
        score_fow:Number,
        score_opp:Number,

    }




);


const Country = model('Country', countrySchema);

module.exports = Country;