import type { Component } from "solid-js";
import { createStore } from "solid-js/store"

export const FlowerCmp: Component = () => {
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
  fetchDogData();

  const handleClick = async () => {
    await fetchDogData();
  }

  return (
    <>
    {flower._count !== 0  ? (
      <div>
        <p>🐶{flower._items[0].mmdd}、{flower._items[0].flower}</p>
        <p>🐶今日の花言葉は、<strong>「{flower._items[0].lang}」</strong>だワン！</p>
        <p class="mt-2 text-right">powered by whatistodayAPI</p>
        <button onclick={handleClick} class="bg-transparent hover:bg-yellow-500 hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">🐶画像を変更する</button>
        <img src={dog.message} alt="dogs image" class="mt-2"/>
        <p class="text-right">powered by <a href="https://dog.ceo/dog-api/">https://dog.ceo/dog-api/</a></p>
      </div>
    ) : (
      <p>loading...🐕</p>
    ) }
    </>
  );
};
