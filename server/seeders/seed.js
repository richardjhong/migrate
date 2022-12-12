
const db = require('../config/connection');
const { Country, Bhn, User, Comment, CompileCountry } = require('../models');
const userSeeds = require('./userSeeds.json');
const commentSeeds = require('./commentSeeds.json');
const countrySeed = require('./2011-2022 SPI data-Table 1.json');


db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Comment.deleteMany({});
    await User.create(userSeeds);

    for (let i = 0; i < commentSeeds.length; i++) {
      const { _id, commentAuthor } = await Comment.create(commentSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: commentAuthor },
        {
          $addToSet: {
            comments: _id,
          },
        }
      );
    }

  
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})

//   try {
//     await Country.deleteMany({});
//     await CompileCountry.deleteMany({});

   

//     for (let i = 0; i < countrySeed.length; i++) {
//         if (parseInt(countrySeed[i].spiyear) >= 2018 && countrySeed[i].country !== "World") { // greater than 2017 
//             const newData = await Country.create(
//               {
//                 country: countrySeed[i].country,
//                 spiyear: countrySeed[i].spiyear,
//                 rank_score_spi: countrySeed[i].rank_score_spi,
//                 status: countrySeed[i].status,
//                 score_spi: countrySeed[i].score_spi,
//                 score_bhn: countrySeed[i].score_bhn,
//                 bhn : {
//                      score_nbmc:countrySeed[i].score_nbmc,
//                      score_ws:countrySeed[i].score_ws,
//                      score_sh:countrySeed[i].score_sh,
//                      score_ps:countrySeed[i].score_ps
//                 },
//                 score_fow: countrySeed[i].score_fow,
//                 fow : {
//                     score_abk:countrySeed[i].score_abk,
//                     score_aic:countrySeed[i].score_aic,
//                     score_hw:countrySeed[i].score_hw,
//                     score_eq:countrySeed[i].score_eq
//                 },
//                 score_opp: countrySeed[i].score_opp,
//                 opp : {
//                     score_pr:countrySeed[i].score_pr,
//                     score_pfc:countrySeed[i].score_pfc,
//                     score_incl:countrySeed[i].score_incl,
//                     score_aae:countrySeed[i].score_aae
//                 }
//             });
//             await CompileCountry.updateOne({ countryname: countrySeed[i].country }, { $push: { year_catalog: newData } }, { upsert : true })
//         }

//     }
//   } catch (err) {
//       console.error(err);
//       process.exit(1);
//   }

//   console.log('all done!');
//   process.exit(0);
// });
