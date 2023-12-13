import React from "react";

export default function Map() {
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
      <h1>Hello CodeSandbox</h1>
      <h2>
        In the map function inside JSX, I added a{" "}
        <span style={{ color: "red" }}>key attribute</span> to each
        {" <li> "} element to help React efficiently update the list. I also
        used
        <span style={{ color: "red" }}>{" Object.keys(item)[0]"}</span> to
        access the key and{" "}
        <span style={{ color: "red" }}>{"item[Object.keys(item)[0]]"}</span>
        to access the value of each object in the reformatted array.
      </h2>
      <ul>
        <p>Not working as expected. b/c {"[1]"}.</p>
        {reformatted.map((item, index) => (
          <li key={index}>
            {/* not working as expected. b/c [1] */}
            Key: {Object.keys(item)[1]}, Value: {item[Object.keys(item)[1]]}
          </li>
        ))}
        <hr />
        <p>This is working as expected b/c {"[0] "}assign for number.</p>
        {reformatted.map((item, index) => (
          <li key={index}>
            {/* this is working as expected. b/c [0] assign for number. */}
            Key: {Object.keys(item)[0]}, Value: {item[Object.keys(item)[0]]}
          </li>
        ))}
      </ul>
    </div>
  );
}
