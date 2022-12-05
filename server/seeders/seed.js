const fs = require('fs');

function csvToJson(csv) {
    // \n or \r\n depending on the EOL sequence
    const lines = csv.split('\n');
    const delimeter = ',';
  
    const result = [];
  
    const headers = lines[0].split(delimeter);
  
    for (const line of lines) {
      const obj = {};
      const row = line.split(delimeter);
  
      for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        obj[header] = row[i];
      }
  
      result.push(obj);
    }
  
    // Prettify output
    return JSON.stringify(result, null, 2);
  }

 

  function writeToFile(filename, data){
    fs.writeFile(filename, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}


 fs.readFile('./2011-2022 SPI data-Table 1.csv', 'utf8', async(error, data) =>

  { const json = await csvToJson(data);
    writeToFile('2011-2022 SPI data-Table 1.json',json);
}
);

