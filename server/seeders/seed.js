
const db = require('../config/connection');
const { User, Comment, Country, Bhn } = require('../models');
const userSeeds = require('./userSeeds.json');
const commentSeeds = require('./commentSeeds.json');
const countrySeed = require('./2011-2022 SPI data-Table 1.json');


db.once('open', async () => {
  try {
    await Comment.deleteMany({});
    await User.deleteMany({});

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

  console.log('all done!');
  process.exit(0);
});

// const fs = require('fs');

// function csvToJson(csv) {
//     // \n or \r\n depending on the EOL sequence
//     const lines = csv.split('\n');
//     const delimeter = ',';

//     const result = [];

//     const headers = lines[0].split(delimeter);

//     for (const line of lines) {
//       const obj = {};
//       const row = line.split(delimeter);

//       for (let i = 0; i < headers.length; i++) {
//         const header = headers[i];
//         obj[header] = row[i];
//       }

//       result.push(obj);
//     }

//     // Prettify output
//     return JSON.stringify(result, null, 2);
//   }



//   function writeToFile(filename, data){
//     fs.writeFile(filename, data, (err) =>
//     err ? console.error(err) : console.log('Success!')
//   );
// }


//  fs.readFile('./2011-2022 SPI data-Table 1.csv', 'utf8', async(error, data) =>

//   { const json = await csvToJson(data);
//     writeToFile('2011-2022 SPI data-Table 1.json',json);
// }
// );



db.once('open', async () => {
    try {
        await Country.deleteMany({});

        for (let i = 0; i < countrySeed.length; i++) {

            if (countrySeed[i].spiyear === "2022") {
                const newData = await Country.create({
                    country: countrySeed[i].country,
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
                        score_pr:countrySeed[i].score_pr,
                        score_pfc:countrySeed[i].score_pfc,
                        score_incl:countrySeed[i].score_incl,
                        score_aae:countrySeed[i].score_aae
                    },
                    score_opp: countrySeed[i].score_opp,
                    opp : {
                        score_abk:countrySeed[i].score_abk,
                        score_aic:countrySeed[i].score_aic,
                        score_hw:countrySeed[i].score_hw,
                        score_eq:countrySeed[i].score_eq
                    }
                });
            }


        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('all done!');
    process.exit(0);
});


