function lowerCaseFilter(dataArr, queryText) {
  let lowerCaseFilterResult = '';
  for (let i = 0; i < dataArr.length; i += 1) {
    const regexp = new RegExp(`${queryText.toLowerCase()}`);
    if (dataArr[i].match(regexp)) {
      lowerCaseFilterResult += `${dataArr[i]}\n`;
    }
  }
  return lowerCaseFilterResult;
}

function upperCaseFilter(dataArr, queryText) {
  let upperCaseFilterResult = '';
  for (let i = 0; i < dataArr.length; i += 1) {
    const regexp = new RegExp(`${queryText.toUpperCase()}`);
    if (dataArr[i].match(regexp)) {
      upperCaseFilterResult += `${dataArr[i]}\n`;
    }
  }
  return upperCaseFilterResult;
}

function bothCaseFilter(dataArr, queryText) {
  let bothCaseFilterResult = '';
  for (let i = 0; i < dataArr.length; i += 1) {
    const regexp = new RegExp(`${queryText}`);
    if (dataArr[i].match(regexp)) {
      bothCaseFilterResult += `${dataArr[i]}\n`;
    }
  }
  return bothCaseFilterResult;
}

export default function FilterBySubstring(dataArr, queryText, lowerCaseMode) {
  let result = '';
  if (queryText === '') {
    result = 'nothing was entered. Please enter a substring to search for.';
    return result;
  }
  if (!lowerCaseMode) {
    result = bothCaseFilter(dataArr, queryText);
  } else {
    result = upperCaseFilter(dataArr, queryText);
    result += lowerCaseFilter(dataArr, queryText);
  }
  return result;
}

export { FilterBySubstring };
