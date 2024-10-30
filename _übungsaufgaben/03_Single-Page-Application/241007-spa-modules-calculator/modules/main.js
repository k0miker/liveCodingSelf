import { difference } from "/modules/percentage.js";

const differenceForm = document.getElementById("percentage-change-form");
differenceForm.addEventListener("change", (e) => {
  const result = document.getElementById("change_result");
  const input = [
    document.getElementById("change_1"),
    document.getElementById("change_2"),
  ];
  switch (e.target.id) {
    case "change_1":
    case "change_2":
      result.value = difference(Number(input[0].value), Number(input[1].value));
  }
});
