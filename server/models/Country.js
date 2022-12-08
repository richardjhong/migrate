const { Schema, model } = require('mongoose');
// const Bhn = require('./Bhn');

const bhnSchema = new Schema(
    {
        score_nbmc:Number,
        score_ws: Number,
        score_sh:Number,   
        score_ps:Number,
    }
);

const fowSchema = new Schema(
    {
        score_pr:Number,
        score_pfc: Number,
        score_incl:Number,   
        score_aae:Number,
    }
);

const oppSchema = new Schema(
    {
        score_abk:Number,
        score_aic: Number,
        score_hw:Number,   
        score_eq:Number,
    }
);

// loop through all csv data within seeds.js, 
// check if compileCountrySchema exists: i
    // check if country already exists: if so, append new year information
    // otherwise create new countrySchema

const countrySchema = new Schema(
    {
        spiyear: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true,
        },
        //SPI Rank
        rank_score_spi:Number,
        //Ranked or not
        status: String,
        score_spi:Number,
        //Basic Human Needs
        score_bhn:Number,
        bhn : bhnSchema,
        //Foundations of Wellbeing
        score_fow:Number,
        fow : fowSchema,
        //Opportunity
        score_opp:Number,
        opp : oppSchema,      
    }
);

const Country = model('country', countrySchema);

module.exports = Country;