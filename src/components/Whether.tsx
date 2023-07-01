import type { Component } from "solid-js";
import { createStore } from "solid-js/store"
import { createResource, createSignal } from "solid-js";

export const WhetherCmp: Component = () => {
  const [whether, setWhether] = createSignal(0);
  const [date, setDate] = createSignal('');
  const [text, setText] = createSignal('');

  const fetchWhetherData = async (dateValue: string) => {
    await fetch(`/api/whether.json?date=${dateValue}`).then((response) => response.json())
    .then((data) => {
      const rain = data.data.hourly.rain;
      const unit = data.data.hourly_units.rain;
      setWhether(rain);
      let total = rain.reduce((sum:number, element:number) => sum + element, 0);
      if (total === 0) {
        setText("この日は雨が降りませんでした！");
      } else {
        setText(`この日の東京の雨量は ${total}${unit} でした。`);
      }
    });
  }

  return (
    <>
    <input type="date" value={date()} onInput={(e) => {setDate(e.currentTarget.value); fetchWhetherData(e.currentTarget.value);}}/>
      <div>
        <p>{text()}</p>
      </div>
      <p class="text-right">powered by <a href="https://open-meteo.com/">https://open-meteo.com/</a></p>
    </>
  );
};
