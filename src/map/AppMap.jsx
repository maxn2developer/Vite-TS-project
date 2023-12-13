import React from "react";
import Map from "./Map";

export default function AppMap() {
  const array = [1, 2, 3, 5];

  const map1 = array.map((x) => x * 2);
  console.log(map1);

  const KVarray = [
    {
      key: "1",
      value: "bananas",
    },
    { key: "2", value: "bananas" },
    { key: "3", value: "bananas" },
  ];

  const reformatted = KVarray.map(({ key, value }) => ({ [key]: value }));

  console.log(reformatted);

  // Mapping an array of numbers to an array of square roots
  // The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array.
  const numbers = [1, 4, 9];
  const roots = numbers.map((num) => Math.sqrt(num));
  console.log(roots);

  return (
    <div className="App">
      <Map />
    </div>
  );
}
