export const get = async ({ params, request }) => {
  let resData;

  await fetch(`https://dog.ceo/api/breeds/image/random`, {cache: 'no-store'})
  .then((response) => response.json())
  .then((data) => {
    resData = data;
  });

  return {
    body: JSON.stringify({
      data: resData ? resData : null
    })
  }
};
