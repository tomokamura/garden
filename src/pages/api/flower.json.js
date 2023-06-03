export const config = {
  runtime: 'edge',
}

export const get = async ({ params, request }) => {
  const dt = new Date();
  const m = ("00" + (dt.getMonth()+1)).slice(-2);
  const d = ("00" + (dt.getDate())).slice(-2);
  const mmdd = m +  d;

  let resData;

  await fetch(`https://api.whatistoday.ml/v2/birthflower/${mmdd}`)
  .then((response) => response.json())
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
  }
};
