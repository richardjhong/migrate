// account for transforming manual entries that do not have a capital letter
// in each word of searched country
export const capitalizeFirstLetter = (str) => {
    let capitalizedFirstLetterStr = str.split(' ');

    for (let i = 0; i < capitalizedFirstLetterStr.length; i++) {
        capitalizedFirstLetterStr[i] = capitalizedFirstLetterStr[i][0].toUpperCase() + capitalizedFirstLetterStr[i].substring(1)
    }
    return capitalizedFirstLetterStr.join(' ');

};

