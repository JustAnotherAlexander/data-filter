export default function FilterByLength(dataArr, queryText) {
  let result = '';
  if (!/^[0-9]+$/.test(queryText)) {
    result = 'Please only enter numeric characters only! (Allowed input:0-9)';
  } else {
    for (let i = 0; i < dataArr.length; i += 1) {
      if (dataArr[i].length > queryText) {
        result += `${dataArr[i] + '\n'}`;
      }
    }
  }
  return result;
}

export { FilterByLength };
