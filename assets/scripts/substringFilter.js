export default function FilterBySubstring(dataArr, queryText) {
  let result = '';
  if (queryText === '') {
    result = 'nothing was entered. Please enter a substring to search for.';
    return result;
  }
  const regexp = new RegExp(`${queryText}`);
  for (let i = 0; i < dataArr.length; i += 1) {
    if (dataArr[i].match(regexp)) {
      result += `${dataArr[i]}\n`;
    }
  }
  return result;
}

export { FilterBySubstring };
