import type { Component } from "solid-js";

export const Flower: Component = () => {
  let data = {"_count":1,"_last":null,"_items":[{"flower":"花の名前を取得できませんでした","key":"000","lang":"花言葉を取得できませんでした","mmdd":"1111"}]}

  const dt = new Date();
  const m = ("00" + (dt.getMonth()+1)).slice(-2);
  const d = ("00" + (dt.getDate())).slice(-2);
  const mmdd = m +  d;

  fetch(`https://api.whatistoday.ml/v2/birthflower/${mmdd}`, {
    method: 'GET'
  })
  .then(response => {
    if (!response.ok) {
      console.error('サーバーエラー');
    }
    data = response;
  })
  .catch(error => {
    console.error('失敗しました', error);
  });

  return (
    <>
      <p>{data?._items[0].flower}</p>
    </>
  );
};