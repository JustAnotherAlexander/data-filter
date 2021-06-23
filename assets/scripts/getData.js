export default async function getData(url) {
  const response = await fetch(url, {
    method: 'get',
  });
  const rawData = await response.json();
  let data = rawData.data;
  return data;
}

export { getData };
