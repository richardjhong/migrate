const { Schema, model } = require('mongoose');



const bhnSchema = new Schema(
    {
        score_nbmc:Number,
        score_ws: Number,
        score_sh:Number,   
        score_ps:Number,
    
    }


);


const Bhn = model('bhn', bhnSchema);

module.exports = Bhn;