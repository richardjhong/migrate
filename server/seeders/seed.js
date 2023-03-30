
const db = require('../config/connection');
const { Country, Bhn, User, Comment, CompileCountry } = require('../models');
const userSeeds = require('./userSeeds.json');
const commentSeeds = require('./commentSeeds.json');
const countrySeed = require('./2011-2022 SPI data-Table 1.json');

const formatCountryName = (countryName) => {
  if (!countryName.includes(',')) {
    return countryName;
  }

  const [beforeComma, afterComma] = countryName.split(',');
  return afterComma.trimStart().concat(' ').concat(beforeComma);
};

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Comment.deleteMany({});
    await User.create(userSeeds);

    for (let i = 0; i < countrySeed.length; i++) {
      const { _id, commentAuthor, commentText } = await Comment.create({
        commentAuthor :userSeeds[Math.floor(Math.random() * userSeeds.length)].username,
        commentText : commentSeeds[Math.floor(Math.random() * commentSeeds.length)].commentText,
        country : countrySeed[Math.floor(Math.random() * countrySeed.length)].country,
      });
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

  try {
    await Country.deleteMany({});
    await CompileCountry.deleteMany({});

    for (let i = 0; i < countrySeed.length; i++) {
        if (parseInt(countrySeed[i].spiyear) >= 2013 && countrySeed[i].status === "Ranked" ) { // greater than 2013 
            const newData = await Country.create(
              {
                country: formatCountryName(countrySeed[i].country),
                spiyear: countrySeed[i].spiyear,
                rank_score_spi: countrySeed[i].rank_score_spi,
                status: countrySeed[i].status,
                score_spi: countrySeed[i].score_spi,
                score_bhn: countrySeed[i].score_bhn,
                bhn : {
                     score_nbmc:countrySeed[i].score_nbmc,
                     score_ws:countrySeed[i].score_ws,
                     score_sh:countrySeed[i].score_sh,
                     score_ps:countrySeed[i].score_ps
                },
                score_fow: countrySeed[i].score_fow,
                fow : {
                    score_abk:countrySeed[i].score_abk,
                    score_aic:countrySeed[i].score_aic,
                    score_hw:countrySeed[i].score_hw,
                    score_eq:countrySeed[i].score_eq
                },
                score_opp: countrySeed[i].score_opp,
                opp : {
                    score_pr:countrySeed[i].score_pr,
                    score_pfc:countrySeed[i].score_pfc,
                    score_incl:countrySeed[i].score_incl,
                    score_aae:countrySeed[i].score_aae
                }
            });
            await CompileCountry.updateOne({ countryname: formatCountryName(countrySeed[i].country) }, { $push: { year_catalog: newData } }, { upsert : true })
        }

    }
  } catch (err) {
      console.error(err);
      process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
