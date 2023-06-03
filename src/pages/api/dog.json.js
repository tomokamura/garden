export const get = async ({ params, request }) => {
  let resData;

  await fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => {
    response.setHeader('X-Vercel-Cache', 'REVALIDATED');
    response.json();
  })
  .then((data) => {
    resData = data;
  });

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