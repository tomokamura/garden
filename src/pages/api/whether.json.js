export async function get({ request }) {
  const urlSearchParams = new URLSearchParams(request.url);
  const params = Object.fromEntries(urlSearchParams.entries());
  const date = Object.values(params)[0];
  const url = `https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&hourly=rain&start_date=${date}&end_date=${date}&timezone=Asia%2FTokyo`;

  let resData;

  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      resData = data;
    });

  return {
    body: JSON.stringify({
      data: resData ? resData : null
    })
  };
};
