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

const db = require('../config/connection');
const { Country } = require('../models');
const countrySeed = require('./2011-2022 SPI data-Table 1.json');


db.once('open', async () => {
    try {
        await Country.deleteMany({});

        // await Country.create(countrySeed);

        for (let i = 0; i < countrySeed.length; i++) {

            if (countrySeed[i].spiyear === "2022") {
                const newData = await Country.create({
                    country: countrySeed[i].country,
                    rank_score_spi: countrySeed[i].rank_score_spi,
                    status: countrySeed[i].status,
                    score_spi: countrySeed[i].score_spi,
                    score_fow: countrySeed[i].score_fow,
                    score_opp: countrySeed[i].score_opp,
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

