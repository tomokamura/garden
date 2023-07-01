export const get = async ({ params, request }) => {
  console.log("here");
  var resData;
  try {
    const response = await fetch('https://ponta-api-git-main-tomokamura.vercel.app/api/api/image/random');
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