var data = [
    { name: "First item", amount: 32 },
    { name: "Second item", amount: 45 },
    { name: "Third item", amount: 12 }
  ];
  document.getElementById(
    "map"
  ).innerHTML = `This is the new array with only amount values ${data.map(
    num => num.amount
  )}`;
  console.log(data);