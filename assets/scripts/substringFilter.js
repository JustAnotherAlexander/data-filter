export default function FilterBySubstring(dataArr, queryText) {
  let result = '';
  if (queryText === '') {
    result = 'nothing was entered. Please enter a substring to search for.';
    return result;
  }
  for (let i = 0; i < dataArr.length; i += 1) {
    const regexp = new RegExp(`${queryText}`);
    if (dataArr[i].match(regexp)) {
      result += `${dataArr[i]}\n`;
    }
  }
  for (let i = 0; i < dataArr.length; i += 1) {
    const regexp = new RegExp(`${queryText.toUpperCase()}`);
    if (dataArr[i].match(regexp)) {
      result += `${dataArr[i]}\n`;
    }
  }
  return result;
}

export { FilterBySubstring };
