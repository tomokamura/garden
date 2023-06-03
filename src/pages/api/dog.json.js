export const get = async ({ params, request }) => {
  var resData;

  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random',
      {
        "Cache-Control": "no-cache"
      }
    );
    const data = await response.json();
    resData = data;
  } catch (error) {
    console.error(error);
  }

  return {
    body: JSON.stringify({
      data: resData ? resData : null
    },
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, max-age=0, must-revalidate',
        'X-Vercel-Cache': 'REVALIDATED',
      },
    })
  };
};