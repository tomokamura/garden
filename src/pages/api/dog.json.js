export const get = async ({ params, request }) => {
  let resData;

  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    resData = data;
  } catch (error) {
    console.error(error);
  }

  return {
    headers: {
      'Cache-Control': 'no-store', // クライアント側のキャッシュを無効化
    },
    body: JSON.stringify({
      data: resData ? resData : null
    })
  };
};