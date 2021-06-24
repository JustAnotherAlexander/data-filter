/* eslint-disable prefer-destructuring */
export default async function getData(url) {
  const response = await fetch(url, {
    method: 'get',
  });
  const rawData = await response.json();
  const resultData = rawData.data;
  return resultData;
}

export { getData };
