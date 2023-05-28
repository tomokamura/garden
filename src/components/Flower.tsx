import type { Component } from "solid-js";
import { createStore } from "solid-js/store"


export const Flower: Component = () => {
  const initialData = {"_count":0,"_last":null,"_items":[{"flower":"initial","key":"000","lang":"initial","mmdd":"0000"}]}
  const [flower, setFlower] = createStore(initialData);
  const fetchFlowerData = async () => {
    await fetch("/api/flower.json").then((response) => response.json())
    .then((data) => {
      setFlower(data.data);
    });
  }
  fetchFlowerData();

  return (
    <>
    {flower._count !== 0  ? (
      <div>
        <p>🐶{flower._items[0].mmdd}、{flower._items[0].flower}</p>
        <p>🐶今日の花言葉は、「{flower._items[0].lang}」だワン！</p>
        <p class="mt-8">powered by whatistodayAPI</p>
      </div>
    ) : (
      <p>loading...🐕</p>
    ) }
    </>
  );
};
