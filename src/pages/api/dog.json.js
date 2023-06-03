export const get = async ({ params, request }) => {
  var resData;

  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    resData = data;
  } catch (error) {
    console.error(error);
  }

  return {
    body: JSON.stringify({
      data: resData ? resData : null
    })
  };
};