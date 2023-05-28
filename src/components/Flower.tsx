import type { Component } from "solid-js";
import { createStore } from "solid-js/store"
import { createResource } from "solid-js";


export const Flower: Component = () => {
  const initialFlowerData = {"_count":0,"_last":null,"_items":[{"flower":"initial","key":"000","lang":"initial","mmdd":"0000"}]}
  const initialDogData = {message:""}
  const [flower, setFlower] = createStore(initialFlowerData);
  const [dog, setDog] = createStore(initialDogData);
  const fetchFlowerData = async () => {
    await fetch("/api/flower.json").then((response) => response.json())
    .then((data) => {
      setFlower(data.data);
    });
  }
  const fetchDogData = async () => {
    await fetch("/api/dog.json").then((response) => response.json())
    .then((data) => {
      setDog(data.data);
    });
  }
  fetchFlowerData();

  const [data, { refetch }] = createResource(fetchDogData);
  refetch(fetchDogData());

  return (
    <>
    {flower._count !== 0  ? (
      <div>
        <img src={dog.message} alt="" />
        <p class="text-right">powered by <a href="https://dog.ceo/dog-api/">https://dog.ceo/dog-api/</a></p>
        <p>🐶{flower._items[0].mmdd}、{flower._items[0].flower}</p>
        <p>🐶今日の花言葉は、<strong>「{flower._items[0].lang}」</strong>だワン！</p>
        <p class="mt-2 text-right">powered by whatistodayAPI</p>
      </div>
    ) : (
      <p>loading...🐕</p>
    ) }
    </>
  );
};
