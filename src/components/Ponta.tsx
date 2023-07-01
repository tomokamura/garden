import type { Component } from "solid-js";
import { createStore } from "solid-js/store"

export const PontaCmp: Component = () => {
  const initialData = {data: {id:null,url:""}}
  const [ponta, setPonta] = createStore(initialData);
  const fetchPontaData = async () => {
    await fetch("/api/ponta.json").then((response) => response.json())
    .then((data) => {
      setPonta(data);
      console.log(data);
      console.log(ponta);
    });
  }
  fetchPontaData();

  return (
    <>
      <div>
        {ponta.data.url ? (
          <img src={ponta.data.url} alt="ponta img" />
        ) : (
          <p>loading...</p>
        )}
      </div>
    </>
  );
};
